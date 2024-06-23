import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SnakeContainingComponentComponent } from './snake-containing-component/snake-containing-component.component';

const routeConfig: Routes = [
  {
    path: '',
    component: FormComponent,
    title: 'FormComponent',
  },
  {
    path: 'snake',
    component: SnakeContainingComponentComponent,
    title: 'SnakeContainingComponentComponent',
  },
];
export default routeConfig;
