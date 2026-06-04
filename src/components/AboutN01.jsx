import React from 'react'
import './About.css'

const AboutN01 = () => {
    
    return (
        <div className="about-container">
            <h1>Quiénes somos</h1>

            <div id="info">
                <h2>Grupo N01</h2>
                
                <p>
                    Proyecto desarrollado por el grupo N01 de la asignatura Ingeniería del Software Avanzada.
                </p>

                <ul>
                    <li>
                        <strong>Lidia Logroño Ramas</strong>
                        <p>Implementación de funcionalidades y documentación del proyecto.</p>
                    </li>

                    <li>
                        <strong>Marco Antonio Fernández Heras</strong>
                        <p>Desarrollo y validación de pruebas.</p>
                    </li>

                    <li>
                        <strong>Pablo Pérez-Aradros Calvo</strong>
                        <p>Implementación de funcionalidades y revisión del código.</p>
                    </li>

                    <li>
                        <strong>Francisco José Saiz Ezquerra de Paz</strong>
                        <p>Gestión del repositorio, coordinación del equipo y validación de pruebas.</p>
                    </li>

                    <li>
                        <strong>Alba Duro Cabrera</strong>
                        <p>Validación de pruebas y documentación del proyecto.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutN01
