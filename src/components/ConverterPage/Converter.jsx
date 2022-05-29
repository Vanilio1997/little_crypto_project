import React,{useState,useEffect} from 'react'
import { getCoin } from '../../getCoinFunc';


const Converter = () => {
  const arr= [
    {coin: 'Bitcoin', id:'Qwsogvtv82FCd',logo:'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg'},
    {coin: 'Ether', id:'razxDUgYGNAdQ',logo:'https://cdn.coinranking.com/rk4RKHOuW/eth.svg'},
    {coin:'Dollar',logo:'https://ds04.infourok.ru/uploads/ex/043b/0015880a-fe887047/hello_html_m514518f.jpg'},
  ];
    const [fromInput, setFromInput] = useState('');
    const [toInput, setToInput] = useState('');
    const [fromSelect,setFromSelect] = useState(arr[0].coin)
    const [toSelect,setToSelect] = useState(arr[0].coin)


function change(){
  const fromValue = arr.filter(item => item.coin === fromSelect);
  const toValue =   arr.filter(item => item.coin === toSelect);
  const firstPrice =   fromSelect==='Dollar'? 1: getCoin(fromValue[0].id)
  const secondPrice =  toSelect==='Dollar'? 1: getCoin(toValue[0].id)
  Promise.all([firstPrice,secondPrice])
  .then((value)=> setToInput(value[0] * fromInput / value[1]))
 
}
 

useEffect(()=>{
setToInput('');
},[fromInput,toSelect,fromSelect])

  return (
    <div className='converter_wrapper'>

      <div className='change_wrapper'></div>
      <div className='change_wrapper_from'> 
      <div className='convert_element_box'>
      <p>Вы платите</p>
      <input 
        className='converter_input'
        min='0'
        placeholder='Введите значение...'
        value={fromInput} 
        onChange={(e) => setFromInput(e.target.value)} 
        type="number" />
        </div>
        <div className='convert_element_box'>
        <p>Выберите валюту</p>
        <select 
        className='converter_select'
        value={fromSelect}
        onChange={(e)=> setFromSelect(e.target.value)}
        >
            {
                arr.map(item=>(
                    <option className='option_value' value={item.coin}>{item.coin}
                    <img className='coin_value' src={item.logo} alt="" />
                    </option>
                ))
            }
        </select>
        </div>
    </div>
    
  <div className='change_wrapper_from'>
  <div className='convert_element_box'>
      <p>Вы получите</p>
      <input 
        className='converter_input'
        value={toInput} 
        type="text" />
        </div>
        <div className='convert_element_box'>
          <p>Выберите валюту</p>
        <select
        className='converter_select'
          value={toSelect}
          onChange={(e)=> setToSelect(e.target.value)}
        >
            {
                arr.map(item=>(
                    <option value={item.coin}>{item.coin}</option>
                ))
            }
            </select>
            </div>
         </div>
         <div className='converter_btn_wrapper'><button 
         className='convert_Btn'
        disabled= {+fromInput<1? true:false}
        onClick={()=> change()}>Рассчитать</button>
        </div>

    </div>
  )
}

export default Converter