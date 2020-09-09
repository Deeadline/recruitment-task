import {Component, OnInit} from '@angular/core';
import {SkiCamModel} from "../../../core/model/ski-cam.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-skicams',
    templateUrl: './skicams.component.html',
    styleUrls: ['./skicams.component.scss']
})
export class SkicamsComponent implements OnInit {

    public camList: SkiCamModel[] = [];

    constructor(
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.camList = this.route.snapshot.data['model'];
    }

}
