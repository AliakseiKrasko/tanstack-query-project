import {PlayLists} from "../features/play-lists.tsx";
import {useMeQuery} from "../features/auth/api/use-me.ts";
import {Navigate} from "@tanstack/react-router";

function MyPlaylistsPage() {
const {data, isPending} = useMeQuery()

    if (isPending) {
        <div>Loading...</div>
    }
    if (!data) {
        return <Navigate to="/" replace />
    }
    return (
        <div>
            <h2>My Playlists</h2>
            <PlayLists userId={data.userId} />

        </div>
    )
}

export default MyPlaylistsPage
