import React,{useEffect,useState} from 'react'
import LineChart from './LineChart';

const CoinHistory = () => {
    const coins = [
        {coin: 'Bitcoin', id:'Qwsogvtv82FCd',logo:'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg'},
        {coin: 'Ether', id:'razxDUgYGNAdQ',logo:'https://cdn.coinranking.com/rk4RKHOuW/eth.svg'},
      ];
      const [handleSelect ,setHandleSelect] = useState(coins[0].coin);
      const [coinLineChartData , setCoinLineChartData] = useState({})
      const price = coinLineChartData?.data?.history[0]?.price
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
          'X-RapidAPI-Key': 'f0391398e5mshf2ecfbc84b7e8c1p1d6ee1jsncc91bc4b9a82'
        }
      };

      async function getCoin(id){
        const response = await fetch(`https://coinranking1.p.rapidapi.com/coin/${id}/history?timePeriod=30d`, options);
          return await response.json();
      }

      useEffect(()=>{
        const startLineChart = coins.filter(item => item.coin === handleSelect);
        getCoin(startLineChart[0].id)
        .then(data => setCoinLineChartData(data))
      },[])

      useEffect(()=>{
        const currentLineChart = coins.filter(item => item.coin === handleSelect);
        getCoin(currentLineChart[0].id)
        .then(data => setCoinLineChartData(data))
      },[handleSelect])


  return (
    <div className='line_wrapper'>
        <h1>График изменений {handleSelect} за 14 дней</h1>
          <p>Текущяя цена  {handleSelect}: {price} </p>
        <p>Выберите Криптовалюту</p>
            
            <select
            className='converter_select'
            value={handleSelect}
            onChange={(e) => setHandleSelect(e.target.value)}
            >
                {coins.map((item)=>(
                      <option value={item.coin}>{item.coin}</option> 
                ))}
            </select>
            <LineChart  coinLineChartData={coinLineChartData } />
    </div>
  )
}

export default CoinHistory