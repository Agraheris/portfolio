import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Tabulation = () => {
  const location = useLocation(); // Récupère l'URL actuelle
  const navigate = useNavigate(); // Permet la navigation
  const [tabs, setTabs] = useState([]); // Stocke les onglets ouverts
  const [activeTab, setActiveTab] = useState(location.pathname); // Onglet actif par défaut

  // Ajouter un onglet uniquement si l'URL actuelle n'est pas déjà ouverte
  useEffect(() => {
    const currentPath = location.pathname;

    // Vérifie si l'onglet existe déjà
    setTabs((prevTabs) => {
      if (!prevTabs.some((tab) => tab.path === currentPath)) {
        return [...prevTabs, { path: currentPath, label: currentPath.replace("/", "").toUpperCase() || "ACCUEIL" }];
      }
      return prevTabs;
    });

    setActiveTab(currentPath); // Mettre à jour l'onglet actif
  }, [location.pathname]);

  // Changer d'onglet
  const handleTabClick = (path) => {
    setActiveTab(path);
    navigate(path);
  };

  // Fermer un onglet
  const handleCloseTab = (path, event) => {
    event.stopPropagation(); // Empêcher le clic de changer d'onglet

    setTabs((prevTabs) => prevTabs.filter((tab) => tab.path !== path));

    // Si l'onglet fermé est actif, changer d'onglet
    if (activeTab === path) {
      const remainingTabs = tabs.filter((tab) => tab.path !== path);
      if (remainingTabs.length > 0) {
        navigate(remainingTabs[remainingTabs.length - 1].path); // Aller au dernier onglet ouvert
      } else {
        navigate("/"); // Revenir à l'accueil si plus d'onglets ouverts
      }
    }
  };

  return (
    <div className="tab-container">
      {tabs.map((tab) => (
        <div
          key={tab.path}
          className={`tab ${tab.path === activeTab ? "active" : ""}`}
          onClick={() => handleTabClick(tab.path)}
        >
          {tab.label}
          <span className="close-btn" onClick={(e) => handleCloseTab(tab.path, e)}>✖</span>
        </div>
      ))}
    </div>
  );
};

export default Tabulation;
