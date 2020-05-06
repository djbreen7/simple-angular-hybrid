import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'k2-example',
    template: `
        <h1>Hello Angular 9</h1>`,
    encapsulation: ViewEncapsulation.ShadowDom
})
export class ExampleComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        console.log('new angular');
    }
}
