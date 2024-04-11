import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'project',
        component: TabsPage,
        children: [
            {
                path: 'general-control',
                loadChildren: () => import('../tab1/general.control.module').then(m => m.GeneralControlModule)
            },
            {
                path: 'releases',
                loadChildren: () => import('../tab2/releases.module').then(m => m.ReleasesModule)
            },
            {
                path: 'tab3',
                loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
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
