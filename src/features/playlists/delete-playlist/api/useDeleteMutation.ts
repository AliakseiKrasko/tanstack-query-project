import {useMutation, useQueryClient} from "@tanstack/react-query";
import {client} from "../../../../shared/api/client.ts";
import type {SchemaGetPlaylistsOutput} from "../../../../shared/api/schema.ts";

export const useDeleteMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (playlistId: string) => {
            const response = await client.DELETE('/playlists/{playlistId}', {
                params: {path: {playlistId}}
            });
            return response.data;
        },
        onSuccess: (_, playlistId) => {
            queryClient.setQueriesData({queryKey: ['playlists']}, (oldData: SchemaGetPlaylistsOutput) => {
                return {
                    ...oldData,
                    data: oldData.data.filter(t => t.id !== playlistId),
                }
            })
        }
    })
}