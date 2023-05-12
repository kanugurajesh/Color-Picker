// get element by id
let colorBar = document.getElementById("color")
let selectBar = document.getElementById("select")
let main = document.getElementById("main")
let form = document.getElementById("form")
let number = document.getElementById("number")

// initialize variables
let color;
let select;

// event listener
form.onsubmit = (e) => {
    e.preventDefault();
    const color = colorBar.value.slice(1);
    const select = selectBar.value;
    const count = number.value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${select}&count=${count}`)
        .then(response => response.json())
        .then(data => {
            const colorSections = data.colors.map(color => `
                <section style="background-color: ${color.hex.value};" class="section">
                    <div class="color-scheme"></div>
                    <div class="color-title">${color.hex.value}</div>
                </section>
            `).join("");
            main.innerHTML = colorSections;
        })
        .then(() => {
            const colorSchemes = document.getElementsByClassName("section");
            Array.from(colorSchemes).forEach(colorScheme => {
                colorScheme.addEventListener("click", () => {
                    navigator.clipboard.writeText(colorScheme.style.backgroundColor);
                    alert("Copied to clipboard");
                });
            });
        });
};

// click event on page load to initialize color picker
document.getElementById("value").click()