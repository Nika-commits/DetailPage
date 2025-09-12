// import { Clock, ShoppingBag, Star } from "lucide-react";
// import Burger from "../assets/images/Burger.png";

// interface HeroSectionProps {
//   restaurantData?: {
//     name: string;
//     location: string;
//     rating: number;
//     reviewCount: number;
//     isLoving?: boolean;
//     isOpen: boolean;
//     openUntil?: string;
//     minimumOrder: string;
//     deliveryTime: string;
//     heroImage: string;
//   };
// }

// export default function HeroSection({ restaurantData }: HeroSectionProps) {
//   // Mock data - replace with API data later
//   const defaultData = {
//     name: "McDonald's East London",
//     location: "East London",
//     rating: 3.4,
//     reviewCount: 1340,
//     isLoving: true,
//     isOpen: true,
//     openUntil: "3:00 AM",
//     minimumOrder: "12 GBP",
//     deliveryTime: "20-25 Minutes",
//     heroImage: Burger,
//     // "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=250&fit=crop&auto=format",
//   };

//   const data = restaurantData || defaultData;

//   const formatReviewCount = (count: number): string => {
//     if (count >= 1000000) {
//       return `${(count / 1000000).toFixed(1)}M`;
//     }
//     if (count >= 1000) {
//       return `${(count / 1000).toFixed(1)}k`;
//     }
//     return count.toString();
//   };

//   const renderStars = (rating: number) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 >= 0.5;

//     for (let i = 1; i <= 5; i++) {
//       if (i <= fullStars) {
//         stars.push(
//           <Star key={i} size={14} className="text-yellow-500 fill-current" />
//         );
//       } else if (i === fullStars + 1 && hasHalfStar) {
//         stars.push(
//           <Star
//             key={i}
//             size={14}
//             className="text-yellow-500 fill-current opacity-50"
//           />
//         );
//       } else {
//         stars.push(<Star key={i} size={14} className="text-gray-300" />);
//       }
//     }
//     return stars;
//   };

//   return (
//     <div className="mt-10 mx-auto">
//       {/* Mobile Layout */}
//       <div className="block lg:hidden bg-[#1c1f34] pb-4">
//         {/* Hero Image with Rating Overlay */}
//         <div className="relative mb-4">
//           <div className="h-48 w-full text-white flex items-center justify-center overflow-hidden">
//             <img
//               src={data.heroImage}
//               alt={`${data.name} food`}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Rating Card - Mobile Position */}
//           <div className="absolute bottom-3 right-3 bg-white rounded-lg p-2 shadow-md">
//             <div className="flex items-center">
//               <div className="text-slate-800 text-xl font-bold mr-1">
//                 {data.rating.toFixed(1)}
//               </div>
//               <div className="flex items-center justify-center gap-0.5">
//                 {renderStars(data.rating)}
//               </div>
//             </div>
//             <div className="text-xs text-gray-500 text-center">
//               {formatReviewCount(data.reviewCount)} reviews
//             </div>
//           </div>
//         </div>

//         {/* Open Status Banner - Mobile */}
//         {data.isOpen && data.openUntil && (
//           <div className="bg-[#FC8A06] text-white px-4 py-2 flex items-center justify-center gap-2 mb-4 mx-4 rounded-lg">
//             <Clock size={16} />
//             <span className="font-medium">Open until {data.openUntil}</span>
//           </div>
//         )}

//         {/* Content Section - Mobile */}
//         <div className="px-4">
//           {/* Loving It Badge - Mobile */}
//           {data.isLoving && (
//             <div className="text-orange-400 text-sm font-medium mb-2 text-center">
//               I'm lovin' it with a blend of Indians continental!
//             </div>
//           )}

//           {/* Restaurant Name - Mobile */}
//           <h1 className="text-xl font-bold text-center mb-3 text-white">
//             {data.name}
//           </h1>

//           {/* Info Badges - Mobile Stacked */}
//           <div className="flex flex-col gap-2">
//             <div className="flex items-center justify-center gap-2 bg-slate-800 text-white rounded-full px-4 py-2 text-xs">
//               <ShoppingBag size={14} />
//               <span>Min Order: {data.minimumOrder}</span>
//             </div>

