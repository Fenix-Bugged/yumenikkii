import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { QueEs } from './pages/que-es/que-es';
import { SobreMi } from './pages/sobre-mi/sobre-mi';
import { YumeNikkiComponent } from './pages/yume-nikki/yume-nikki';

export const routes: Routes = [
    {path: '',component:Inicio},
    {path:'que-es',component:QueEs},
    {path: 'sobre-mi',component:SobreMi},
    {path: 'yume-nikki',component:YumeNikkiComponent},

];