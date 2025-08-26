import {useQuery} from "@tanstack/react-query";
import {client} from "../shared/api/client.ts";
import {useEffect, useState} from "react";

function PlaylistsPage() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const id = setInterval(() => {
            setIsVisible(prev => !prev);
        }, 10000)
        return () => clearInterval(id)
    }, []);
    return (
        <>
            <h2>Hello IT-INCUBATOR</h2>
            {isVisible && <PlayLists/>}
        </>
    )
}

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

export default PlaylistsPage