//             <div className="flex items-center justify-center gap-2 bg-slate-800 text-white rounded-full px-4 py-2 text-xs">
//               <Clock size={14} />
//               <span>Delivery: {data.deliveryTime}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Desktop Layout */}
//       <div className="hidden lg:flex">
//         {/* Main Hero Container */}
//         <div className="relative bg-slate-800 h-[477px] mx-20  text-white w-full rounded-xl overflow-hidden">
//           <div className="flex h-full">
//             {/* Left Content */}
//             <div className="flex-1 flex flex-col justify-center p-8">
//               {/* Loving It Badge */}
//               {data.isLoving && (
//                 <div className="text-yellow-400 text-sm font-medium mb-2">
//                   I'm lovin' it with a blend of Indians continental!
//                 </div>
//               )}

//               {/* Restaurant Name */}
//               <h1 className="text-6xl font-bold mb-4">{data.name}</h1>

//               {/* Info Badges */}
//               <div className="flex gap-3 mb-6">
//                 <div className="flex items-center justify-center w-64 h-12 border border-white gap-2 bg-slate-700 rounded-full px-4 py-2 text-sm">
//                   <ShoppingBag size={16} />
//                   <span>Min Order: {data.minimumOrder}</span>
//                 </div>

//                 <div className="flex items-center justify-center w-64 h-12 border border-white gap-2 bg-slate-700 rounded-full px-4 py-2 text-sm">
//                   <Clock size={16} />
//                   <span>Delivery: {data.deliveryTime}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Content - Image and Rating */}
//             {/* <div className="relative w-96 flex-shrink-0"> */}
//             <div className="relative  h-[580px] w-[800px] mt-2 mr-2 mb-2  flex-shrink-0">
//               {/* Hero Image */}
//               <div className="h-fit w-fit m-4 overflow-hidden rounded-lg">
//                 <img
//                   src={data.heroImage || Burger}
//                   alt={`${data.name} food`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Rating Card Overlay */}
//               <div className="absolute bottom-30 left-[-2] bg-white rounded-lg p-8 shadow-lg">
//                 <div className="text-slate-800 text-4xl font-bold text-center">
//                   {data.rating.toFixed(1)}
//                 </div>
//                 <div className="flex items-center justify-center gap-0.5 mt-1">
//                   {renderStars(data.rating)}
//                 </div>
//                 <div className="text-xl text-gray-500 mt-1 text-center">
//                   {formatReviewCount(data.reviewCount)} reviews
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Open Status Banner */}
//           {data.isOpen && data.openUntil && (
//             <div className="absolute bottom-0 left-0 p-4 bg-[#FC8A06] rounded-tr-xl text-white  flex items-center gap-2">
//               <Clock size={16} />
//               <span className="font-medium">Open until {data.openUntil}</span>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { Clock, ShoppingBag, Star } from "lucide-react";
import Burger from "../assets/images/Burger.png";

interface HeroSectionProps {
  restaurantData?: {
    name: string;
    location: string;
    rating: number;
    reviewCount: number;
    isLoving?: boolean;
    isOpen: boolean;
    openUntil?: string;
    minimumOrder: string;
    deliveryTime: string;
    heroImage: string;
  };
}

