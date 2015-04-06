var LinkedList = (function() {
  var Node = (function(value) {
    this.value = value;
  });

  var head = null;

  return function(){
    // add a new node
    this.add = function(value) {
      node = new Node(value);
      if(this.head)
        node.next = this.head;
      this.head = node;
    };

    // get the first node containing a value
    this.search = function(value) {
      node = this.head;
      while(node.value != value) {
        if(node.next == null)
          return null;

        node = node.next;
      }
      return node;
    };

    // get the value of the first node
    this.first = function() {
      if(this.head)
        return this.head.value;
      else
        return null;
    };
  };
})();

module.exports = LinkedList;