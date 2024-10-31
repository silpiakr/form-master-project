import { useContext } from "react";
import { MoneyContext } from "../GrandPa/Grandpa";


const Brother = () => {
    const [money] = useContext(MoneyContext)
    return (
        <div className="border-2 border-teal-500 m-2 p-2 rounded-lg">
            <h2>Brother</h2>
            <p>GranDpa: {money}</p>
        </div>
    );
};

export default Brother;