export default function HeroSection({ restaurantData }: HeroSectionProps) {
  // Mock data - replace with API data later
  const defaultData = {
    name: "McDonald's East London",
    location: "East London",
    rating: 3.4,
    reviewCount: 1340,
    isLoving: true,
    isOpen: true,
    openUntil: "3:00 AM",
    minimumOrder: "12 GBP",
    deliveryTime: "20-25 Minutes",
    heroImage: Burger,
    // "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=250&fit=crop&auto=format",
  };

  const data = restaurantData || defaultData;

  const formatReviewCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <Star key={i} size={14} className="text-yellow-500 fill-current" />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <Star
            key={i}
            size={14}
            className="text-yellow-500 fill-current opacity-50"
          />
        );
      } else {
        stars.push(<Star key={i} size={14} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="mt-10 mx-auto">
      {/* Mobile Layout */}
      <div className="block lg:hidden bg-[#1c1f34] pb-4">
        {/* Hero Image with Rating Overlay */}
        <div className="relative mb-4">
          <div className="h-48 w-full text-white flex items-center justify-center overflow-hidden">
            <img
              src={data.heroImage}
              alt={`${data.name} food`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rating Card - Mobile Position */}
          <div className="absolute bottom-3 right-3 bg-white rounded-lg p-2 shadow-md">
            <div className="flex items-center">
              <div className="text-slate-800 text-xl font-bold mr-1">
                {data.rating.toFixed(1)}
              </div>
              <div className="flex items-center justify-center gap-0.5">
                {renderStars(data.rating)}
              </div>
            </div>
            <div className="text-xs text-gray-500 text-center">
              {formatReviewCount(data.reviewCount)} reviews
            </div>
          </div>
        </div>

        {/* Open Status Banner - Mobile */}
        {data.isOpen && data.openUntil && (
          <div className="bg-[#FC8A06] text-white px-4 py-2 flex items-center justify-center gap-2 mb-4 mx-4 rounded-lg">
            <Clock size={16} />
            <span className="font-medium">Open until {data.openUntil}</span>
          </div>
        )}

        {/* Content Section - Mobile */}
        <div className="px-4">
          {/* Loving It Badge - Mobile */}
          {data.isLoving && (
            <div className="text-orange-400 text-sm font-medium mb-2 text-center">
              I'm lovin' it with a blend of Indians continental!
            </div>
          )}

          {/* Restaurant Name - Mobile */}
          <h1 className="text-xl font-bold text-center mb-3 text-white">
            {data.name}
          </h1>

          {/* Info Badges - Mobile Stacked */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2 bg-slate-800 text-white rounded-full px-4 py-2 text-xs">
              <ShoppingBag size={14} />
              <span>Min Order: {data.minimumOrder}</span>
            </div>

            <div className="flex items-center justify-center gap-2 bg-slate-800 text-white rounded-full px-4 py-2 text-xs">
              <Clock size={14} />
              <span>Delivery: {data.deliveryTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        {/* Main Hero Container - with relative positioning and overflow visible */}
        <div className="relative bg-slate-800 h-[477px] mx-20 text-white w-full rounded-xl overflow-visible">
          <div className="flex h-full">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center p-8">
              {/* Loving It Badge */}
              {data.isLoving && (
                <div className="text-yellow-400 text-sm font-medium mb-2">
                  I'm lovin' it with a blend of Indians continental!
                </div>
              )}

              {/* Restaurant Name */}
              <h1 className="text-6xl font-bold mb-4">{data.name}</h1>

              {/* Info Badges */}
              <div className="flex gap-3 mb-6">
                <div className="flex items-center justify-center w-64 h-12 border border-white gap-2 bg-slate-700 rounded-full px-4 py-2 text-sm">
                  <ShoppingBag size={16} />
                  <span>Min Order: {data.minimumOrder}</span>
                </div>

                <div className="flex items-center justify-center w-64 h-12 border border-white gap-2 bg-slate-700 rounded-full px-4 py-2 text-sm">
                  <Clock size={16} />
                  <span>Delivery: {data.deliveryTime}</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image and Rating */}
            <div className="relative h-[580px] w-[800px] mt-2 mr-2 mb-2 flex-shrink-0">
              {/* Hero Image */}
              <div className="h-fit w-fit m-4 overflow-hidden rounded-lg">
                <img
                  src={data.heroImage || Burger}
                  alt={`${data.name} food`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rating Card Overlay */}
              <div className="absolute bottom-30 left-[-2] bg-white rounded-lg p-8 shadow-lg">
                <div className="text-slate-800 text-4xl font-bold text-center">
                  {data.rating.toFixed(1)}
                </div>
                <div className="flex items-center justify-center gap-0.5 mt-1">
                  {renderStars(data.rating)}
                </div>
                <div className="text-xl text-gray-500 mt-1 text-center">
                  {formatReviewCount(data.reviewCount)} reviews
                </div>
              </div>
            </div>
          </div>

          {/* Open Status Banner - Now flowing outward with bottom-[-10px] */}
          {data.isOpen && data.openUntil && (
            <div className="absolute bottom-[-20px] left-0 bg-[#FC8A06] rounded-br-[12px] rounded-tr-[12px] px-6 py-3 text-white flex items-center gap-2 shadow-lg">
              <Clock size={18} />
              <span className="font-medium text-lg">
                Open until {data.openUntil}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
