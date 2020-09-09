import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CamService} from "./rest/cam.service";


@NgModule({
    providers: [CamService],
    imports: [
        CommonModule,
    ]
})
export class ApiModule {
    constructor(@Optional() @SkipSelf() module: ApiModule) {
        if (module) throw new Error('Api module is already loaded');
    }

    public static forRoot(): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [
                CamService
            ]
        }
    }
}
