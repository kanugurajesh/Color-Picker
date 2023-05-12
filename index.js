let colorBar = document.getElementById("color")
let selectBar = document.getElementById("select")
let main = document.getElementById("main")
let form = document.getElementById("form")
let number = document.getElementById("number")
let color;
let select;
let mainHtml = ""

form.onsubmit = function (e) {
    e.preventDefault()
    color = (colorBar.value)
    select = selectBar.value
    color = color.slice(1, color.length)
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${select}&count=${number.value}`)
        .then(response => response.json())
        .then(data => {
            mainHtml = ""
            data.colors.forEach(color => {
                mainHtml += `
                <section style="background-color: ${color.hex.value};" class="section">
            <div class="color-scheme"></div>
            <div class="color-title">${color.hex.value}</div>
        </section>
                `
            })
            main.innerHTML = mainHtml
        })
        .then(() => {
            let colorSchemes = document.getElementsByClassName("section")
            for (let i = 0; i < colorSchemes.length; i++) {
                colorSchemes[i].addEventListener("click", () => {
                    navigator.clipboard.writeText(colorSchemes[i].style.backgroundColor)
                    alert("Copied to clipboard");
                })
            }
        })
}

document.getElementById("value").click()