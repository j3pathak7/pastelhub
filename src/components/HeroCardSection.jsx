import Image from "next/image";

// Constants for card data
const cardData = [
  {
    src: "/assets/pastry1.png",
    alt: "Product",
    title: "Products",
    description: "Explore our delectable range of cakes and pastries.",
  },
  {
    src: "/assets/cake1.png",
    alt: "Cake Class",
    title: "Cake Class",
    description: "Learn the art of cake decorating from our expert bakers.",
  },
  {
    src: "/assets/pastry2.png",
    alt: "Recipes",
    title: "Recipes",
    description:
      "Discover our collection of delicious cake and pastry recipes.",
  },
];

const HeroCardSection = () => {
  return (
    <div className="card-section relative bg-white p-2 rounded-2xl shadow-2xl">
      <div className="container mx-auto p-4 border border-gray-200 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div key={index} className="card rounded-lg flex items-center">
              <div className="mr-4">
                <Image src={card.src} width={250} height={250} alt={card.alt} />
              </div>
              <div>
                <h3 className="text-3xl font-semibold mb-2 text-chocolate heading">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCardSection;
