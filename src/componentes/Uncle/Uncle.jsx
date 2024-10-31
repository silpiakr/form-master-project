import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div className="border-2 border-teal-500 m-2 p-2 rounded-lg">
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin asset={asset} name={'Nikita'}></Cousin>
                <Cousin name={'Sohan'} />
            </section>
        </div>
    );
};

export default Uncle;