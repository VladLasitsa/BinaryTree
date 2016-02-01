'use strict';

class BinaryTree {

    constructor() {
        this.root = null;
    }

    insert(data) {
        if (this.root == null) {
            this.root = new Node(data, null, null);
        }
        else {
            var add = function (data, temp) {
                if (data > temp.data) {
                    if (temp.right != null) {
                        temp = temp.right;
                        add(data, temp);
                    }
                    else {
                        temp.right = new Node(data, null, null);
                        return;
                    }
                 }
                else if (data <= temp.data) {
                    if (temp.left != null) {
                        temp = temp.left;
                        add(data, temp);
                    }
                    else {
                        temp.left = new Node(data, null, null);
                        return;
                    }
                }
            }
            add(data, this.root);
        }
    }
    contains(data) {
        var search = function (data, temp) {
            if (temp === null) {
                return false;
            }
            else if (temp.data == data) {
                return true;
            }
            else if (temp.data < data) {
                temp = temp.right;
                return search(data, temp);
            }
            else if (temp.data > data) {
                temp = temp.left;
                return search(data, temp);
            }
        }
        return search(data, this.root);
    }

    remove(data) {
        var parent;
        var child;
        if (this.root.data == data) {
            this.root = null;
        }
        else if (this.contains(data)) {
            var search = function (data, temp) {
                if (temp == null) {
                    return false;
                }
                else if (temp.data == data) {
                    child = temp;
                    return true;
                }

                else if (temp.data < data) {
                    parent = temp;
                    temp = temp.right;
                    return search(data, temp);

                }
                else if (temp.data > data) {
                    parent = temp;
                    temp = temp.left;
                    return search(data, temp);

                }
            }
            if (search(data, this.root)) {

                if (child.left == null && child.right == null) {

                    if (parent.data > child.data) {
                        parent.left = null;
                        child = null;
                        return;
                    }
                    if (parent.data < child.data) {
                        parent.right = null;
                        child = null;
                        return;
                    }
                }
                if (child.left != null && child.right == null) {

                    if (parent.data > child.data) {
                        parent.left = child.left;
                        child = null;
                        return;

                    }
                    if (parent.data < child.data) {
                        parent.right = child.left;
                        child = null;
                        return;

                    }
                }
                if (child.left == null && child.right != null) {

                    if (parent.data < child.data) {
                        parent.right = child.right;
                        child = null;
                        return;

                    }
                    if (parent.data > child.data) {
                        parent.left = child.right;
                        child = null;
                        return;

                    }

                }

                if (child.left != null && child.right != null) {
                    var minRight;
                    var parentChild = child;
                    var searchMininRight = function (node) {
                        if (node.left != null) {
                            parentChild = node;
                            searchMininRight(node.left);
                        }
                        else {
                            minRight = node;
                            return;
                        }
                    }
                    minRight = child.right;
                    searchMininRight(minRight);
                    child.data = minRight.data;
                    parentChild.left = null;
                    child = null;
                    return;
                }
            }
        }
         return;
    }

    size() {
        var numberNodes = 0;
        if (this.root == null) {
            return numberNodes;
        }

        else {
            var checkChild = function (parent) {

                if (!parent) {
                    return numberNodes;
                }
                else {
                    numberNodes++;
                    if (parent.left != null) {
                        checkChild(parent.left);
                    }
                    if (parent.right != null) {
                        checkChild(parent.right);
                    }
                }
            }
            checkChild(this.root);
            return numberNodes;
        }
    }


    isEmpty() {
        if (this.root == null) {
            return true;
        }
        else {
            return false;
        }
    }
}
