import {UseLogoutMutation} from "../api/use-logout-mutation.tsx";

export const LogoutButton = () => {
    const mutation = UseLogoutMutation()

    const handleLogoutClick = () => {
        mutation.mutate()
    }

    return <button onClick={handleLogoutClick}>Logout</button>

};