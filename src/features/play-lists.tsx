import {useQuery} from "@tanstack/react-query";
import {client} from "../shared/api/client.ts";

export const PlayLists = () => {
    const query = useQuery({
        queryKey: ['playlist'],
        queryFn: () => client.GET('/playlists')

    })
    return (
        <div>
            <ul>
                {query.data?.data?.data.map((playlist) => (
                    <li>{playlist.attributes.title}</li>
                ))}
            </ul>
        </div>
    )
}