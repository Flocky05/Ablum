
import food from "../../assets/images/body/about-sushi.png"
import food2 from "../../assets/images/body/about-sushi-title.png"

const AboutUs = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 p-10 md:p-16 lg:p-20 justify-items-center">
            <div>
                <img className=" p-5 lg:p-10" src={food} alt="" />
            </div>
            <div className="mt-10 lg:mt-32 p-10">
                <h4 className="text-orange-500 italic text-2xl ">About us</h4>
                <h3 className="text-2xl font-bold">We Provide</h3>
                <div className="flex">
                    <img className="bg-orange-300 rounded-full h-10 w-10" src={food2} alt="" />
                    <h3 className="text-2xl font-bold">Healthy Food</h3>
                    <h3></h3>
                </div>
                <p className="text-lg">Consuming a healthy diet throughout the life-course helps to prevent malnutrition in all its forms as well as a range of noncommunicable diseases (NCDs) and conditions. However, increased production of processed foods, rapid urbanization and changing lifestyles have led to a shift in dietary pattern</p>
            </div>
        </div>
    );
};

export default AboutUs;