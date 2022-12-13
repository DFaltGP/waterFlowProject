class WaterFlowGraphic {
    constructor(ctx, config) {
       const newGraphic = new Chart(this.ctx, this.config)
    }

    get graphic() {
        return this.#createNewGrapich()
    }

    #createNewGrapich() {
     console.log("Deu certo")//código da criação de gráficos
    }
}

const ctx = document.querySelector("#myChart").getContext("2d")
const gradient = ctx.createLinearGradient(100, 0, 0, 400)
gradient.addColorStop(0, '#086ca7')
gradient.addColorStop(1, '#04827f')

const labels = [
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
]

const data = {
    labels,
    datasets: [{
        data: [315, 365, 348, 320, 248, 280, 260, 270, 231],
        label: "Consumo de água anual", //data pode ser puxado do banco de dados via http a axios
        fill: true,
        backgroundColor: gradient,
    }]
}


const plugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
      const {ctx} = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = options.color || '#f8f8ff';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };

const config = {
    type: 'bar', //tipo do gráfico (linha, pizza, barras)
    data: data,
    plugins: [plugin],
    options: {
        Response: true,
        radius: 4,
        hoverRadius: 8,
        scales: {
            y:{
                ticks: {
                    callback: function(value) {
                        let finalValue = value.toFixed(2)
                        return finalValue + " Litros"
                    }
                }
            }
        },
        plugins: {
            customCanvasBackgroundColor: {
              color: '#f8f8ff', // cor de fundo do background
            },
    },
},
}



    

const myChart = new Chart(ctx, config)


