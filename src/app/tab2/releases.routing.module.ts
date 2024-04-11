import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReleasesPage} from './releases.page';

const routes: Routes = [
    {
        path: '',
        component: ReleasesPage,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReleasesRoutingModule {
}
