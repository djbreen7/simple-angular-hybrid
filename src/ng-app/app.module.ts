import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExampleComponent } from './example/example.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [ExampleComponent],
    entryComponents: [ExampleComponent]
})
export class AppModule {
    constructor() { }
    ngDoBootstrap() {
    }
}
