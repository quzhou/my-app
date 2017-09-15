import React from 'react';
import EventTypeTable from './EventTypeTable.js';
import Tabs from './Tabs.js';

export class App extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.liClick = this.liClick.bind(this);
        this.tabClick = this.tabClick.bind(this);
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
                <Tabs listObj={this.state} onClick={this.tabClick} className="flexRight" 
                    headerClass="headerRowRight" paneClass="contentPane" footerClass="contentFooter">
                </Tabs>
            </div>
        );
    }

    liClick(item) {
        // this function is async, merge object
        this.setState((state) => {
            let obj = {};
            Object.assign(obj, state);
            for (let key in obj) {
                obj[key] = false;
            }
            obj[item] = true;
            return obj;
        });
    }

    tabClick(item) {
        this.setState((state) => {
            let obj = {};
            Object.assign(obj, state);
            for (let key in obj) {
                obj[key] = false;
            }
            obj[item] = true;
            return obj;
        });
    }
}
