import {NgModule} from "@angular/core";
import {DatePipe} from "./date.pipe";

@NgModule({
    declarations: [
        DatePipe,
    ],
    imports: [],
    exports: [
        DatePipe,
    ]

})
export class UtilsModule {
}
