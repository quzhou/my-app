import React from 'react';
import EventTypeTable from './EventTypeTable.js';

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="headerRow">Events Viewer</div>
        <div className="bottom">
            <div className="nav">
              <EventTypeTable />
            </div>
            <div id="workspace"></div>
        </div>
      </div>
    );
  }
}
