import {keepPreviousData, useQuery} from "@tanstack/react-query";

export const PlayLists = () => {
    const [page, setPage] = useState(1);

    const query = useQuery({
        queryKey: ['playlist', page],
        queryFn: async () => {
        const response = await client.GET('/playlists', {
            params: {
                query: {
                    pageNumber: page,
                }
            }
        });
        if (response.error) {
            throw (response as unknown as {error: Error}).error;
        }
        return response.data;
    },
        placeholderData: keepPreviousData
})


    if (query.isPending) return <span>Loading...</span>
    if (query.isError) return <span>{JSON.stringify(query.error)}</span>
    return (
        <div>
            <hr />
            <Pagination
                pagesCount={query.data.meta.pagesCount}
                current={page}
                changePageNumber={setPage}
                isFetching={query.isFetching}
            />
            <ul>
                {query.data.data.map((playlist) => (
                    <li key={playlist.id}>
                        {playlist.attributes.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

import {client} from "../shared/api/client.ts";
import {Pagination} from "../shared/ui/pagination/pagination.tsx";
import {useState} from "react";
