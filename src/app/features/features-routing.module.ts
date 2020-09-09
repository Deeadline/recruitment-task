import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./page/about/about.component";
import {ContactComponent} from "./page/contact/contact.component";
import {SkicamsComponent} from "./page/skicams/skicams.component";
import {SkiCamResolve} from "./service/ski-cam-resolve.service";


const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full'
    },
    {
        path: 'skicams',
        component: SkicamsComponent,
        pathMatch: 'full',
        resolve: {model: SkiCamResolve}
    },
    {
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeaturesRoutingModule {
}
