import Coin from "./Coin"

export default function CoinsList({filteredCoins}) {
  return (
    <div>
        {filteredCoins.map( coin => { 
            return (
                <Coin 
                key = {coin.id}
                name = {coin.name}
                symbol = {coin.symbol}
                image = {coin.image}
                price = {coin.current_price}
                onehr = {coin.price_change_percentage_1h_in_currency}
                twentyfourhr = {coin.price_change_percentage_24h_in_currency}
                sevenday = {coin.price_change_percentage_7d_in_currency}
                marketcap = {coin.market_cap}
                volume = {coin.total_volume}
                supply = {coin.circulating_supply}
                trendline = {coin.sparkline_in_7d}
                />
            )
        })}
    </div>
  )
}
