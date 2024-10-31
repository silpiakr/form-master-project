import Special from "../Special/Special";

const MySelf = ({asset}) => {
    return (
        <div className="border-2 border-teal-500 m-2 p-2 rounded-lg">
            <h2>Myself</h2>
            <Special asset={asset}></Special>
        </div>
    );
};

export default MySelf;