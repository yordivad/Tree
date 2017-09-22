
import ko from  "knockout"
import Component  from "../component"
import vis from "vis"
import Tree from "../trees/IndexerTree"


@Component({
    name: 'tree-view',
    template: require("../views/tree.html")
})
class tree {

    constructor() {
        this.input = ko.observable();
        this.preOrderResult = ko.observable();
        this.inOrderResult = ko.observable();
        this.postOrderResult = ko.observable();
        this.tree = null;
        this.sorter = null;
    }

    create () {
        this.addToTree( this.noDuplicate(this.input().split(",")));
        this.drawTree();
        this.results(this.tree);
    }

    addToTree(array) {
        if(array.length > 1) {
            this.tree = new Tree(parseInt(array[0]));
        }
        for(var i = 1; i < array.length; i ++) {
            this.tree.insert(parseInt(array[i]));
        }
    }

    noDuplicate(array) {

            var seen = {};
            var result = [];
            var len = array.length;
            var j = 0;
            for(var i = 0; i < len; i++) {
                var item = array[i];
                if(seen[item] !== 1) {
                    seen[item] = 1;
                    result[j++] = item;
                }
            }
            return result;
    }

    results(tree) {
        var items = [];
        tree.visit = (node) => items.push(node.value);
        tree.inOrder();
        this.inOrderResult(items.join(','));
        items = [];
        tree.postOrder();
        this.postOrderResult(items.join(','));
        items = [];
        tree.preOrder();
        this.preOrderResult(items.join(','));
    }

    random() {
        this.addToTree(this.noDuplicate(this.randomArray()));
        this.drawTree();
        this.results(this.tree);
    }

    randomArray() {
        var arr = [];
        for (var i=0, t=60; i<t; i++) {
            arr.push(Math.round(Math.random() * t))
        }

        return arr;
    }

    data(tree) {
        var nodes= [];
        var edges = [];

        tree.visit = (node)=> {
            nodes.push({id: node.value, label: node.value})
        };

        tree.relation = (node, parent) =>
        {
            if(parent !== null){
                edges.push({from: parent.value, to: node.value});
            }
        };

        tree.explore();

        return {
            nodes: nodes,
            edges: edges
        };
    }

    sort() {
        this.sorter = this.tree.sort();
        this.drawSort();
        this.results(this.sorter);
    }

    drawTree() {
        var container = document.getElementById('network');
        var network = new vis.Network(container, this.data(this.tree), this.treeOptions());
    }

    drawSort() {
        var container = document.getElementById('network');
        var network = new vis.Network(container, this.data(this.sorter), this.treeOptions());
    }

    treeOptions() {
        return{
            edges: {
                arrows: {to : true }
            },
            layout: {
                hierarchical: {
                    sortMethod: "directed"
                }
            },
        };

    }
}

export default tree;