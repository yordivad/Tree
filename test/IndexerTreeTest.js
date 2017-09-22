
import {expect} from "chai";
import IndexerTree from "../src/trees/IndexerTree"
import IndexerNode from "../src/trees/IndexerNode"
import BinaryTree from "../src/trees/BinaryTree";


describe('Indexer Tree', () => {

    it("right rotation", () => {
        var tree = new IndexerTree("C");
        var nodec = tree.root;
        var nodea = new IndexerNode(1,"A");
        var nodeb = new IndexerNode(2,"B");

        nodec.left = nodeb;
        nodeb.left = nodea;
        nodec.right = BinaryTree.rightRotation(tree.root);

        expect(nodeb.left.value).to.equal("A");
        expect(nodeb.right.value).to.equal("C");
    });

    it("left rotation", () => {
        var tree = new IndexerTree("A");
        var nodea = tree.root;
        var nodeb = new IndexerNode(1,"B");
        var nodec = new IndexerNode(2,"C");

        nodea.right = nodeb;
        nodeb.right = nodec;

        BinaryTree.leftRotation(nodea);

        expect(nodeb.left.value).to.equal("A");
        expect(nodeb.right.value).to.equal("C");
    });


    it("left right rotation", () => {
        var tree = new IndexerTree("C");
        var nodea = new IndexerNode(1,"A");
        var nodeb = new IndexerNode(2,"B");
        var nodec = tree.root;

        nodec.left = nodea;
        nodea.right = nodeb;

        BinaryTree.leftRightRotation(nodec);

        expect(nodeb.left.value).to.equal("A");
        expect(nodeb.right.value).to.equal("C");
    });


    it("right left rotation", () => {
        var tree = new IndexerTree("a");
        var nodea = new IndexerNode(1,"A");
        var nodeb = new IndexerNode(2,"B");
        var nodec = new IndexerNode(3,"C");

        nodea.right = nodec;
        nodec.left = nodeb;

        BinaryTree.rightLeftRotation(nodea);

        expect(nodeb.left.value).to.equal("A");
        expect(nodeb.right.value).to.equal("C");
    });

    it("show in preorder", () => {
        var tree = new IndexerTree(1);
        tree.visit = (node) => console.log(node.value);
        tree.insert(2);
        tree.insert(3);
        tree.insert(4);
        tree.insert(5);
        tree.insert(6);
        tree.insert(7);
        console.log("===== pre order ======");
        tree.preOrder();
        console.log("======================");
    });

    it("show in postorder", () => {
        var tree = new IndexerTree(1);
        tree.visit = (node) => console.log(node.value);
        tree.insert(2);
        tree.insert(3);
        tree.insert(4);
        tree.insert(5);
        tree.insert(6);
        tree.insert(7);
        console.log("===== post order =====");
        tree.postOrder();
        console.log("======================");
    });

    it("show in order", () => {
        var tree = new IndexerTree(1);
        tree.visit = (node) => console.log(node.value);
        tree.insert(9);
        tree.insert(8);
        tree.insert(7);
        tree.insert(6);
        tree.insert(2);
        tree.insert(3);
        tree.insert(4);
        tree.insert(5);
        tree.insert(6);
        tree.insert(7);
        console.log("====== in order ======");
        tree.inOrder();
        console.log("======================");
    });

    it("non order show in order", () => {
        var tree = new IndexerTree(40);
        tree.visit = (node) => console.log(node.value);
        tree.insert(10);
        tree.insert(30);
        tree.insert(20);
        tree.insert(90);
        tree.insert(70);
        tree.insert(50);
        console.log("== no sort in order ==");
        tree.inOrder();
        console.log("======================");
    });

    it("sort the tree", () => {
        var tree = new IndexerTree(40);
        tree.visit = (node) => console.log(node.value);
        tree.insert(10);
        tree.insert(30);
        tree.insert(20);
        tree.insert(90);
        tree.insert(70);
        tree.insert(50);
        console.log("== no sort ==");
        tree.inOrder();
        console.log("======================");
        console.log("== sort ==");
        var sorted = tree.sort();
        sorted.visit = (node) => console.log(node.value);
        sorted.inOrder();
        console.log("======================");

    });

});