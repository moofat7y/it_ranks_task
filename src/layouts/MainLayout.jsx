import React from "react";
import Header from "../components/header/Header";
import SideMenu from "../components/right_menu/SideMenu";
import BNavigation from "../components/bottom_part/BNavigation";
import BList from "../components/bottom_part/BList";
import { Outlet } from "react-router-dom";
import CalendarModal from "../components/modal/CalendarModal";
import WeatherModal from "../components/modal/WeatherModal";

export default function MainLayout() {
  return (
    <>
      <Header />
      <SideMenu />
      <BNavigation />
      <BList />
      <CalendarModal />
      <WeatherModal />
      <main>
        <Outlet />
      </main>
    </>
  );
}
