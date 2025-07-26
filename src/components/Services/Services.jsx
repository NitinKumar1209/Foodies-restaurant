import React from "react";
import Img from "../../assets/biryani.png";
import Img2 from "../../assets/Paneer_Butter_Masala.png";
import Img3 from "../../assets/biryani4.png";
import StarRatings from "react-star-ratings";

const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "Biryani",
    rating: 4.5,
    description:
      "Aromatic basmati rice cooked with tender meat and flavorful spices, served with raita.",
  },
  {
    id: 2,
    img: Img2,
    name: "Paneer Butter Masala",
    rating: 4.2,
    description:
      "Rich and creamy tomato-based gravy with soft paneer cubes and a touch of butter.",
  },
  {
    id: 3,
    img: Img3,
    name: "Chicken Biryani",
    rating: 4.0,
    description:
      "Refreshing blend of cold milk and coffee topped with whipped cream and ice.",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="zoom-in"
                data-aos-duration="300"
                className="bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white rounded-2xl shadow-xl transition-transform duration-300 transform hover:scale-105 group max-w-[300px] w-full"
              >
                {/* Image */}
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-[120px] h-[120px] object-cover rounded-full mx-auto -translate-y-10 group-hover:scale-105 group-hover:rotate-6 transition-all duration-300 shadow-md"
                  />
                </div>

                {/* Content */}
                <div className="p-4 text-center -mt-6">
                  {/* Ratings */}
                  <div className="flex justify-center mb-2">
                    <StarRatings
                      rating={service.rating}
                      starRatedColor="gold"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="2px"
                      name={`rating-${service.id}`}
                    />
                  </div>

                  {/* Title */}
                  <h1 className="text-xl font-bold mb-2">{service.name}</h1>

                  {/* Description */}
                  <p className="text-sm text-gray-500 group-hover:text-white transition duration-300 line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
