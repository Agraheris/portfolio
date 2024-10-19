import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen, faFile } from '@fortawesome/free-solid-svg-icons';
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
                    <FontAwesomeIcon icon={faFile} /> Bienvenue.txt
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary>
                  <FontAwesomeIcon icon={faFolderOpen} style={{color: "#FFD43B",}} /> Projets
                </summary>
                <ul>
                  <li><FontAwesomeIcon icon={faFile} /> Spice_odyssey.js</li>
                  <li><FontAwesomeIcon icon={faFile} /> Moodflix.js</li>
                  <li><FontAwesomeIcon icon={faFile} /> Adopte_un_geux.js</li>
                  <li><FontAwesomeIcon icon={faFile} /> Virtuart.js</li>
                  <li><FontAwesomeIcon icon={faFile} /> Dino_space_survivor.js</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <FontAwesomeIcon icon={faFolder} style={{color: "#FFD43B",}} /> Compétences
                </summary>
                <ul>
                  <li><FontAwesomeIcon icon={faFile} /> Frontend.json</li>
                  <li><FontAwesomeIcon icon={faFile} /> Backend.json</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <FontAwesomeIcon icon={faFolder} style={{color: "#FFD43B",}} /> Formation
                </summary>
                <ul>
                  <li><FontAwesomeIcon icon={faFile} /> BootCamp_WildCodeSchool.txt</li>
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
