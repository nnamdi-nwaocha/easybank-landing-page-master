const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const headerCover = document.querySelector(".header");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
    headerCover.classList.toggle("bright-element")
});



// function handleElementVisibility(elementId, thresholdWidth) {
//     var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
//     var elementToToggle = document.getElementById(elementId);

//     if (viewportWidth < thresholdWidth) {
//         // Below threshold, hide the element
//         if (elementToToggle) {
//             elementToToggle.style.display = 'none';
//         }
//     } else {
//         // Above threshold, show the element
//         if (elementToToggle) {
//             elementToToggle.style.display = 'block'; // Adjust this based on your element's initial display style
//         }
//     }
// }

// window.addEventListener('resize', function() {
//     // Call the function with the desired element ID and threshold width
//     handleElementVisibility('element1', 1000);
//     handleElementVisibility('element2', 1000);
//     handleElementVisibility('element3', 1000);
//     // Add more elements and thresholds as needed
// });

// // Initial call to handle the initial state
// handleElementVisibility('element1', 1000);
// handleElementVisibility('element2', 1000);
// handleElementVisibility('element3', 1000);
// // Add more elements and thresholds as needed