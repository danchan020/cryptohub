import Coin from "./Coin"

export default function CoinsList({filteredCoins}) {
    console.log(filteredCoins)
  return (
    <div>
        {/* {filteredCoins.map( coin => { 
            return (
                <Coin 
                key = {coin.id}
                
                />
            )
        })} */}
    </div>
  )
}
