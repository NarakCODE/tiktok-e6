// // Define the custom element class
// class LogoComponent extends HTMLElement {
//     constructor() {
//         super();

//         // Create a shadow DOM
//         this.attachShadow({ mode: 'open' });

//         // Define the HTML structure
//         this.shadowRoot.innerHTML = `
//             <style>
//                 .logo-container {
//                     display: flex;
//                     align-items: center;
//                     gap: 10px;
//                     padding: 10px;
//                     font-family: Arial, sans-serif;
//                 }

//                 .logo-image {
//                     width: 40px;
//                     height: 40px;
//                     background-color: #007bff;
//                     border-radius: 50%;
//                 }

//                 .logo-text {
//                     font-size: 24px;
//                     font-weight: bold;
//                     color: #333;
//                 }
//             </style>

//             <div class="logo-container">
//                 <div class="logo-image"></div>
//                 <div class="logo-text">
//                     <slot>Company Name</slot>
//                 </div>
//             </div>
//         `;
//     }

//     // Lifecycle callback when the element is added to the DOM
//     connectedCallback() {
//         // You can add initialization logic here
//         console.log('Logo component mounted');
//     }

//     // Lifecycle callback when the element is removed from the DOM
//     disconnectedCallback() {
//         console.log('Logo component unmounted');
//     }

//     // Method to update the logo color
//     setColor(color) {
//         const logoImage = this.shadowRoot.querySelector('.logo-image');
//         logoImage.style.backgroundColor = color;
//     }
// }

// // Register the custom element
// customElements.define('logo-component', LogoComponent);
