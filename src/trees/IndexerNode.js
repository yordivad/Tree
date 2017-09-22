import BinaryNode from "./BinaryNode";

class IndexerNode extends BinaryNode {

    constructor(index, value) {
        super(value);
        this._index = index;
    }

    get index() {
        return this._index;
    }

}

export default IndexerNode;