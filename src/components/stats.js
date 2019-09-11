import {AbstractComponent} from './abstract';
import {types} from '../data';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export class Stats extends AbstractComponent {
  constructor(events) {
    super();
    this._events = events;
  }

  init() {
    const moneyCtx = document.querySelector(`.statistics__chart--money`);
    // const transportCtx = document.querySelector(`.statistics__chart--transport`);
    // const timeCtx = document.querySelector(`.statistics__chart--time`);

    this._moneyChart = new Chart(moneyCtx, this._getConfig(this._getMoneyLabels, this._getMoneyData, `MONEY`));
  }

  _getMoneyLabels() {
    let ar = this._events.map((item) => item.type.name);
    return new Set(ar);
  }

  _makeTotalPrice(arr, label) {
    let ar = arr.filter((item) => item.type.name === label);
    let price = 0;

    ar.forEach((item) => {
      price += item.price;
    });

    return price;
  }

  _getMoneyData() {
    let ar = [];

    for (let i = 0; i < types.length; i++) {
      ar.push(this._makeTotalPrice(this._events, types[i].name));
    }

    return ar.filter((item) => item > 0);
  }

  /*
 _getTransportLabels() {
    let ar = events.filter((item) => item.type.type === `transport`);

    return ar.map((item) => item.type);
  }

  _getTimeLabels() {
    return events.map((item) => item.time.durationHours);
  }
 */

  _getConfig(labelList, dataList, title) {
    return {
      plugins: [ChartDataLabels],
      type: `horizontalBar`,
      data: {
        labels: labelList,
        datasets: [{
          data: dataList,
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
