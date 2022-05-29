import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const LineChart = (props) => {
 const {coinLineChartData } = props;

 console.log(coinLineChartData);
 const coinPrice = [];
 const coinTimestamp = [];
console.log(coinPrice)
console.log(coinTimestamp)

 for (let i = Math.round(coinLineChartData?.data?.history?.length /30*14 -1)  ; i > 0; i--) {
  if(i===0 || !(i%7)){
  coinTimestamp.push(
     new Date(coinLineChartData?.data?.history[i]?.timestamp * 1000).toLocaleDateString()
   );
   coinPrice.push(coinLineChartData?.data?.history[i]?.price);
 }}

 const data = {
   labels: coinTimestamp,
   datasets: [
     {
       label: 'Price in USD',
       data: coinPrice,
       fill: false,
       backgroundColor: '#0071bd',
       borderColor: '#0071bd',
       tension:0.1
     },
   ],
 };

 const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
 return (
<div >
     <Line data={data}  options={options} />
     </div>

 );
};

export default LineChart