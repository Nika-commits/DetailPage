import { MapPin, User } from "lucide-react";
import { useState } from "react";
import forwardButton from "../../assets/images/forwardButton.png";

export default function DesktopNavbar() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Home");
  const [location, setLocation] = useState<string>(
    "Regent Street, A4, A4201, London"
  );

  const desktopMenuItems: string[] = [
    "Home",
    "Browse Menu",
    "Special Offers",
    "Restaurants",
    "Track Order",
  ];

  const cartItems: object[] = [
    { id: 1, name: "Item 1", quantity: 2 },
    { id: 2, name: "Item 2", quantity: 1 },
    { id: 3, name: "Item 3", quantity: 3 },
    { id: 4, name: "Item 4", quantity: 3 },
    { id: 5, name: "Item 5", quantity: 1 },
    { id: 6, name: "Item 6", quantity: 2 },
  ];

  const totalItems = cartItems.reduce(
    (sum, item: any) => sum + item.quantity,
    0
  );

  return (
    <div className=" hidden lg:block">
      {/* Top Bar */}
      <div className="bg-[#FAFAFA] flex h-[70px] max-w-screen mr-20 ml-20 text-sm">
        {/* Promo Message */}
        <div className="flex items-center gap-1 flex-1 justify-start px-4">
          <span className="text-yellow-500">⭐</span>
          <span className="text-gray-700">Get 5% Off your first order.</span>
          <span className="text-[#FC8A06] font-medium">Promo: ORDER5</span>
        </div>

        {/* Location & Cart Section */}
        <div className="flex items-center gap-4 flex-1 justify-end px-4">
          {/* Location Selector */}
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin size={16} />
            <span>{location}</span>
            <button className="text-[#FC8A06] hover:underline">
              Change Location
            </button>
          </div>

          {/* Cart and Profile Section */}
          <div className="flex bg-green-600 items-center h-full rounded-b-[12px] divide-x divide-white/40">
            {/* Cart Items Count */}
            <div className="flex items-center gap-2 text-white px-3 h-full">
              <img
                src="./cart.png"
                alt="Cart"
                className="w-[43px] h-[43px] object-contain"
              />
              <span className="font-medium">{totalItems} Items</span>
            </div>

            {/* Cart Total */}
            <div className="flex items-center text-white px-3 h-full">
              <span className="font-medium">GBP 79.89</span>
            </div>

            {/* Profile Icon */}
            <div className="flex items-center justify-center px-3 h-full">
              <img
                src={forwardButton}
                alt="forward"
                className="w-[38px] h-[38px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white   px-6 py-4 w-full mt-4">
        <div className="flex items-center justify-between">
          {/* Logo (hard left) */}
          <div>
            <img
              src="./logo.png"
              alt="logo"
              className="w-[215px] h-[53px] object-contain ml-16"
            />
          </div>

          {/* Right side: nav menu + login */}
          <div className="flex items-center space-x-8">
            {/* Navigation Menu */}
            <nav>
              <ul className="flex items-center space-x-6">
                {desktopMenuItems.map((item: string) => (
                  <li key={item}>
                    <button
                      onClick={() => setSelectedCategory(item)}
                      className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 whitespace-nowrap ${
                        selectedCategory === item
                          ? "bg-[#FC8A06] text-white"
                          : "text-gray-700 hover:text-[#FC8A06]"
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Login/Signup Button */}
            <button className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 whitespace-nowrap flex-shrink-0">
              <div className="bg-[#FC8A06] rounded-full w-5 h-5 flex items-center justify-center">
                <User size={12} />
              </div>
              Login/Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
