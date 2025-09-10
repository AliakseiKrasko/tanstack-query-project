import {PlayLists} from "../widgets/playlists/ui/play-lists.tsx";
import {useMeQuery} from "../features/auth/api/use-me.ts";
import {Navigate} from "@tanstack/react-router";
import {AddPlaylistForm} from "../features/playlists/add-playlist/ui/add-playlist-form.tsx";

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
            <hr />
            <AddPlaylistForm />
            <hr />
            <PlayLists userId={data.userId} />

        </div>
    )
}

export default MyPlaylistsPage
