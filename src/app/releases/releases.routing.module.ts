import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReleasesPage} from './releases.page';
import {UtilsModule} from "../utils/utils.module";

const routes: Routes = [
    {
        path: '',
        component: ReleasesPage,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
        UtilsModule],
    exports: [RouterModule]
})
export class ReleasesRoutingModule {
}
