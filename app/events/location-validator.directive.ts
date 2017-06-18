import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';


@Directive({
    selector: "[validateLocation]",
    providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }]
})
export class LocationValidator implements Validator {
    validate(fromGroup: FormGroup): { [key: string]: any } {
        let addressControl = fromGroup.controls['address'];
        let cityControl = fromGroup.controls['city'];
        let countryControl = fromGroup.controls['country'];
        let onlineUrlControl = (<FormGroup>fromGroup.root).controls['onlineUrl'];

        if ((addressControl && addressControl.value &&
            cityControl && cityControl.value &&
            countryControl && countryControl.value)
            || (onlineUrlControl && onlineUrlControl.value)) {
            return null;    // meaning this validation has no problem
        } else {
            return { validateLocation: false };
        }
    }
}