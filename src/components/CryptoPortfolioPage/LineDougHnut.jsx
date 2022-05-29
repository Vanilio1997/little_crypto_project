import React, { memo } from 'react'

import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
ChartJs.register(
    Tooltip, Title, ArcElement, Legend
  );





function LineDougHnutInner  ({coins},{balanceCoins}){

    const data = {
        labels: [
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
          ],
          hoverOffset: 1
        }]
      };

      coins.forEach(coin =>{
        data.labels.push(`${coin.coin} ${coin.value}$`)
        data.datasets[0].data.push(coin.value)
      })




  return (
    <div className='doughnut_chart'>
          <Doughnut data={data} />
          <div className='percents'>
          </div>
      </div>
  )
}

export const LineDougHnut = React.memo(LineDougHnutInner)