import { Spinner } from "cli-spinner";
import chalk from "chalk";

function loading(msg){
    var spinner = new Spinner(msg);
    spinner.setSpinnerString('|/-\\');
    spinner.start();
    return spinner
}

export {loading}