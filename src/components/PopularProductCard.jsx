import { star } from "../assets/icons";
import { cart } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
      <img src={imgURL} alt={name} className="w-full h-full" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-between w-full max-sm:w-full">
        <button className="bg-[#e2b727] hover:bg-[#b5801f] transition-colors duration-300 text-white py-3 px-4 rounded font-montserrat font-medium flex items-center gap-2 justify-center ">
          <img src={cart} alt="cart-icon" width={24} height={24} /> Add to Cart
        </button>
        <button className="bg-coral-red hover:bg-red-700 transition-colors duration-300 text-white py-3 px-4 rounded font-montserrat font-medium flex items-center justify-center gap-2  ">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PopularProductCard;
