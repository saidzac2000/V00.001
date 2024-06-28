// Variable
var body = document.querySelector("body");
// Functions
function Write({
    element, 
    write, 
    size, 
    color, 
    align, 
    font, 
    display
}) {
  // V0.01
  var text = document.createElement(element);
  text.textContent = write;
  text.classList.add("text");
  text.style.fontSize = size + 'px';
  text.style.color = color;
  text.style.textAlign = align;
  text.style.fontFamily = font;
  text.style.display = display; 
  body.appendChild(text);
}

Write({
    element: "p",
    write: "hello",
    size: 100,
    color: "red",
    align: "center",
    font: "Cursive",
    display: "block"
});
