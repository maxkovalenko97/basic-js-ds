const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(value) {
    if (!this.tree) {
      this.tree = new Node(value);
    } 
    else {
      let newNode = new Node(value);
      this.insertNode(this.tree, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } 
    else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    function hasNode(node, data) {
      if (!node) return false;
      else if (data > node.data) {
        return hasNode(node.right, data);
      } else if (data < node.data) {
        return hasNode(node.left, data);
      } else {
        return true;
      } 
    }
    return hasNode(this.tree, data);
  }

  find(data) {
    function hasNode(node, data) {
      if (!node) {
        return null;
      } else if (data > node.data) {
        return hasNode(node.right, data);
      } else if (data < node.data) {
        return hasNode(node.left, data);
      } else {
        return node;
      } 
    }
    return hasNode(this.tree, data);
  }

  remove(data) {
    this.tree = this.removeNode(this.tree, data);
  }

  removeMin(node) {
    if (!node.left) return node;
    return this.removeMin(node.left);
  }

  removeNode(node, data) {
    if (!node) {
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let minNodeRight = this.removeMin(node.right);
      node.data = minNodeRight.data;
      node.right = this.removeNode(node.right, node.data);
      return node;
    }
  }



  min(node = this.tree, min = null) {
    if (!node.left) return min;
    min = node.left.data;
    return this.min(node.left, min);
  }

  max(node = this.tree, max = null) {
    if (!node.right) return max;
    max = node.right.data;
    return this.max(node.right, max);
  }

}

module.exports = {
  BinarySearchTree
};