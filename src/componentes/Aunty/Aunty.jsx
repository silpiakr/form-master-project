import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { AssetContext, MoneyContext } from "../GrandPa/Grandpa";

const Aunty = ({asset}) => {
    const[ money, setMoney] = useContext(MoneyContext);
    const ring = useContext(AssetContext)
    return (
        <div className="border-2 border-teal-500 m-2 p-2 rounded-lg">
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Rita'}>
                    <p>{ring}</p>
                </Cousin>
                <Cousin asset={asset} name={'Mita'}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button className="btn" onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunty;