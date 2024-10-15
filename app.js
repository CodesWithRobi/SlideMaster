alert("THis works");
const bottomToolbar = document.querySelector("#filmstrip-controls > div");

let fullscreenBtn = document.createElement("div");

// Create the main container div
const visibilityControlsContainer = document.createElement("div");
visibilityControlsContainer.classList.add(
  "punch-filmstrip-controls-visibility-controls",
);
visibilityControlsContainer.id = "filmstrip-visibility-controls-container";
visibilityControlsContainer.style.display = "flex";

// Create the toggle button div
const toggleButton = document.createElement("div");
toggleButton.classList.add();
toggleButton.setAttribute("role", "button");
toggleButton.setAttribute("tabindex", "0");
toggleButton.setAttribute("aria-label", "Hide filmstrip");
toggleButton.setAttribute("data-tooltip", "Hide filmstrip");
toggleButton.style.userSelect = "none";

// Create outer box div
const outerBox = document.createElement("div");
outerBox.classList.add("goog-inline-block", "goog-custom-button-outer-box");

// Create inner box div
const innerBox = document.createElement("div");
innerBox.classList.add("goog-inline-block", "goog-custom-button-inner-box");

// Create the icon container div
const iconContainer = document.createElement("div");
iconContainer.classList.add("punch-filmstrip-visibility-toggle-icon-container");

// Create the SVG directly using innerHTML
const svgString = `
<svg id="collapse-filmstrip" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
  <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z" fill="#444746"/>
</svg>
`;

// Insert the SVG
iconContainer.innerHTML = svgString;

// Append inner and outer boxes
innerBox.appendChild(iconContainer);
outerBox.appendChild(innerBox);
toggleButton.appendChild(outerBox);

// Append toggle button to the main container
visibilityControlsContainer.appendChild(toggleButton);

// Append the entire container to the body or any target element
if (bottomToolbar) {
  bottomToolbar.appendChild(visibilityControlsContainer);
}

// Optional: Add toggle functionality (if needed)
toggleButton.addEventListener("click", () => {
  let header = document.getElementById("docs-chrome");
  if (header) {
    header.style.display = header.style.display === "none" ? "block" : "none";
  }
});

// Add hover and focus effects
toggleButton.addEventListener("mouseover", () => {
  toggleButton.classList.add("goog-custom-button-hover");
});

toggleButton.addEventListener("mouseout", () => {
  toggleButton.classList.remove("goog-custom-button-hover");
});

toggleButton.addEventListener("focus", () => {
  toggleButton.classList.add("goog-custom-button-focused");
});

toggleButton.addEventListener("blur", () => {
  toggleButton.classList.remove("goog-custom-button-focused");
});
