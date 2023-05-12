let colorBar = document.getElementById("color")
let selectBar = document.getElementById("select")
let main = document.getElementById("main")
let form = document.getElementById("form")

let color;
let select;
let mainHtml = ""
// https://www.thecolorapi.com/scheme?hex=24B1E0&mode=triad&count=5

form.onsubmit = function (e) {
    e.preventDefault()
    color = (colorBar.value)
    select = selectBar.value
    color = color.slice(1, color.length)
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${select}&count=7`)
        .then(response => response.json())
        .then(data => {
            // iterate through data object
            mainHtml = ""
            data.colors.forEach(color => {
                mainHtml += `
                <section style="background-color: ${color.hex.value};">
            <div class="color-scheme"></div>
            <div class="color-title">${color.hex.value}</div>
        </section>
                `
            })
            main.innerHTML = mainHtml
        })
}

document.getElementById("value").click()