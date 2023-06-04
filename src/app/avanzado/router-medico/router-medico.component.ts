import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styleUrls: ['./router-medico.component.scss'],
})
export class RouterMedicoComponent {
  public id!: string;

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  guardarMedico() {
    this.router.navigate(['medico', '1234']);
  }
}
