import { Routes } from '@angular/router';
import { TablaproductosComponent } from './tablaproductos/tablaproductos.component';
import { FormularioproductosComponent } from './formularioproductos/formularioproductos.component';

export const routes: Routes = [
    {path:"tablaproductos",component:TablaproductosComponent},
    {path:"formularioproductos",component:FormularioproductosComponent},
    {path:"",component:TablaproductosComponent}
];
