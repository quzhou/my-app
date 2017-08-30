import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

export class MyApp extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activeTab: props.activeTab || 1
    };

    // If you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.
    this.handleSelect = this.handleSelect.bind(this);
  }

  render() {
    return (
      <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
        <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
        <Tab eventKey={4} title="Tab 4">Tab 4 content is displayed by default</Tab>
        <Tab eventKey={5} title="Tab 5">Tab 5 content</Tab>
      </Tabs>
    );
  }

  handleSelect(selectedTab) {
    this.setState({
      activeTab: selectedTab
    });
  }
}
