// Variáveis

var menuNavItem
const menuNavLinks = []
const backgrounds = {
    "bg0": "linear-gradient( 90.1deg, #2196f3 16.8%, rgba(0, 50, 255, 1) 105.2%)",
    "bg1": "radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% )",
    "bg2": "linear-gradient( 106.4deg,  rgba(255,104,192,1) 11.1%, rgba(104,84,249,1) 81.3% )",
    "bg3": "linear-gradient( 179.2deg,  rgba(34,34,34,1) 0%, rgba(8,0,153,1) 29.7%, rgba(118,6,166,1) 63.4%, rgba(233,0,64,0.58) 100.1% )",
    "bg4": "linear-gradient( 111.7deg,  rgba(251,198,6,1) 2.4%, rgba(224,82,95,1) 28.3%, rgba(194,78,154,1) 46.2%, rgba(32,173,190,1) 79.4%, rgba(22,158,95,1) 100.2% )"
}

// Função para definir o background

function setBg() {
    for (i = 0; i < document.getElementsByClassName("color-options").length; i++) {
        if (localStorage.getItem("hub-background") == null) {
            document.body.style.background = backgrounds.bg0
            break
        }
        else if (localStorage.getItem("hub-background") == i) {
            document.body.style.background = backgrounds[`bg${i}`]
        }
    }
}

// Configuração do Hamburger Menu

document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("menu-color").classList.toggle("on")
})

// Configuração do Menu Color

for (i = 0; i < document.getElementsByClassName("color-options").length; i++) {
    document.getElementsByClassName("color-options")[i].addEventListener("click", (event) => {
        localStorage.setItem("hub-background", event.target.id.slice(5) - 1)
        setBg()
    })
}

// Configuração do Menu de Navegação

for (i = 0; i < document.getElementsByClassName("nav-options").length; i++) {
    menuNavItem = document.getElementsByClassName("nav-options")[i].dataset.menuNavItem
    if (menuNavItem == "music") { // Apenas para o Youtube Music
        menuNavLinks.push(`https://${menuNavItem}.youtube.com`)
        document.getElementsByClassName("nav-options")[i].addEventListener("click", (event) => {
            window.location.href = `${menuNavLinks[event.target.id.slice(3) - 1]}`
        })
        continue
    }
    menuNavLinks.push(`https://${menuNavItem}.com`)
    document.getElementsByClassName("nav-options")[i].addEventListener("click", (event) => {
        window.location.href = `${menuNavLinks[event.target.id.slice(3) - 1]}`
    })
}

// Display de Images do Menu de Navegação

for (i = 0; i < document.getElementsByClassName("nav-options").length; i++) {
    menuNavItem = document.getElementsByClassName("nav-options")[i].dataset.menuNavItem
    document.getElementsByClassName("nav-options")[i].style.backgroundImage = `url('src/icons/${menuNavItem}.png')`
}

// Configuração dos Títulos

function setWelcome() {
    const welcome = document.getElementById("welcome")
    const horas = new Date().getHours()
    if (horas >= 6 && horas <= 11) {
        welcome.innerHTML = "Bom dia!"
    }
    else if (horas >= 12 && horas <= 17) {
        welcome.innerHTML = "Boa tarde!"
    } else if (horas >= 18 || horas <= 5) {
        welcome.innerHTML = "Boa noite!"
    }
}

function setTitleHora() {
    const horas = new Date().getHours()
    const minutos = new Date().getMinutes()
    document.getElementById("title-hora").innerHTML = `Agora são ${horas} ${horas == 1 ? "hora" : "horas"} e ${minutos} ${minutos == 1 ? "minuto" : "minutos."}`
}

// Chamada de Função

setBg()
setWelcome()
setTitleHora()
setInterval(setWelcome, 500)
setInterval(setTitleHora, 500)