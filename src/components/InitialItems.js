import React, { useState } from "react";
import { Trash } from 'react-bootstrap-icons';

const initialList = [
    {
        key: 'makaroonilaatikko',
        text: 'Makaroonilaatikko'
    },
    {
        key: 'bolognese',
        text: 'Bolognese kastike'
    },
    {
        key: 'pinaattiletut',
        text: 'Pinaattiletut'
    },
    {
        key: 'lasagne',
        text: 'Lasagne'
    },
    {
        key: 'kanakastike',
        text: 'Kanakastike'
    },
    {
        key: 'tonnikalapastavuoka',
        text: 'Tonnikalapastavuoka'
    },
    {
        key: 'pyttipannu',
        text: 'Pyttipannu'
    }
];

const InitialItems = () => {

    const [list, setList] = useState(initialList);

    function handleRemove(key) {
        console.log(key)
        const newList = list.filter((item) => item.key !== key);

        setList(newList);
    }

    return (
        <ul className="theList">
            {list.map((item) => (
                <li key={item.key}>
                    {item.text} <Trash className="delBtn" onClick={()=> handleRemove(item.key)} />
                </li>
            ))}
        </ul>
    );

};

export default InitialItems;