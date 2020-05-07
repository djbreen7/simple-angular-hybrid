class MainController {
    public title: string;
    
    constructor() {

    }

    $onInit() {
        this.title = "Hello AngularJS"
        console.log('angularjs')
    }
}

export const mainComponent = {
    template: `<h1>{{$ctrl.title}}</h1>`,
    controller: MainController
};
