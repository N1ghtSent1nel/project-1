function calculateBtc() {
  const price = prompt('What is Bitcoin price today?', 'Put value > 0');
  let testPrice = /^[0-9]+$/g;
  if (testPrice.test(price)) {
  } else {
    alert("Please, put value > 0!");
    return
  }
    
  const quantity = prompt('How much $ do you have?', 'Put value > 0')
  let testQuantity = /^[0-9]+$/g;
  if (testQuantity.test(quantity)) {
  } else {
    alert("Please, put value > 0!");
    return
  }
  
  const btcQuantity = Number(quantity / price).toFixed(7);
  const message = `You can buy ${btcQuantity} BTC`;
  alert(message); 
}

