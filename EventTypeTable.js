import React from 'react';
import './EventTypeTable.css';

class EventTypeTable extends React.Component {
    render() {
        return (
            <ul className="EventTypeTable">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        );
    }
}

export default EventTypeTable;
