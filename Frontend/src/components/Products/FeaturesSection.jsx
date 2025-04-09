import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi2";

const FeaturesSection = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 gap-8 mx-auto text-center md:grid-cols-3">
        {/**Feature 1 */}
        <div className="flex flex-col items-center ">
          <div className="p-4 mb-4 rounded-full">
            <HiShoppingBag />
          </div>

          <h4 className="mb-2 tracking-tighter">FREE INTERNATIONAL SHIPPING</h4>
          <p className="text-sm tracking-tighter text-gray-600">On all orders over $100.00</p>
        </div>

        <div className="flex flex-col items-center ">
          <div className="p-4 mb-4 rounded-full">
            <HiArrowPathRoundedSquare />
          </div>

          <h4 className="mb-2 tracking-tighter">45 DAYS RETURN</h4>
          <p className="text-sm tracking-tighter text-gray-600">Money back guarante</p>
        </div>

        <div className="flex flex-col items-center ">
          <div className="p-4 mb-4 rounded-full">
            <HiOutlineCreditCard />
          </div>

          <h4 className="mb-2 tracking-tighter">SECURE CHECKOUT</h4>
          <p className="text-sm tracking-tighter text-gray-600">100% Secure checkout process</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
