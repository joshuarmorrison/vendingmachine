import { ProxyState } from "../AppState.js"

class MoneyService{
addMoney(){
    ProxyState.Money++
    console.log(ProxyState.Money)
}
}
export const moneyService = new MoneyService()