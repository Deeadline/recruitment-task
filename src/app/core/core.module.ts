import {ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {RequestInterceptor} from "./interceptor/request.interceptor";
import {AppLayoutComponent} from "./layout/app-layout/app-layout.component";
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [AppLayoutComponent],
    exports: [AppLayoutComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        },
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() module: CoreModule) {
        if (module) throw new Error('Core module is already loaded');
    }

    public static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: RequestInterceptor,
                    multi: true
                },
            ],
        };
    }
}
