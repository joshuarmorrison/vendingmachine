import { SnackController } from "./Controllers/SnackController.js";
// import ValuesController from "./Controllers/ValuesController.js";
import {MoneyController} from "./Controllers/MoneyController.js"
class App {
  // valuesController = new ValuesController();
  snackController = new SnackController();
  moneyController = new MoneyController();
}

window["app"] = new App();
