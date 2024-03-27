"use client";
import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import HorizontalScrollCakes from "./HorizontalScrollCard";
import Link from "next/link";

const cakesHorizontalScroll = () => {
  const [cakeList, setcakeList] = useState(null); // Initialize cakeList as null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cakeCollectionRef = collection(db, "cakes");
        const data = await getDocs(cakeCollectionRef);
        const cakeData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setcakeList(cakeData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-center lg:mx-36">
      <h2 className="m-8 text-4xl md:text-6xl text-chocolate heading">
        Featured Cakes
      </h2>
      <div className="flex overflow-x-auto p-4 space-x-4 hide-scrollbar">
        {cakeList === null
          ? `Loading...`
          : cakeList.slice(0, 8).map(
              (
                cake // Display only the first 5 cakes
              ) => (
                <div
                  key={cake.id}
                  className="cake-caked"
                  style={{ height: "200px", width: "300px" }}
                >
                  <HorizontalScrollCakes cake={cake} />
                </div>
              )
            )}
      </div>
      <div className="flex justify-center">
        <Link href="/cakes" className="btn w-40">
          See all cakes
        </Link>
      </div>
    </div>
  );
};

export default cakesHorizontalScroll;
