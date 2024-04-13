import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {GeneralControlRoutingModule} from "./general.control.routing.module";
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import {GeneralControlPage} from "./general.control.page";
import {ReleasesService} from "../service/releases.service";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        GeneralControlRoutingModule,
        CanvasJSAngularChartsModule
    ],
    providers: [
        ReleasesService
    ],
    declarations: [GeneralControlPage]
})
export class GeneralControlModule {
}
