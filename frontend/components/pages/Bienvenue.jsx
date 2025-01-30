import React from "react";
import Tabulation from "../Tabulation";
import Adress from "../Adress";

const Bienvenue = () => {
  return (
    <>
      <Tabulation />
      <Adress adress = "Portfolio > Acceuil > Bienvenue.txt" />
      <section> Bienvenue sur mon Portfolio </section>
    </>
  );
};

export default Bienvenue;
