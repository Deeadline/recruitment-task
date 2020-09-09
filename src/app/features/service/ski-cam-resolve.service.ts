import {Injectable} from '@angular/core';
import {SkiCamModel} from "../../core/model/ski-cam.model";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {CamService} from "../../api/rest/cam.service";
import {Observable} from "rxjs";

@Injectable()
export class SkiCamResolve implements Resolve<SkiCamModel[]> {

    constructor(private service: CamService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SkiCamModel[]> | Promise<SkiCamModel[]> | SkiCamModel[] {
        return this.service.get();
    }
}
