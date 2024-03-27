import React from "react";
import Link from "next/link"; // Importing the Link component from Next.js
import Image from "next/image";

const HorizontalScrollCakes = ({ cake }) => {
  return (
    <Link
      href={`/viewcakes/${cake.id}`}
      className="flex p-4 bg-white rounded-2xl shadow-2xl cursor-pointer shadow-pink justify-between"
      style={{ width: "250px", height: "150px" }}
    >
      <Image
        src={cake.images[0]}
        width={200}
        height={200}
        alt="cake"
        loading="lazy"
        className="w-36 h-auto object-cover"
      />

      {/* Details Section */}
      <div className="flex flex-col justify-between text-right">
        <div>
          <div className="text-sm mb-2 text-pink">{cake.name}</div>{" "}
          <div className="font-bold text-pink">₹ {cake.price}</div>{" "}
        </div>
      </div>
    </Link>
  );
};

export default HorizontalScrollCakes;
