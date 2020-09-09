import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {CamDetailInterface, CamResponseInterface} from "../model/cam-response.interface";
import {HttpClient} from "@angular/common/http";
import {filter, flatMap, map, toArray} from "rxjs/operators";
import {SkiCamModel} from "../../core/model/ski-cam.model";

@Injectable()
export class CamService {

    constructor(private http: HttpClient) {
    }

    private desiredSkiFacilities: string[] = ['Bielmonte', 'Livigno'];

    public get(): Observable<SkiCamModel[]> {
        return this.http.get<CamResponseInterface>('https://makevoid-skicams.p.rapidapi.com/cams.json')
            .pipe(
                flatMap((response: CamResponseInterface) => Object.values(response)),
                filter((response: CamDetailInterface) => this.desiredSkiFacilities.includes(response.name)),
                toArray(),
                map((response: CamDetailInterface[]) => (
                    response.map(cam => ({
                        name: cam.name,
                        prov: cam.prov,
                        cams: Object.values(cam.cams)
                    }))
                ))
            )
    }
}
