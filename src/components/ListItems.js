import React, {Component} from "react";
import { Trash } from 'react-bootstrap-icons';

class ListItems extends Component {
    constructor(props) {
        super(props);

        this.createItems = this.createItems.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }
    createItems(item) {
        return <li  className="animate__animated animate__slideInDown"
        key={item.key}>{item.text} 
        <Trash className="delBtn" onClick={() => this.delete(item.key)} /></li>
    }

    render() {
        var listEntries = this.props.entries;
        var addedItems = listEntries.map(this.createItems);

        return (
            <ul className="theList">
                {addedItems}
            </ul>
        );
    }
};

export default ListItems;