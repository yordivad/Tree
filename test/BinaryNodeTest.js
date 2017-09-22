
import {expect} from "chai";
import BinaryNode from "../src/trees/BinaryNode"


describe('Binary Node', () => {
    it('should initialize an binary node', () => {
        var node = new BinaryNode(1);
        node.height = 1;
        expect(node.value).to.equal(1);
        expect(node.height).to.equal(1);
        expect(node.left).to.be.a("null");
        expect(node.right).to.be.a("null");
    });

    it('should set an value binary node', () => {
        var node = new BinaryNode(1);
        node.value = 2;
        expect(node.value).to.equal(2);
        expect(node.left).to.be.a("null");
        expect(node.right).to.be.a("null");
    });

    it('should set an left node', () => {
        var node = new BinaryNode(1);
        node.left = new BinaryNode(2);
        expect(node.value).to.equal(1);
        expect(node.left).to.be.a("object");
        expect(node.left.value).to.be.equal(2);
        expect(node.right).to.be.a("null");
    });

    it('should set an right node', () => {
        var node = new BinaryNode(1);
        node.right = new BinaryNode(2);
        expect(node.value).to.equal(1);
        expect(node.right).to.be.a("object");
        expect(node.right.value).to.be.equal(2);
        expect(node.left).to.be.a("null");
    });
});