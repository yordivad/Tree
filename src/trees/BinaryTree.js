import Node from "./BinaryNode"

class BinaryTree {

    constructor(value) {
        this._root = this.insertNode(null, value);
    }

    insert(value) {
       this._root = this.insertNode(this._root, value);
    }

    get root() {
        return this._root;
    }

    set visit(action) {
        this._visit = action;
    }

    set relation(action) {
        this._relation = action;
    }


    insertNode(node ,value) {

        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        }

        if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        }

        node.height = BinaryTree.height(node);
        return this.balancing(node, value);
    }


    balancing(node, value) {
        let balance = BinaryTree.getHeight(node.left) - BinaryTree.getHeight(node.right);

        if (balance > 1 && value < node.left.value) {
            return BinaryTree.rightRotation(node);
        }

        if (balance < -1 && value > node.right.value) {
           return BinaryTree.leftRotation(node);
        }

        if (balance > 1 && value > node.left.value) {
            return BinaryTree.leftRightRotation(node);
        }

        if (balance < -1 && value < node.right.value) {
            return BinaryTree.rightLeftRotation(node);
        }

        return node;
    }


    static getHeight(node) {
        return node === null ? 0 : node.height;
    }

    static height(node) {
        return Math.max(BinaryTree.getHeight(node.left), BinaryTree.getHeight(node.right)) + 1;
    }



    static rightRotation(node) {
        let temp = node.left;
        node.left = temp.right;
        temp.right = node;
        node.height = BinaryTree.height(node);
        temp.height = BinaryTree.height(temp);
        return temp;
    }


    static leftRotation(node) {
        let temp = node.right;
        node.right = temp.left;
        temp.left = node;
        node.height = BinaryTree.height(node);
        temp.height = BinaryTree.height(temp);
        return temp;
    }

    static leftRightRotation(node) {
        node.left = BinaryTree.leftRotation(node.left);
        return BinaryTree.rightRotation(node);
    }

    static rightLeftRotation(node) {
        node.right = BinaryTree.rightRotation(node.right);
       return BinaryTree.leftRotation(node);
    }

    preOrder() {
        this.postOrderNode(this._root);
    }

    postOrder() {
        this.preOrderNode(this._root);
    }

    inOrder() {
        this.inOrderNode(this._root);
    }

    preOrderNode(node) {
        if (node !== null) {
            this._visit(node);
            this.preOrderNode(node.left);
            this.preOrderNode(node.right);
        }
    }

    postOrderNode(node) {
        if(node !== null) {
            this.postOrderNode(node.left);
            this.postOrderNode(node.right);
            this._visit(node);
        }
    }

    inOrderNode(node) {
        if(node !== null) {
            this.inOrderNode(node.left);
            this._visit(node);
            this.inOrderNode(node.right);
        }
    }
    explore() {
        this.exploreNode(this.root, null);
    }

    exploreNode(node, parent){
        if(node != null && this._visit != null && this._relation != null){
            this.exploreNode(node.left, node);
            this._visit(node);
            this._relation(node, parent);
            this.exploreNode(node.right,node);
        }
    }
}

export default BinaryTree;