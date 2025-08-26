import {useQuery} from "@tanstack/react-query";
import {client} from "./shared/api/client.ts";
import {useEffect, useState} from "react";

function App() {
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

const PlayLists = () => {
    const query = useQuery({
        staleTime: 2000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
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

export default App
