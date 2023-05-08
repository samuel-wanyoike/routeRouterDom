import { ChangeProfile } from "../components/changeprofile";
import { useContext } from "react";
import { AppContext } from '../App';

export const Profile = () => {
    const {userName} = useContext(AppContext);
    return (
        <div>
            <h1>This is the profile page</h1>
            <h1>user is: {userName}</h1>
            <ChangeProfile />
        </div>
    );
}