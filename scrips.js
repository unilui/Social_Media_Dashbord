const html = document.querySelector("html");
const checkbox = document.getElementById("darkmode");

const initialColors = {
    bg: "#fff",
    mainBg: "#f8f9fe",
    cardBg: "#f0f3fa",
    textColor: "#000",
    switchDiv: "#98a0c4"
}

const darkMode = {
    bg: "#1d2029",
    mainBg: "#20222f",
    cardBg: "#252b43",
    textColor: "#fff",
    switchDiv: "#2f3244"
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase() 

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])    
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
});