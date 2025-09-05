import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Plus, ShoppingCart } from "lucide-react";
import { useCart, MenuItem } from "../contexts/CartContext";
import paneerManchurian from "../assets/paneer-manchurain.png";
import mushroomChilly from "../assets/mushroomChilly.png";
import blackPepperPaneer from "../assets/black-pepper-paneer.png";
import vegChilly from "../assets/veg-chilly.png";
import chickenLollipop from "../assets/chicken-lollipop.png";
import chickenGarlic from "../assets/chicken-garlic.png";
import chickenManchurian from "../assets/chicken-manchurian.png";
import chickenChilly from "../assets/chicken-chilly.png";
import vegNoodles from "../assets/veg-noodles.png";
import paneerNoodles from "../assets/paneer-noodles.png";
import eggNoodles from "../assets/egg-noodles.png";
import chickenNoodles from "../assets/chicken-noodles.png";
import steamRice from "../assets/steam-rice.png";
import jeeraRice from "../assets/jeera-rice.png";
import mushroomPulao from "../assets/mushroom-pulao.png";
import paneerPulao from "../assets/paneer-pulao.png";

const Menu: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const { dispatch } = useCart();

  const menuData = {
    starters: [
      {
        id: "st1",
        name: "Paneer Manchurain",
        price: 160,
        category: "starters",
        description: "Crispy fried paneer tossed in a spicy Manchurian sauce",
        image: paneerManchurian,
      },
      {
        id: "st2",
        name: "Mushroom Chilly",
        price: 140,
        category: "starters",
        description:
          "Tender mushrooms stir-fried with capsicum, onion, and spicy chilli sauce",
        image: mushroomChilly,
      },
      {
        id: "st3",
        name: "Black Pepper Paneer",
        price: 150,
        category: "starters",
        description:
          "Paneer cubes cooked with black pepper and aromatic spices",
        image: blackPepperPaneer,
      },
      {
        id: "st4",
        name: "Veg Chilly Dry",
        price: 110,
        category: "starters",
        description: "Crispy vegetables tossed in a tangy chilli-garlic sauce",
        image: vegChilly,
      },
    ],
    mainCourse: [
      {
        id: "mc1",
        name: "Chicken Chilly",
        price: 160,
        category: "mainCourse",
        description:
          "Spicy chicken pieces stir-fried with capsicum, onions, and chilli sauce",
        image: chickenChilly,
      },
      {
        id: "mc2",
        name: "Chicken Manchurian",
        price: 160,
        category: "mainCourse",
        description:
          "Crispy chicken cooked in tangy and flavorful Manchurian sauce",
        image: chickenManchurian,
      },
      {
        id: "mc3",
        name: "Chicken Garlic",
        price: 145,
        category: "mainCourse",
        description:
          "Tender chicken stir-fried with garlic and aromatic spices",
        image: chickenGarlic,
      },
      {
        id: "mc4",
        name: "Chicken Lollipop",
        price: 190,
        category: "mainCourse",
        description: "Crispy fried chicken lollipops tossed in a spicy sauce",
        image: chickenLollipop,
      },
    ],

    noodles: [
      {
        id: "bv1",
        name: "Veg Noodles",
        price: 70,
        category: "noodles",
        description: "Stir-fried noodles with fresh vegetables and sauces",
        image:
          vegNoodles,
      },
      {
        id: "bv2",
        name: "Paneer Noodles",
        price: 110,
        category: "noodles",
        description: "Flavorful noodles tossed with paneer cubes and spices",
        image:
          paneerNoodles,
      },
      {
        id: "bv3",
        name: "Egg Noodles",
        price: 90,
        category: "noodles",
        description: "Classic noodles stir-fried with egg and vegetables",
        image:
          eggNoodles,
      },
      {
        id: "bv4",
        name: "Chicken Noodles",
        price: 110,
        category: "noodles",
        description: "Noodles tossed with juicy chicken pieces and seasonings",
        image:
          chickenNoodles,
      },
    ],
    rice: [
      {
        id: "ds1",
        name: "Steam Rice",
        price: 60,
        category: "rice",
        description: "Plain steamed rice, light and fluffy",
        image:
          steamRice,
      },
      {
        id: "ds2",
        name: "Jeera Rice",
        price: 70,
        category: "rice",
        description: "Aromatic basmati rice tempered with cumin seeds",
        image:
          jeeraRice,
      },
      {
        id: "ds3",
        name: "Mushroom Pulao",
        price: 125,
        category: "rice",
        description: "Fragrant rice cooked with mushrooms and mild spices",
        image:
          mushroomPulao,
      },
      {
        id: "ds4",
        name: "Paneer Pulao",
        price: 110,
        category: "rice",
        description: "Delicious rice cooked with paneer cubes and aromatic spices",
        image:
          paneerPulao,
      },
    ],
  };

  const addToCart = (item: MenuItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
    // Show a brief animation or notification
    const button = document.getElementById(`add-btn-${item.id}`);
    if (button) {
      button.classList.add("animate-bounce");
      setTimeout(() => {
        button.classList.remove("animate-bounce");
      }, 600);
    }
  };

  const categories = [
    { key: "starters", title: "Starters - (Veg)", items: menuData.starters },
    {
      key: "mainCourse",
      title: "Starters - (Non-veg)",
      items: menuData.mainCourse,
    },
    { key: "noodles", title: "Noodles", items: menuData.noodles },
    { key: "rice", title: "Indian Rice", items: menuData.rice },
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-amber-600">Menu</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic Indian and
            continental dishes, prepared with the finest ingredients and
            traditional cooking techniques.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center border-b-2 border-amber-600 pb-2 inline-block w-full">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative overflow-hidden hover:cursor-grab">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="bg-amber-600 text-white px-2 py-1 rounded-full text-sm font-bold">
                          ₹{item.price}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-amber-600">
                          ₹{item.price}
                        </span>
                        <button
                          id={`add-btn-${item.id}`}
                          onClick={() => addToCart(item)}
                          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
                        >
                          <ShoppingCart size={16} />
                          <span className="text-sm font-medium">Add</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
