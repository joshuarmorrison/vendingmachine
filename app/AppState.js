import Snack from "./Models/Snack.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Snack[]} */
  Snack = [new Snack("Doritos",5,2.00), new Snack("Jerky", 3, 3.00), new Snack("Almonds", 4, 2.50), new Snack("Cheetos", 5, 1.50)]
  Money = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
