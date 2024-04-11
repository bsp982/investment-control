import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GeneralControlPage} from './general.control.page';
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import {GeneralControlRoutingModule} from "./general.control.routing.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        GeneralControlRoutingModule,
        CanvasJSAngularChartsModule
    ],
    declarations: [GeneralControlPage]
})
export class GeneralControlModule {
}
