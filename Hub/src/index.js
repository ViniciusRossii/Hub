// Função para definir o background

function setBg() {
    if (localStorage.getItem("background") == 0 || localStorage.getItem("background") == null) {
        document.body.style.background = "linear-gradient( 90.1deg, #2196f3 16.8%, rgba(0, 50, 255, 1) 105.2%)"
    }
    if (localStorage.getItem("background") == 1) {
        document.body.style.background = "radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% )"
    }
    if (localStorage.getItem("background") == 2) {
        document.body.style.background = "linear-gradient( 106.4deg,  rgba(255,104,192,1) 11.1%, rgba(104,84,249,1) 81.3% )"
    }
    if (localStorage.getItem("background") == 3) {
        document.body.style.background = "linear-gradient( 179.2deg,  rgba(34,34,34,1) 0%, rgba(8,0,153,1) 29.7%, rgba(118,6,166,1) 63.4%, rgba(233,0,64,0.58) 100.1% )"
    }
    if (localStorage.getItem("background") == 4) {
        document.body.style.background = "linear-gradient( 111.7deg,  rgba(251,198,6,1) 2.4%, rgba(224,82,95,1) 28.3%, rgba(194,78,154,1) 46.2%, rgba(32,173,190,1) 79.4%, rgba(22,158,95,1) 100.2% )"
    }
}

// Configuração do Hamburger Menu

document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("hamburger-menu").classList.toggle("on")
    document.getElementsByTagName("ul")[0].classList.toggle("on")
})

// Configuração do Menu Color

document.getElementById("color1").addEventListener("click", () => {
    localStorage.setItem("background", 0)
    setBg()
})

document.getElementById("color2").addEventListener("click", () => {
    localStorage.setItem("background", 1)
    setBg()
})

document.getElementById("color3").addEventListener("click", () => {
    localStorage.setItem("background", 2)
    setBg()
})

document.getElementById("color4").addEventListener("click", () => {
    localStorage.setItem("background", 3)
    setBg()
})

document.getElementById("color5").addEventListener("click", () => {
    localStorage.setItem("background", 4)
    setBg()
})

// Configuração dos Menu de Navegação

document.getElementById("url1").addEventListener("click", () => {
    window.location.href = "https://youtube.com"
})

document.getElementById("url2").addEventListener("click", () => {
    window.location.href = "https://music.youtube.com"
})

document.getElementById("url3").addEventListener("click", () => {
    window.location.href = "https://instagram.com"
})

document.getElementById("url4").addEventListener("click", () => {
    window.location.href = "https://twitter.com"
})

document.getElementById("url5").addEventListener("click", () => {
    window.location.href = "https://github.com"
})

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
    document.getElementById("title-hora").innerHTML = `Agora são ${horas} hora(s) e ${minutos} minuto(s).`
}

// Chamada de Função

setBg()
setWelcome()
setTitleHora()
setInterval(setWelcome, 500)
setInterval(setTitleHora, 500)