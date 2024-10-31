import Friends from "../Friends/Friends";
import Special from "../Special/Special";

const Cousin = ({name, asset}) => {
    return (
        <div className="border-2 border-teal-500 m-2 p-2 rounded-lg">
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
                {name === 'Sohan' && <Friends></Friends>}
            </section>
        </div>
    );
};

export default Cousin;