const Node = require('./node');

class LinkedList {

    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let item = new Node(data);

        if(this.length === 0){
            this._head = item;
            this._tail = item;
        }else{

        }

        this._tail.next = item;
        item.prev = this._tail;
        this._tail = item;

        this.length ++;
    }

    head() {return this.isEmpty()?null:this._head.data;}

    tail() {return this.isEmpty()?null:this._tail.data;}

    at(index) {
        if(index > this.length || index < 0){
           // throw "Invalid index";
        }

        let item = this._head;
        let i = 0;

        while(i<index){
            item = item.next;
            i++;
        }

        return item.data;
    }

    insertAt(index, data) {
        if(index < 0){
           // throw "Invalid index";
        }

        if(this.isEmpty()){
            this.append(data);
        }



        let item = this._head;
        let i = 0;

        while(i<index){
            item = item.next;
            i++;
        }

        let node = new Node(data, item.prev, item);

        item.prev.next = node;
        item.prev = node;


    }

    isEmpty() { return this.length===0;}

    clear() {
        this.length = 0;
        this._head =  null;
        this._tail = null;

    }

    deleteAt(index) {
        if(index < 0){
         //   throw "Invalid index";
        }


        let item = this._head;
        let i = 0;

        while(i<index){
            item = item.next;
            i++;
        }
        item.prev.next = item.next;
        item.next.prev = item.prev;

    }

    reverse() {
        let node = this._tail;
        this._tail = this._head;
        this._head = node;


        while (node.prev!=this._tail){
            let temp = node.prev;
            node.prev = node.next;
            node.next = temp;
            node = temp;
        }
    }

    indexOf(data) {


        let item = this._head;
        let i = 0;

        while(item.data !==data){
            item = item.next;
            i++;
        }

        return i;
    }
}

module.exports = LinkedList;
