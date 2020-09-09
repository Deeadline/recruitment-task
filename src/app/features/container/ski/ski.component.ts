import {Component, Input, OnInit} from '@angular/core';
import {SkiCamModel} from "../../../core/model/ski-cam.model";

@Component({
    selector: 'app-single-ski[model]',
    templateUrl: './ski.component.html',
    styleUrls: ['./ski.component.scss']
})
export class SkiComponent implements OnInit {

    @Input() model: SkiCamModel;

    constructor() {
    }

    ngOnInit(): void {
    }

    get currentData(): Date {
        return new Date();
    }

}
