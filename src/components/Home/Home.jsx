
import food from "../../assets/images/body/home-sushi-title.png"
import food2 from "../../assets/images/body/home-sushi-rolls.png"
const Home = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 p-10 lg:p-20 justify-items-center">
            <div className="p-20">
                <h2 className="text-4xl font-bold">Enjoy Delicious</h2>
                <div className="flex">
                <img className="w-10 h-10
                 rounded-full" src={food} alt="" />
                    <h2 className="text-4xl font-bold">Ablum Food</h2>
                </div>
                <p className="my-8">Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our bodies need to function.</p>
                <a className="bg-orange-600 px-4 py-2 rounded-full text-white " href="/">Order Now</a>
            </div>
            <img className="p-10"  src={food2} alt="" />
        </div>
    );
};

export default Home;