import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReleasesPage} from './releases.page';
import {ReleasesRoutingModule} from './releases.routing.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReleasesRoutingModule
    ],
    declarations: [ReleasesPage]
})
export class ReleasesModule {
}
