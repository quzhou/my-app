import React from 'react';
import EventTypeTable from './EventTypeTable.js';

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: {
            }
        };
        this.liClick = this.liClick.bind(this);
    }

    render() {
        return (
            <div className="container">
                <div className="nav">
                    <div className="headerRowLeft">Events Viewer</div>
                    <div className="bottom">
                        <EventTypeTable onClick={this.liClick}/>
                    </div>
                </div>
                <div className="flexRight">

                </div>
            </div>
        );
    }

    liClick(item) {
        this.state.selected[item] = true;
    }
}
