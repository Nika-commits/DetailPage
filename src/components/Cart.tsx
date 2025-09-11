import demoProfile from "../assets/images/demoProfile.png";

export default function Cart() {
  return (
    <div className="flex flex-row gap-0">
      {/* Profile Section */}
      <div className="basis-1/2 flex gap-3 items-center bg-[#FC8A06] p-4 ">
        <img
          src={demoProfile}
          alt="Profile"
          className="w-[44px] h-[44px] rounded-full object-cover"
        />
        <p className="text-[14px] font-semibold text-black">Acyan</p>
      </div>

      {/* Cart Section */}
      <div className="basis-1/2 flex items-center justify-center bg-green-500 p-4">
        <img
          src="./cart.png"
          alt="Cart"
          className="w-[40px] h-[40px] object-contain"
        />
      </div>
    </div>
  );
}
