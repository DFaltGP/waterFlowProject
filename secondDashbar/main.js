const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    searchInput = body.querySelector(".search-box input"),
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

    // searchInput.addEventListener('input',(search) => {
    //     const dataBase = ["data1","data2","data3"];
    //     const res = [];
    //     for(let data of dataBase) {
    //         if(search === data){
    //             res.push(search)
    //             console.log(res)
    //         }
    //     }
    // })

    
    