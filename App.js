import React from 'react';
import EventTypeTable from './EventTypeTable.js';
import EventTable from './EventTable.js';

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="nav">
          <div className="headerRowLeft">Events Viewer</div>
          <div className="bottom">
              <EventTypeTable />
          </div>
        </div>
        <div className="flexRight">
          <div id="headerRowRight" />
          <div className="bottom" id="workspace">
              <EventTable />
          </div>
        </div>
      </div>
    );
  }
}
