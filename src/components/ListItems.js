import React, {Component} from "react";
import { Trash } from 'react-bootstrap-icons';

class ListItems extends Component {
    constructor(props) {
        super(props);

        this.createItems = this.createItems.bind(this);
    }

    /*componentDidMount() {
        const preparedFoods = ["user1", "user2", "user3"];
        const final = [];
        for (let  food of preparedFoods) {
            final.push(<li key={food}>{food}</li>);  }

        return final;
    } */

    delete(key) {
        this.props.delete(key);
    }
    createItems(item) {
        return <li  
        key={item.key}>{item.text} 
        <Trash className="delBtn" onClick={() => this.delete(item.key)} /></li>
    }

    render() {
        var listEntries = this.props.entries;
        var addedItems = listEntries.map(this.createItems);
        //var prepared = this.componentDidMount;

        return (
            <ul className="theList">
                {addedItems}
            </ul>
        );
    }
};

export default ListItems;