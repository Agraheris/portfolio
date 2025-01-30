import React from "react";
import NavigationArborescent from "../components/NavigationArborescent";
import TopMenu from "../components/TopMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <TopMenu />
      <section className="aside">
        <NavigationArborescent />
        <section className="main">
          <Outlet /> {/* Cet élément affichera les composants de chaque route */}
        </section>
      </section>
    </>
  );
};

export default Layout;
