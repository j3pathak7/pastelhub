// Navbar.js
"use client";
import React, { useState } from "react";
import { navLinks } from "../../constants";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <nav className="fixed mx-auto bg-background top-0 left-0 right-0 z-10 bg-opacity-100 ">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
          <Link
            href={"/"}
            className="text-2xl md:text-5xl text-secondaryDark font-semibold"
          >
            <Image src="/logo2.png" width={120} height={120} alt="Logo" />
          </Link>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded "
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded "
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </nav>
    </div>
  );
};

export default Navbar;

// // Navbar.js
// "use client";
// import React, { useState } from "react";
// import { navLinks } from "../../constants";
// import Link from "next/link";
// import NavLink from "./NavLink";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import MenuOverlay from "./MenuOverlay";
// import Image from "next/image";

// const Navbar = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   return (
//     <nav className="sticky mx-auto bg-background top-0 left-0 right-0 z-10 bg-opacity-100 relative">
//       <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
//         <Link
//           href={"/"}
//           className="text-2xl md:text-5xl text-secondaryDark font-semibold"
//         >
//           <Image src="/logo2.png" width={120} height={120} alt="Logo" />
//         </Link>
//         <div className="mobile-menu block md:hidden">
//           {!navbarOpen ? (
//             <button
//               onClick={() => setNavbarOpen(true)}
//               className="flex items-center px-3 py-2 border rounded "
//             >
//               <Bars3Icon className="h-5 w-5" />
//             </button>
//           ) : (
//             <button
//               onClick={() => setNavbarOpen(false)}
//               className="flex items-center px-3 py-2 border rounded "
//             >
//               <XMarkIcon className="h-5 w-5" />
//             </button>
//           )}
//         </div>
//         <div className="menu hidden md:block md:w-auto" id="navbar">
//           <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <NavLink href={link.path} title={link.title} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {navbarOpen ? <MenuOverlay links={navLinks} /> : null}

//       <svg
//         className="wave-pattern"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 1440 320"
//         preserveAspectRatio="none"
//       >
//         <path
//           fill="#000000"
//           fillOpacity="1"
//           d="M0,256L11.4,213.3C22.9,171,46,85,69,90.7C91.4,96,114,192,137,218.7C160,245,183,203,206,165.3C228.6,128,251,96,274,80C297.1,64,320,64,343,106.7C365.7,149,389,235,411,240C434.3,245,457,171,480,144C502.9,117,526,139,549,138.7C571.4,139,594,117,617,101.3C640,85,663,75,686,101.3C708.6,128,731,192,754,181.3C777.1,171,800,85,823,53.3C845.7,21,869,43,891,69.3C914.3,96,937,128,960,165.3C982.9,203,1006,245,1029,224C1051.4,203,1074,117,1097,101.3C1120,85,1143,139,1166,176C1188.6,213,1211,235,1234,218.7C1257.1,203,1280,149,1303,149.3C1325.7,149,1349,203,1371,197.3C1394.3,192,1417,128,1429,96L1440,64L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"
//         ></path>
//       </svg>
//     </nav>
//   );
// };

// export default Navbar;
