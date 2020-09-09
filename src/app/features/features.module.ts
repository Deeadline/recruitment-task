import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeaturesRoutingModule} from './features-routing.module';
import {AboutComponent} from './page/about/about.component';
import {ContactComponent} from './page/contact/contact.component';
import {SkicamsComponent} from './page/skicams/skicams.component';
import {SkiComponent} from './container/ski/ski.component';
import {SkiCamResolve} from "./service/ski-cam-resolve.service";
import {ReactiveFormsModule} from "@angular/forms";
import {InputDirective} from "./directive/input.directive";


@NgModule({
    declarations: [
        AboutComponent,
        ContactComponent,
        SkicamsComponent,
        SkiComponent,
        InputDirective
    ],
    imports: [
        CommonModule,
        FeaturesRoutingModule,
        ReactiveFormsModule,
    ],
    providers: [SkiCamResolve]
})
export class FeaturesModule {
}
