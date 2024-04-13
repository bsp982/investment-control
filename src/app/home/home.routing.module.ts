import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';

const routes: Routes = [
    {
        path: 'project',
        component: HomePage,
        children: [
            {
                path: 'general-control',
                loadChildren: () => import('../general-control/general.control.module').then(m => m.GeneralControlModule)
            },
            {
                path: 'releases',
                loadChildren: () => import('../releases/releases.module').then(m => m.ReleasesModule)
            },
            {
                path: '',
                redirectTo: '/project/general-control',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/project/general-control',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}
