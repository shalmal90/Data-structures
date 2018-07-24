var linkedList = function(){

	var head = null;
	var length = 0;
	
	this.addAtHead = function(value){
		var node = {value};
		node.next = this.head;
		this.head = node;
		this.length++;
		return this;
	} 

	this.removeHead = function(){
		var node = this.head;
		this.head = node.next;
		this.length--;
		return this; 
	}

	this.seachValue = function(){
			
	}

	this.removeAny = function(){

	}
}

var list = new linkedList().addAtHead('one');
list.addAtHead('2');
list.addAtHead('3');
list.addAtHead('5');
list.addAtHead('4');
list.removeHead();

console.log("log",list);