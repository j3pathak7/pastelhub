import Image from "next/image";

const CakeCard = ({ cake }) => {
  return (
    <div className="border bg-white rounded-2xl shadow-2xl shadow-pink m-2">
      <div className="relative p-2">
        <Image
          src={cake.images[0]}
          alt={`Cake: ${cake.name}`}
          layout="responsive"
          width={400}
          height={300}
          className="rounded-2xl object-cover"
        />
      </div>
      <div className="">
        <h3 className="text-xl font-semibold text-center text-chocolate">
          {cake.name}
        </h3>
        <div className="flex justify-between items-center px-2 pb-2">
          <p className="text-gray-600">{cake.description}</p>
          <p className="text-pink">₹{cake.price}</p>
        </div>
      </div>
      <div className="flex justify-center -m-4">
        <button className="px-8 bg-white text-pink text-lg font-bold border border-gray-200 rounded-2xl">
          BUY
        </button>
      </div>
    </div>
  );
};

export default CakeCard;
