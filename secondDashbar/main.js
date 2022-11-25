const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text"),
    links = body.querySelector(".sidebar li .icon");

    modeSwitch.addEventListener('click', () => {
        body.classList.toggle("dark");

        if(body.classList.contains("dark")) {
            modeText.innerText = "Claro"
        } else {
            modeText.innerText = "Escuro"        
        }
    })

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle("close")
    })

    searchBtn.addEventListener('click', () => {
        sidebar.classList.remove("close")
    }) //lembre de adiiconar esse efeito aos demais botoes

    links.addEventListener('click', () => {
        sidebar.classList.remove('close')
    })
