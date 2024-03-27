"use client"; // AllCakes.js
import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import CakeCard from "./CakeCard";

const AllCakes = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const cakesCollection = collection(db, "cakes");
        const cakesSnapshot = await getDocs(cakesCollection);
        const cakesData = cakesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCakes(cakesData);
      } catch (error) {
        console.error("Error fetching cakes:", error);
      }
    };

    fetchCakes();
  }, []);

  return (
    <div className="m-8 lg:mx-28">
      <div className="max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-semibold mb-4 text-chocolate heading">
          Cakes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 my-4">
          {cakes.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCakes;
