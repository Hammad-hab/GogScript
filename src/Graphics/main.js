var TriangleStyle = {
  height: 0,
  width: 0,
  color: "black",
  size: "50px",
  width1: "25px",
  width2: "25px",
};
var TriangleStyleStr = `height: ${TriangleStyle.height}; width: ${TriangleStyle.width}; border-bottom: ${TriangleStyle.size} solid ${TriangleStyle.color}; border-left: ${TriangleStyle.width1} solid transparent; border-right: ${TriangleStyle.width2} solid transparent;`;

function triangle() {
  document.body.innerHTML = `<div style='${TriangleStyleStr}'></div>`;
}
function setTriangleStyle(color, size, width1, width2) {
  if (size) TriangleStyle.size = size;
  if (color) TriangleStyle.color = color;
  if (width1) TriangleStyle.width1 = width1;
  if (width2) TriangleStyle.width2 = width2;
  TriangleStyleStr = `
height: ${TriangleStyle.height};
width: ${TriangleStyle.width};
border-bottom: ${TriangleStyle.size} solid ${TriangleStyle.color};
border-left:  ${TriangleStyle.width1} solid transparent;
border-right: ${TriangleStyle.width2} solid transparent;
`;
}

function setPosition () {}
setTriangleStyle("rgb(90, 0 , 8)", "500px", "0px", "270px");
triangle()