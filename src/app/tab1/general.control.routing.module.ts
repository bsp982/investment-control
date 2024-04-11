import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GeneralControlPage} from './general.control.page';

const routes: Routes = [
    {
        path: '',
        component: GeneralControlPage,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GeneralControlRoutingModule {
}
