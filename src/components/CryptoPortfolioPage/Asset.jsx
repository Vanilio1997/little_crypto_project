import React from 'react'

const Asset = ({coins}) => {
  return (
    <div className='asset_wrapper'>
        
            {
coins.map(coin=>(
  
  <div  
  key={coin.id}
  className='table_coin'>
<div className='assert_nameLogo'> 
<div className='assert_name'>
    <p>{coin.coin}</p>
     </div>
<div className='assert_logo'> 
<img src={coin.logo} alt='logo'/>
</div>
</div>
<div className='assert_valueQuantity'> 
<div className='assert_value'>Стоимость:{coin.value}$</div>
<div className='assert_quantity'>Количество:{coin.quantity}</div>
</div>
</div>
))
            }
    </div>
  )
}

export default Asset