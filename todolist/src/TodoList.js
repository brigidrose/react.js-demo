import React, {Component} from "react";

class TodoList extends Component{
  //this is like __init__ in python. 
  constructor(props,context){
    //this is like super.__init__ in python
    super(props, context);
    //the two lines above are A) creating instance of TodoList class
    // and B) telling this instance to inherit the properties of parent class Component
    
    //creating an associative array (aka dict in python) to store props that could change
    this.state = {
      items: []
    };

    //this is something that I have to do when I am trying to create a property
    //for a class. OTHER THAN constructor and render - these happen automatically
    this.addItem = this.addItem.bind(this);
  }
  //creating add item function
  addItem(e){

    var itemArray = this.state.items;
    //if the window value isn't empty
    if (this._inputElement.value !== ""){
      //add item to the front of items[]
      itemArray.unshift({
        //adding a dict with key text and value is the input from the person
        text: this._inputElement.value,
        //saving the time that the item was created
        key: Date.now()
      });
      //react convention for modifying state is to use this code below...
      this.setState({
        items:itemArray
      });
      //this is making it so the text box gets cleared out.
      this._inputElement.value = "";
    }
    //can see items in console
    console.log(itemArray);
    //preventing default on button click actions.
    e.preventDefault();
  }

  render(){
    return(
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
                placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;