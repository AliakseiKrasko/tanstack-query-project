import {useMeQuery} from "../features/auth/api/use-me.ts";
import {Navigate} from "@tanstack/react-router";
import {AddPlaylistForm} from "../features/playlists/add-playlist/ui/add-playlist-form.tsx";
import {EditPlaylistForm} from "../features/playlists/edit-playlist/ui/edit-playlist-form.tsx";
import {useState} from "react";
import {Playlists} from "../widgets/playlists/ui/play-lists.tsx";


function MyPlaylistsPage() {
    const {data, isPending} = useMeQuery()
    const [editingPlaylistId, setEditingPlaylistId] = useState<string | null>(null)

    if (isPending) {
        <div>Loading...</div>
    }
    if (!data) {
        return <Navigate to="/" replace/>
    }
    return (
        <div>
            <h2>My Playlists</h2>
            <hr/>
            <AddPlaylistForm/>
            <hr/>
            <Playlists userId={data.userId} onPlaylistSelected={setEditingPlaylistId} />
            <hr/>
            {editingPlaylistId && <EditPlaylistForm playlistId={editingPlaylistId}/>}
        </div>
    )
}

export default MyPlaylistsPage
