"use client";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { IoStarSharp } from "react-icons/io5";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      quote:
        "The cakes here are absolutely divine! Every bite feels like a celebration. Highly recommend!",
      author: "Priya Sharma",
    },
    {
      id: 2,
      quote:
        "I ordered a custom cake for my son's birthday, and it was a huge hit! The design was perfect, and it tasted heavenly.",
      author: "Rahul Desai",
    },
    {
      id: 3,
      quote:
        "The variety of flavors available here is unmatched. I've tried several cakes, and each one is better than the last.",
      author: "Neha Patel",
    },
    // Add more reviews as needed
  ];

  const properties = {
    prevArrow: <GrLinkPrevious className="m-2" />,
    nextArrow: <GrLinkNext className="m-2" />,
  };

  return (
    <div className="bg-pink text-center text-white py-12 mt-24">
      <h2 className="text-3xl font-bold text-center mb-8">What Clients Say</h2>
      <div className="slide-container">
        <Slide {...properties}>
          {reviews.map((review) => (
            <div key={review.id} className="each-slide p-8">
              <div className="px-8 flex justify-center py-2">
                <IoStarSharp className="text-2xl text-chocolate" />
                <IoStarSharp className="text-2xl text-chocolate" />
                <IoStarSharp className="text-2xl text-chocolate" />
                <IoStarSharp className="text-2xl text-chocolate" />
                <IoStarSharp className="text-2xl text-chocolate" />
              </div>
              <p className="text-sm">{review.quote}</p>
              <p className="text-lg font-bold mt-4">{review.author}</p>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Reviews;
