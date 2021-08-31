import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";

function draw(){
    let template = " "
    let snacks = ProxyState.Snack
    snacks.forEach(s => template += `${s.name}`)
    document.getElementById("snacks").innerHTML = template
}
export class SnackController{
    constructor(){
        console.log("Hello from the snacks")
        draw()
    }
}
