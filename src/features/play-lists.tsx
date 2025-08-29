import {useQuery} from "@tanstack/react-query";

export const PlayLists = () => {
    const [page, setPage] = useState(1);

    const query = useQuery({
        queryKey: ['playlist'],
        queryFn: async () => {
        const response = await client.GET('/playlists');
        if (response.error) {
            throw (response as unknown as {error: Error}).error;
        }
        return response.data;
    }
})


    if (query.isPending) return <span>Loading...</span>
    if (query.isError) return <span>{JSON.stringify(query.error)}</span>
    return (
        <div>
            <Pagination
                pagesCount={query.data.meta.pagesCount}
                currentPage={page}
                onPageNumberChange={setPage}
                isFetching={query.isFetching}
            />
            <ul>
                {query.data.data.map((playlist) => (
                    <li key={playlist.id}>{playlist.attributes.title}</li>
                ))}
            </ul>
        </div>
    )
}

import {client} from "../shared/api/client.ts";
import {Pagination} from "../shared/ui/pagination/utils/pagination.tsx";
import {useState} from "react";
