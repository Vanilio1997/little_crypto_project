const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0391398e5mshf2ecfbc84b7e8c1p1d6ee1jsncc91bc4b9a82'
    }
  };


  export async function getCoin(id){
    const response = await fetch(`https://coinranking1.p.rapidapi.com/coin/${id}/price?referenceCurrencyUuid=yhjMzLPhuIDl`, options);
    const data = await response.json();
    return data.data.price;
  }