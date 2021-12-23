import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularLP2';
  estudiante:any={
  	nombre:'Frank W', apellido:'MM', grado:'III', curso:'lp2'
  };
}
