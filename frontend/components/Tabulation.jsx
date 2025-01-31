import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Tabulation.css";

const Tabulation = () => {
  const location = useLocation(); // Récupère l'URL actuelle
  const navigate = useNavigate(); // Permet la navigation
  const [tabs, setTabs] = useState([]); // Stocke les onglets ouverts
  const [activeTab, setActiveTab] = useState(location.pathname); // Onglet actif par défaut

  // Fonction pour générer un label d'onglet (ex: "/about" => "ABOUT")
  const getTabLabel = (path) => {
    return path === "/" ? "Accueil" : path.replace("/", "").toUpperCase();
  };

  // Ajouter un onglet uniquement si l'URL actuelle n'est pas déjà ouverte
  const addTabIfNotExist = useCallback(() => {
    const currentPath = location.pathname;
    
    // Vérifier si l'onglet existe déjà
    setTabs((prevTabs) => {
      const tabExists = prevTabs.some((tab) => tab.path === currentPath);
      if (!tabExists) {
        const newTab = { path: currentPath, label: getTabLabel(currentPath) };
        return [...prevTabs, newTab];
      }
      return prevTabs;
    });

    // Assurer que l'onglet actif est mis à jour si nécessaire
    setActiveTab((prevActiveTab) => {
      if (prevActiveTab !== currentPath) {
        return currentPath;
      }
      return prevActiveTab;
    });
  }, [location.pathname]);

  useEffect(() => {
    addTabIfNotExist();
  }, [location.pathname, addTabIfNotExist]);

  // Changer d'onglet
  const handleTabClick = (path) => {
    setActiveTab(path);
    navigate(path);
  };

  // Fermer un onglet
  const handleCloseTab = (path, event) => {
    event.stopPropagation(); // Empêcher le clic de changer d'onglet

    setTabs((prevTabs) => {
      const newTabs = prevTabs.filter((tab) => tab.path !== path);
      if (newTabs.length === 0) {
        navigate("/"); // Revenir à l'accueil si plus d'onglets ouverts
      } else if (activeTab === path) {
        navigate(newTabs[newTabs.length - 1].path); // Aller au dernier onglet ouvert
      }
      return newTabs;
    });
  };

  // Déplacer un onglet (Drag & Drop)
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("tabIndex", index);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const draggedTabIndex = e.dataTransfer.getData("tabIndex");

    setTabs((prevTabs) => {
      const updatedTabs = [...prevTabs];
      const draggedTab = updatedTabs.splice(draggedTabIndex, 1)[0]; // Retire l'onglet déplacé
      updatedTabs.splice(index, 0, draggedTab); // Insère à la nouvelle position
      return updatedTabs;
    });
  };

  return (
    <div className="tab-container">
      {tabs.map((tab, index) => (
        <div
          key={tab.path}
          className={`tab ${tab.path === activeTab ? "active" : ""}`}
          onClick={() => handleTabClick(tab.path)}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, index)}
        >
          {tab.label}
          <span className="close-btn" onClick={(e) => handleCloseTab(tab.path, e)}>✖</span>
        </div>
      ))}
    </div>
  );
};

export default Tabulation;
