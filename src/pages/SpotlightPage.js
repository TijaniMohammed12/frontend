
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import "./SpotlightPage.css";

const spotlightUsers = [
  { name: "Amira", age: 24, image: "https://via.placeholder.com/300x400?text=Amira" },
  { name: "Jayden", age: 27, image: "https://via.placeholder.com/300x400?text=Jayden" },
  { name: "Luna", age: 22, image: "https://via.placeholder.com/300x400?text=Luna" },
];

export default function Spotlight() {
  return (
    <div className="spotlight-container">
      <h2 className="spotlight-title">✨ Spotlight</h2>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="spotlight-swiper"
      >
        {spotlightUsers.map((user, index) => (
          <SwiperSlide key={index}>
            <div className="spotlight-card">
              <img src={user.image} alt={user.name} />
              <h3>{user.name}, {user.age}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
