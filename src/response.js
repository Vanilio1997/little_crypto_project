

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0391398e5mshf2ecfbc84b7e8c1p1d6ee1jsncc91bc4b9a82'
    }
  };
  
   function Response(){
  fetch('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/price?referenceCurrencyUuid=yhjMzLPhuIDl', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));}