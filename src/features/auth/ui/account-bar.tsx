import {UseLoginMutation} from "../api/use-login-mutation.tsx";
import {useMeQuery} from "../api/use-me.ts";
import {CurrentUser} from "./current-user/current-user.tsx";

export const AccountBar = () => {

    const query = useMeQuery()
    if (query.isPending) return <></>
    return (
        <div>
            {!query.data && <UseLoginMutation/>}
            {query.data && <CurrentUser/>}
        </div>
    )

};