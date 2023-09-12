import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [inputs, setInputs] = useState(0);
  const [selected, setSelected] = useState(0);
  const inputChange = (event) => {
    setInputs(event.target.value)
    setSelected(1);
  }
  const handleSelect = (event) => setSelected(event.target.value)
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json)=> {
      setLoading(false)
      setCoins(json)
    })
  },[])
  return (
    <div>
      <h1>The Coins! {loading ? <strong>?</strong> : coins.length}</h1>
      <input min={0} value={inputs} onChange={inputChange} type="number" placeholder="달러를 입력하시오"/>$
      <br/>
      {loading ? <strong>Loading...</strong> :
      <select onChange={handleSelect}>
        <option>코인을 골라주세요</option>
        {coins.map((coin) => 
        <option key={coin.id} value={coin.quotes.USD.price}>
          {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option>
          )}
      </select>
      }
    <h2>{isNaN(inputs / selected)? "choose the coin" : (inputs / selected)}</h2>
    </div>
  );
}
// 1 인풋에서 원하는 값을 받기
// 1 인풋 값을 저장
// 1 그 값을 코인값에 곱함
// 1 그값을 출력하기
export default App;
