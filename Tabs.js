import React from 'react';
import EventTable from './EventTable';
import './css/Tabs.css';

class Tabs extends React.Component {
    render() {
        let listObj = this.props.listObj;
        let list = Object.keys(listObj);

        let listItems = list.map(item => {
            return (
                <li onClick={() => this.props.onClick(item)}>{item}</li>
            );
        });

        var bottom = (<div className={this.props.paneClass}></div>);
        let selected = null;
        for (let key in listObj) {
            if (listObj[key]) {
                selected = key;
                break;
            }
        }
        if (selected) {
            bottom = (
                <div className={this.props.paneClass}>
                    <EventTable type={selected}/>
                </div>
            );
        }

        return (
            <div className={this.props.className}>
                <div className={this.props.headerClass}>
                    <ul className="Tabs">{listItems}</ul>
                </div>
                {bottom}
                <div className={this.props.footerClass} />
            </div>
        );
    }
}

export default Tabs;
