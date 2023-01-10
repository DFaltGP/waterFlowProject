const dataBase = [
    {
        periodo: "23/11",
        consumo: "43",
        time: "180",
        spends: "400",
        situation: true,
    },
    {
        periodo: "23/11",
        consumo: "43",
        time: "180",
        spends: "300",
        situation: true,
    },
    {
        periodo: "23/11",
        consumo: "43",
        time: "180",
        spends: "200",
        situation: true,
    },
    {
        periodo: "23/11",
        consumo: "43",
        time: "180",
        spends: "500",
        situation: true,
    },
    {
        periodo: "23/11",
        consumo: "43",
        time: "180",
        spends: "100",
        situation: true,
    }
];

    // const records = document.querySelector(".container .records")
    // function render(dataBase) {
    //     let list = '';
    //     if(dataBase.lenght <= 0) {
    //         list += `<div class="results">Nenhum relatório encontrado</div>`
    //     } else {
    //         dataBase.forEach((dataBase, index) => {
    //             list += `
    //             <div class="results">
    //             ${dataBase.periodo}     ${dataBase.consumo}    ${dataBase.time}     ${dataBase.spends}     ${dataBase.situation}
    //             </div>
    
    //             `
    //         })
    //     }

    //     records.innerHTML = list;

    // }

    // render(dataBase)

    
    const print = document.querySelector("#print");
    print.addEventListener('click', (e) => {
        const head = document.querySelector('.head .fill');
        const printDiv = document.querySelector("#print-div")
        printDiv.innerHTML = '';
        head.innerHTML = '';
        window.print()
        setTimeout(()=>{
            printDiv.innerHTML = `<button id="print">IMPRIMIR <i class="bx bx-printer"></i></button>`;
            head.innerHTML = `<button id="filter">FILTRAR <i class='bx bx-filter'> </i> </button>`;
        }, 10);
    })



    // EXEMPLO DE RENDERIZAÇÃO PARA A PÁGINA 
                // <div class="content">
                //     <div class="results">teste</div>
                //     <div class="results">teste</div>
                //     <div class="results">teste</div>
                //     <div class="results">teste</div>
                //     <div class="results">teste</div>
                // </div>           