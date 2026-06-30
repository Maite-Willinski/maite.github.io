# 🌸 Perfil Digital Interactivo & Frontend Lab

> **Proyecto práctico enfocado en el desarrollo de una interfaz de perfil personal, aplicando estructuras semánticas, estilos modulares y lógica interactiva en el lado del cliente.**

<br>

## 🔗 Enlace al Sitio en Vivo
El entorno de producción se encuentra completamente operativo y desplegado a través del servicio de Gitub Pages. Puedes auditar el resultado interactivo aquí:
🚀 **[Abrir el Perfil Digital en vivo](https://maite-willinski.github.io/maite.github.io/)**

---

## 🔮 Enfoque del Trabajo y Objetivos

Este proyecto ha sido desarrollado con el objetivo de diseñar e implementar una página de perfil personal interactiva partiendo desde cero, sirviendo como puente práctico para afianzar habilidades de desarrollo Frontend.

Tras consolidar la base técnica en hardware y redes durante **SMR**, este trabajo se enfoca en resolver los desafíos de la capa de presentación y la experiencia de usuario (UX):
*   **Diseño de Componentes:** Creación de una interfaz limpia centrada en la identidad visual del desarrollador (incorporando avatar, bio y stacks).
*   **Gestión del Estado Local:** Implementación de interactividad en tiempo real sin depender de librerías externas o frameworks pesados.
*   **Estructura Limpia:** Organización lógica de archivos en la raíz para garantizar un despliegue rápido en servidores.

---

## 🚀 Funcionalidades Clave Desarrolladas

*   **🌓 Selector de Tema Dinámico (Theme Toggle):** Inserción de scripts en JavaScript encargados de alternar los estilos de la página entre modo oscuro y claro de forma fluida, modificando las variables cromáticas de CSS en tiempo real.
*   **📋 Validación de Formularios:** Lógica de programación del lado del cliente aplicada a los campos de captura de datos, asegurando la integridad de la información antes de procesar el evento de envío.
*   **📱 Arquitectura Responsive:** Estructuración de layouts mediante CSS moderno (Media Queries, Flexbox/Grid) que aseguran una adaptación pixel-perfect en smartphones, tablets y pantallas de escritorio.

---

## 🛠️ Stack Tecnológico Aplicado

<table width="100%">
  <tr>
    <td align="center" width="25%">
      <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /><br>
      <small>Estructuración Semántica</small>
    </td>
    <td align="center" width="25%">
      <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /><br>
      <small>Diseño & Variables Lila</small>
    </td>
    <td align="center" width="25%">
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /><br>
      <small>Lógica de Interacción</small>
    </td>
    <td align="center" width="25%">
      <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white" /><br>
      <small>Despliegue e Infraestructura</small>
    </td>
  </tr>
</table>

---

## 🖥️ Relación con la Administración de Sistemas (SMR / ASIR)

Aunque el enfoque principal del trabajo es el Frontend, la estructura del proyecto se ha diseñado siguiendo directrices de optimización de sistemas:
*   **Cero Dependencias:** El uso de JavaScript nativo (*Vanilla JS*) y CSS puro anula el consumo de ancho de banda por peticiones a CDNs externas, reduciendo el tiempo de carga en el servidor.
*   **Estrategia de Despliegue:** Al estructurar el proyecto de forma estática, su despliegue y automatización mediante pipelines de integración continua (como GitHub Actions) es óptimo para integrarse en servidores Nginx locales o contenedores Docker.

---

## 📂 Anatomía del Repositorio

```text
├── index.html          # Esqueleto semántico de la página de perfil
├── styles.css          # Estilos globales y lógica visual de los temas (Dark/Light)
├── main.js             # Controlador de eventos (Theme toggle y validaciones)
├── README.md           # Documentación técnica enfocada del trabajo
└── img/
    └── avataaars.png   # Identidad gráfica integrada (Avatar personal)
