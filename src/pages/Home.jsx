import React from "react";
import Hero from "../components/home/Hero";
import WeatherCard from "../components/ui/cards/WeatherCard";

export default function Home() {
  return (
    <>
      <WeatherCard />
      <Hero />
    </>
  );
}
