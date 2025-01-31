import React from "react";
import { Outlet } from "react-router-dom";
import NavigationArborescent from "../components/NavigationArborescent";
import TopMenu from "../components/TopMenu";
import Tabulation from "../components/Tabulation";

const Layout = () => {
  return (
    <>
      <TopMenu />
      <section className="aside">
        <NavigationArborescent />
        <section className="main">
          <Tabulation /> {/* Affichage des onglets dynamiques */}
          <Outlet /> {/* Contenu de la page actuelle */}
        </section>
      </section>
    </>
  );
};

export default Layout;
