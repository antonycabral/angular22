import { Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo';

export const routes: Routes = [
	{ path: '', component: CatalogoComponent },
	{ path: '**', redirectTo: '' },
];
