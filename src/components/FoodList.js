import React, { Component } from "react";
import ListItems from "./ListItems";
import InitialItems from "./InitialItems";
import "./ListStyle.css";
 
class FoodList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState)=> {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        e.preventDefault();
    }

    deleteItem(key) {
      var filteredItems = this.state.items.filter(function (item) {
        return (item.key !== key);
      });
     
      this.setState({
        items: filteredItems
      });
    }


  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="kirjoita ruoka tähän">
            </input>
            <button type="submit">Lisää</button>
          </form>
        </div>
        <div className="foodLists">
        <ListItems entries={this.state.items}
                    delete={this.deleteItem} />
        <InitialItems delete={this.deleteItem} />
        </div>
      </div>
    );
  }
}
 
export default FoodList;