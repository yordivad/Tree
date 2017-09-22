
import {expect} from "chai";
import BinaryTree from "../src/trees/BinaryTree"
import BinaryNode from "../src/trees/BinaryNode"


describe('Binary Tree', () => {

    it("right rotation", () => {
        var tree = new BinaryTree("C");
        var nodec = tree.root;
        var nodea = new BinaryNode("A");
        var nodeb = new BinaryNode("B");

        nodec.left = nodeb;
        nodeb.left = nodea;
        nodec.right = BinaryTree.rightRotation(tree.root);

        expect(nodeb.left.value).to.equal("A");
        expect(nodeb.right.value).to.equal("C");
    });

    it("left rotation", () => {
        var tree = new BinaryTree("A");
        var nodea = tree.root;
        var nodeb = new BinaryNode("B");
        var nodec = new BinaryNode("C");

        nodea.right = nodeb;
        nodeb.right = nodec;


        BinaryTree.leftRotation(nodea);

        expect(nodeb.left.value).to.equal("A");
        expect(nodeb.right.value).to.equal("C");
    });


    it("left right rotation", () => {
        var tree = new BinaryTree("C");
        var nodea = new BinaryNode("A");
        var nodeb = new BinaryNode("B");
        var nodec = tree.root;

        nodec.left = nodea;
        nodea.right = nodeb;

        BinaryTree.leftRightRotation(nodec);

        expect(nodeb.left.value).to.equal("A");
        expect(nodeb.right.value).to.equal("C");
    });


    it("right left rotation", () => {
        var tree = new BinaryTree("a");
        var nodea = new BinaryNode("A");
        var nodeb = new BinaryNode("B");
        var nodec = new BinaryNode("C");

        nodea.right = nodec;
        nodec.left = nodeb;

        BinaryTree.rightLeftRotation(nodea);

        expect(nodeb.left.value).to.equal("A");
        expect(nodeb.right.value).to.equal("C");
    });

    it("show in preorder", () => {
        var tree = new BinaryTree(1);
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
        var tree = new BinaryTree(1);
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
        var tree = new BinaryTree(1);
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
        var tree = new BinaryTree(40);
        tree.visit = (node) => console.log(node.value);
        tree.insert(10);
        tree.insert(30);
        tree.insert(20);
        tree.insert(90);
        tree.insert(70);
        tree.insert(50);
        console.log("==  sort in order ==");
        tree.inOrder();
        console.log("======================");
    });

});