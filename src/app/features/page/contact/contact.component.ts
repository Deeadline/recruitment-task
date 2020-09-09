import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    form: FormGroup;
    submitted: boolean = false;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
            message: [null]
        })
    }

    onSubmit($event: Event) {
        this.submitted = true;
        $event.preventDefault();
        if (this.form.valid) {
            console.log('Form is valid and there you can send data to API');
        }
    }

}
