const text = document.getElementById("text");
document.getElementById("colorPicker").addEventListener("input", (e) => {
    text.style.color = e.target.value;
});
document.getElementById("fontSize").addEventListener("input", (e) => {
    text.style.fontSize = e.target.value + "px";
});
document.getElementById("fontFamily").addEventListener("change", (e) => {
    text.style.fontFamily = e.target.value;
});