import ko from  "knockout"
import Component  from "../component"

@Component({
    name: 'sticky',
    template: require("../views/sticky.html")
})
class sticky {
    constructor(params) {
        this.name = ko.observable(params.name);
        this.message = ko.observable(params.message);
        this.visible = ko.observable(true);
    }

    close() {
        this.visible(false);
    }
}
