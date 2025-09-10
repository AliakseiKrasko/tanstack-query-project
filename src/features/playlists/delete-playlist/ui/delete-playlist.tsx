import {useDeleteMutation} from "../api/useDeleteMutation.ts";

type Props = {
    playlistId: string
}

export const DeletePlaylist = ({playlistId}: Props) => {
    const {mutate} = useDeleteMutation()

    const handleDeleteClick = () => {
        mutate(playlistId)
    }
    return <button onClick={handleDeleteClick}>🗑️</button>
};

