import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class FormularioRegister {
  public form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      email : ['', Validators.required, Validators.email],
      password : ['', Validators.required],
    })
  }

}
