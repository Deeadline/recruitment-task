import {Component, OnInit} from '@angular/core';

type AboutItemType = {
    title: string,
    imageUrl: string,
    description: string
};

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    public aboutItems: AboutItemType[];

    constructor() {
    }

    ngOnInit(): void {
        this.aboutItems = [
            {
                title: 'Lorem ipsum',
                imageUrl: 'https://picsum.photos/250',
                description: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas.'
            },
            {
                title: 'Lorem ipsum',
                imageUrl: 'https://picsum.photos/250',
                description: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas.'
            },
            {
                title: 'Lorem ipsum',
                imageUrl: 'https://picsum.photos/250',
                description: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas.'
            }
        ]
    }

}
