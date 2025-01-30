import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen, faFile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './NavigationArborescent.css';

function NavigationArborescent() {
  return (
    <ul className="tree">
      <li>
        <details open>
          <summary>
            <FontAwesomeIcon icon={faFolderOpen} style={{color: "#FFD43B",}} /> Portfolio
          </summary>
          <ul>
            <li>
              <details>
                <summary>
                  <FontAwesomeIcon icon={faFolder} style={{color: "#FFD43B",}} /> Acceuil
                </summary>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faFile} /> <Link to ="/">Bienvenue.txt</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary>
                  <FontAwesomeIcon icon={faFolder} style={{color: "#FFD43B",}} /> Projets
                </summary>
                <ul>
                  <li><FontAwesomeIcon icon={faFile} /> <Link to ="/spice"> Spice_odyssey.js </Link></li>
                  <li><FontAwesomeIcon icon={faFile} /> <Link to ="/moodflix"> Moodflix.js </Link></li>
                  <li><FontAwesomeIcon icon={faFile} /> <Link to ="/adopte">Adopte_un_geux.js </Link></li>
                  <li><FontAwesomeIcon icon={faFile} /> <Link to ="/virtuart">Virtuart.js </Link></li>
                  <li><FontAwesomeIcon icon={faFile} /> <Link to ="/dino">Dino_space_survivor.js </Link></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <FontAwesomeIcon icon={faFolder} style={{color: "#FFD43B",}} /> Compétences
                </summary>
                <ul>
                  <li><FontAwesomeIcon icon={faFile} /> <Link to ="/frontend">Frontend.json </Link></li>
                  <li><FontAwesomeIcon icon={faFile} /> <Link to="/backend">Backend.json </Link></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <FontAwesomeIcon icon={faFolder} style={{color: "#FFD43B",}} /> Formation
                </summary>
                <ul>
                  <li><FontAwesomeIcon icon={faFile} /> <Link to="/wild">BootCamp_WildCodeSchool.txt </Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
}

export default NavigationArborescent;
