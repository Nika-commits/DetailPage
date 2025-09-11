import { useState } from "react";
import demoProfile from "../../assets/images/demoProfile.png";

// Mobile Navbar Component (your existing mobile navbar)
export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("Pizza");

  const menuItems: string[] = [
    "Pizza",
    "Garlic Bread",
    "Calzone",
    "Kebabs",
    "Salads",
    "Cold Drink",
    "Happy Meal",
    "Deserts",
    "Hot Drinks",
    "Sauses",
    "Orbit",
  ];

  const handleMenuItemClick = (item: string): void => {
    setSelectedMenuItem(item);
    setIsMenuOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* Mobile Navbar */}
      <nav className="flex items-center justify-between p-4 shadow-md relative bg-white">
        <img
          src="./logo.png"
          className="w-[154px] h-[38px] object-contain"
          alt="Logo"
        />
        <button onClick={() => setIsMenuOpen(true)}>
          <img
            src="./menuButton.png"
            className="w-[65px] h-[65px]"
            alt="Menu"
          />
        </button>
      </nav>

      {/* Mobile Cart */}
      <div className="flex flex-row gap-0">
        <div className="basis-1/2 flex gap-3 items-center bg-[#FC8A06] p-4">
          <img
            src={demoProfile}
            alt="Profile"
            className="w-[44px] h-[44px] rounded-full object-cover"
          />
          <p className="text-[14px] font-semibold text-black">Acyan</p>
        </div>
        <div className="basis-1/2 flex items-center justify-center bg-green-500 p-4">
          <img
            src="./cart.png"
            alt="Cart"
            className="w-[40px] h-[40px] object-contain"
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 w-screen h-screen ml-8 mr-8 max-w-[90vw]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img
                  src="./menuImage.png"
                  className="w-[55px] h-[55px]"
                  alt="Menu Icon"
                />
                <h1 className="text-black text-2xl font-bold">Menu</h1>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
            <div className="border-t border-gray-300 mb-6"></div>
            <nav>
              <ul className="space-y-4 font-bold">
                {menuItems.map((item: string) => (
                  <li key={item}>
                    <button
                      onClick={() => handleMenuItemClick(item)}
                      className={`block w-full text-left text-lg py-2 px-3 rounded-md transition-colors duration-200 ${
                        selectedMenuItem === item
                          ? "bg-[#03081F] text-white"
                          : "text-black hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
