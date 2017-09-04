import React from 'react';
import EventTypeTable from './EventTypeTable.js';

export class App extends React.Component {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     activeTab: props.activeTab || 1
  //   };

  //   // If you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.
  //   this.handleSelect = this.handleSelect.bind(this);
  // }

  render() {
    return (
      <div className="container">
        <div className="headerRow">Events Viewer</div>
        <div className="bottom">
            <div className="nav">
              <EventTypeTable />
            </div>
            <div className="workspace">table rows</div>
        </div>
      </div>
    );
  }

  // handleSelect(selectedTab) {
  //   this.setState({
  //     activeTab: selectedTab
  //   });
  // }
}
