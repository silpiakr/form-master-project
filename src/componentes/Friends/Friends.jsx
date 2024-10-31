import { useContext } from "react";
import { AssetContext } from "../GrandPa/Grandpa";

const Friends = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h3>Friends: {gift}</h3>
        </div>
    );
};

export default Friends;