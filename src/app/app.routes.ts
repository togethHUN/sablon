import { Routes} from '@angular/router';

export const routes: Routes = [
    {path: 'home', loadComponent: ()=> import('./home-component/home-component').then(m=>m.HomeComponent)},
    {path: 'solution', loadComponent: ()=>import('./solution-component/solution-component').then(m=>m.SolutionComponent)},
    {path: 'employee', loadComponent: ()=>import('./employee-component/employee-component').then(m=>m.EmployeeComponent)}
];
