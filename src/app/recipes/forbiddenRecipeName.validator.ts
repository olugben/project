//angular
import {FormControl} from '@angular/forms';
import {Observable} from "rxjs/Observable";


export class ForbiddenRecipeNameValidator {
  static validateName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'test') {
      return {'NameForbiddenError': true};
    }
    return null;
  }
  static validateNameA(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      if (control.value === 'test') {
        resolve({'NameForbiddenError': true});
      }else {
        resolve(null);
      }
    });
    return promise;
  }
}
