import {AbstractComponent} from './abstract';
import {events} from '../components/points';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export class Stats extends AbstractComponent {
  constructor() {
    super();
  }

  _getMoneyLabels() {
    return events.map((item) => item.type);
  }

  _getTransportLabels() {
    return events.map((item) => {
      if (item.type.type === `transport`) {
        return item.type.type;
      } else {
        return null;
      }
    });
  }

  _getTimeLabels() {
    return events.map((item) => item.time.durationHours);
  }

  _getChartConfig(label, title) {
    return {
      plugins: [ChartDataLabels],
      type: `horizontalBar`,
      data: {
        labels: label,
        datasets: [{
          data: ``,
          backgroundColor: `white`,
          borderColor: `grey`,
          borderWidth: 0,
          hoverBorderWidth: 1,
        }],
      },
      options: {
        plugins: {
          datalabels: {
            font: {
              size: 15
            },
            color: `#000000`,
            anchor: `end`,
            align: `start`,
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: false,
              drawBorder: false
            },
          }],
          xAxes: [{
            ticks: {
              display: false,
              beginAtZero: true,
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false,
        },
        title: {
          display: true,
          position: `left`,
          text: title,
          fontSize: 20,
        },
      }
    };
  }

  init() {
    const moneyCtx = document.querySelector(`.statistics__chart--money`);
    const transportCtx = document.querySelector(`.statistics__chart--transport`);
    const timeCtx = document.querySelector(`.statistics__chart--time`);

    // const moneyChart = new Chart(moneyCtx, );
  }

  getTemplate() {
    return `<section class="statistics visually-hidden">
    <h2 class="visually-hidden">Trip statistics</h2>

    <div class="statistics__item statistics__item--money">
      <canvas class="statistics__chart  statistics__chart--money" width="900"></canvas>
    </div>

    <div class="statistics__item statistics__item--transport">
      <canvas class="statistics__chart  statistics__chart--transport" width="900"></canvas>
    </div>

    <div class="statistics__item statistics__item--time-spend">
      <canvas class="statistics__chart  statistics__chart--time" width="900"></canvas>
    </div>
  </section>
    `;
  }
}
