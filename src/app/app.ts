import angular from 'angular';
import { StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { downgradeModule, downgradeComponent, UpgradeModule } from '@angular/upgrade/static';

// AngularJS
import { mainComponent } from './components/main/main.component';

// Angular 9
import { AppModule } from '../ng-app/app.module';
import { ExampleComponent } from '../ng-app/example/example.component';

const ng2BootstrapFn = (extraProviders: StaticProvider[]) => {
    return platformBrowserDynamic(extraProviders)
        .bootstrapModule(AppModule);
};

angular
    .module('myApp', [
        downgradeModule(ng2BootstrapFn)
    ])
    .component('mainComponent', mainComponent)
    .directive('exampleComponent', downgradeComponent({ component: ExampleComponent })) // Use Modern Angular Component in AngularJS

angular.element(() => {
    angular.bootstrap(document.body, ['myApp']);
});
