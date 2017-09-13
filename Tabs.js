import React from 'react';
import './css/Tabs.css';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.tabClick = this.tabClick.bind(this);
    }

    render() {
        let liArray = this.props.tabs;

        return (
            <div className="headerRowRight">
                <ul className="EventTypeTable">{list}</ul>
            </div>
            <div className="bottom">
              <EventTable type={this.props.type}/>
            </div>
        );
    }

    tabClick(e) {
        alert("hi");
    }
}

export default Tabs;
