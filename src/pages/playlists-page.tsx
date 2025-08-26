import {useEffect, useState} from "react";
import {PlayLists} from "../features/play-lists.tsx";

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

export default PlaylistsPage
