import React, { useEffect, useState } from 'react'
import { getCoin } from '../../getCoinFunc'
import {LineDougHnut} from './LineDougHnut'
import Asset from './Asset'



const BuyCrypto = () =>{



const [coinForBuy,setCoinForBuy] = useState('Bitcoin');
const [balanceUSD,setBalanceUSD] = useState(1000000);
const [balanceCoins,setBalanceCoins] = useState(0);
const [coins ,setCoins] = useState(()=>[
  {coin: 'Bitcoin', id:'Qwsogvtv82FCd',logo:'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg',value:0 ,quantity:0},
  {coin: 'Ether', id:'razxDUgYGNAdQ',logo:'https://cdn.coinranking.com/rk4RKHOuW/eth.svg', value:0 , quantity:0},]
);
const [modalWindow, setModalWindow] = useState(false);
const [fromInput,setFromInput] = useState('');
const [toInput,setToInput] = useState('');

  useEffect(()=>{
if(fromInput){
    const toValue =   coins.filter(item => item.coin === coinForBuy);
    getCoin(toValue[0].id)
    .then(data => setToInput(fromInput/data))
}else{
    setToInput('')
}
  },[fromInput])


  useEffect(()=>{
    const toValue =   coins.filter(item => item.coin === coinForBuy);
    getCoin(toValue[0].id)
    .then(data => setToInput(fromInput/data))
  },[coinForBuy])

function buyCrypto(){
setBalanceUSD((prevValue)=> prevValue - fromInput);
const newCoins = coins.map(item => {
  if(item.coin === coinForBuy){

  return {
    ...item,
    quantity: Math.round((item.quantity + toInput)  * Math.pow(10,6))/ Math.pow(10,6) ,
    value: (item.value + +fromInput)
  }}
  else{
    return item
  }
  })
  setCoins(newCoins)
  setBalanceCoins((prev)=>+fromInput + prev)
  }

  return (
    <div className='buyPage_wrapper'>
        <h1>CryptoPortfolioPage</h1>
        <div className='balanceUSD_wrapper'>
    <p>Ваш баланс:{balanceUSD}$</p></div>
 <div 
  className='balanceUSD_wrapper'>
   <button onClick={()=> setModalWindow(true)}>Пополнить баланс  <i class="fa-solid fa-money-check-dollar"></i></button> </div> 
    <div> Баланс крипто-кошелька:{balanceCoins}$</div>
    
    <div className={modalWindow ? 'replenishment_active':'replenishment_noactive'}>Hi
    <i  onClick={()=>setModalWindow(false)}  className="fa-solid fa-xmark"></i>  
    </div>

    <div className='coinChoise_wrapper'> 
    Выберите криптовалюту которую хотите приобрести
    <div className='coinChoise_type_wrapper'>
{
  coins.map(coin =>(
    <div
    key={coin.id}
    className='coinChoise_type'  
    onClick = {() => setCoinForBuy(coin.coin)}> <p>{coin.coin} </p>
   <div className='logo_wrapper'> <img src={coin.logo} alt='logo'/></div></div>
  
  ))
}

    </div>
    </div>
  <div className='buy_converter_wrapper'>
    <h3>Покупка {coinForBuy}</h3> 
  <div className='input_box'>
   <div>
     <p>Списать</p>
    <input type='number'
    className='converter_input'
    value={fromInput}
    onChange={(e)=>setFromInput(e.target.value)} />
</div>
<div>  
<p>Получить</p>
    <input type='text'
    className='converter_input'
    value={toInput} />
    </div>
    </div>
    <div className='buy_btn_box'>
<button className='buy_btn' onClick={()=>buyCrypto()}>Купить</button> </div>

  </div>
  <h2>Активы</h2>
  <Asset coins={coins} />
  <h2>Распределение Активов</h2>
   { balanceCoins? < LineDougHnut   balanceCoins={balanceCoins} coins={coins}/>: <h1 style={{marginTop : '30px'}}>Ваш криптовалютный баланс равен 0</h1>}
    </div>

  )
}

export default BuyCrypto