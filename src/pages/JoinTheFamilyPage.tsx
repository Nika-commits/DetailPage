import PizzaBanner from "../assets/images/PizzaBanner.jpg";

export default function JoinTheFamilyPage() {
  return (
    <>
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${PizzaBanner})` }}
        ></div>

        {/* Transparent Gray Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-6xl md:text-8xl font-bold text-white text-center tracking-wide">
            Join the Family
          </h1>
        </div>
      </div>
    </>
  );
}
