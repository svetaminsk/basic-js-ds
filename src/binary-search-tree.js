const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');
/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(main = null) {
    this.main = main;
  }

  root() {
    return this.main;
  }

  add(data) {
    this.main = addNode(this.main, data);
    function addNode(root, value) {
      if (!root) return new Node(value);
      if (root.data === value) return root;
      if (value < root.data) {
        root.left = addNode(root.left, value)
      } else {
        root.right = addNode(root.right, value);
      }
      return root;
    }
  }

  has(data) {
    if (!this.main) return false;
    if (this.main.data === data) return true;
    let isFound = this.find(data);
    console.log(isFound);
    return isFound ? true : false;
  }

  find(data) {
    if (!this.main) return false;
        let mainNode = this.main;
        let found = false;
        while (!found && mainNode) {
            if (data < mainNode.data) {
              mainNode = mainNode.left;
            } else if (data > mainNode.data) {
              mainNode = mainNode.right;
            } else {
                return mainNode;
            }
        }
        return null;
  }

  remove(data) {
    return removeNode(this.main, data);
    function removeNode(root, value) {
      if (!root) return null;
      if (value === root.data) {
        if (!root.left && !root.right) return null;
        if (!root.left) {
          root = root.right;
          return root;
        }
        if (!root.right) {
          root = root.left;
          return root;
        }
        let minRight = root.right;
        while (minRight.left) minRight = minRight.left;
        root.data = minRight.data;
        root.right = removeNode(root.right, minRight.data);
        return root;
      }
      if (value < root.data) {
        root.left = removeNode(root.left, value);
        return root;
      } else {
        root.right = removeNode(root.right, value);
        return root;
      }
    }
  }

  min() {
    if (!this.main) return null;
    let current = this.main;
    while (current.left) current = current.left;
    return current.data;
  }

  max() {
    if (!this.main) return null;
    let current = this.main;
    while (current.right) current = current.right;
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};