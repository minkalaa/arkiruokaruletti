import React, {Component} from "react";

class ListItems extends Component {
    createItems(item) {
        return <li key={item.key}>{item.text}</li>
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