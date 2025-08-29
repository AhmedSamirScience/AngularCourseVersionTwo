import { AbstractControl } from "@angular/forms";

export function checkForName( control: AbstractControl): null | {[key:string]: boolean} {
    if (control.value.match(/[0-9]/g)) {
        return { nameNotValid: true };
    } else return null
}