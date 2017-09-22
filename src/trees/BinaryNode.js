class BinaryNode {

    constructor(value) {
        this._value = value;
        this._left = null;
        this._right = null;
        this._height = 1;
    }

    set value(value) {
        this._value = value
    }

    get value() {
        return this._value
    }

    set left(left) {
        this._left = left
    }


    get left() {
        return this._left
    }

    set right(right) {
        this._right = right
    }

    get right() {
        return this._right
    }

    set height(height) {
        this._height = height
    }

    get height() {
        return this._height
    }

}

export default BinaryNode;