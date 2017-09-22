import Node from "./IndexerNode"
import BinaryTree from "./BinaryTree";

class IndexerTree extends BinaryTree{

    constructor(value) {
        super(value);
        this._length = 0;
        this._root = this.insertNode(null, this._length++, value);
    }

    insert(value) {
        this._root = this.insertNode(this._root, this._length++, value);
    }

    insertNode(node, index ,value) {

        if (node === null) {
            return new Node(index, value);
        }

        node.right = this.insertNode(node.right, index, value);
        node.height = BinaryTree.height(node);
        return this.balancing(node, index);
    }


    balancing(node, index) {
        let balance = BinaryTree.getHeight(node.left) - BinaryTree.getHeight(node.right);

        if (balance < -1 && index > node.right.index) {
            return BinaryTree.leftRotation(node);
        }

        return node;
    }

     sort() {
         let tree = new BinaryTree(this._root.value);
         this.visit = (node) => tree.insert(node.value);
         this.inOrder();
         return tree;
     }
}

export default IndexerTree;