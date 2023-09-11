
import lock from "../../assets/images/card/lock.png"
const FoodCard = (props) => {
    const{name,img,price,body}=props.data;
    return (
        <div className="flex flex-col items-center border rounded-lg bg-gray-100 w-60 mx-auto m-4 shadow-lg">
            <img className="w-40 h-40 p-3" src={img} alt="" />
            <div className="text-center my-4">
                <p className="text-lg font-semibold">{name}</p>
                <p>{body}</p>
                <div className="flex justify-between items-center">
                    <h3 className="text-xl text-orange-600 font-semibold">{price}</h3>
                    <img className="w-6 h-6 bg-gray-400 rounded-full" src={lock} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FoodCard;