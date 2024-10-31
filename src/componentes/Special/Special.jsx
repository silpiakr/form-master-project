import { useContext } from "react";
import { AssetContext } from "../GrandPa/Grandpa";

const Special = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div className="border-2 border-teal-500 m-2 p-2 rounded-lg">
            <h2>Special Friend</h2>
            <p>has:{asset}</p>
            <p>Also has: {gift}</p>
        </div>
    );
};

export default Special;