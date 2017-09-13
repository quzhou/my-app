import React from 'react';
import axios from 'axios';
import './css/EventTypeTable.css';

class EventTypeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            types: [],
            loading: true
        };
    }

    componentDidMount() {
        axios.get('http://www.reddit.com/r/dankmemes.json').then(
            res => {
                let authors = res.data.data.children.map(obj => obj.data.author);
                this.setState({
                    types: authors,
                    loading: false
                });
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        );
    }

    render() {
        if (this.state.loading) {
            return (<div style={{padding: '10px'}}>Loading...</div>);
        } else {
            let listItems = this.state.types.map(item => {
                return (
                    <li onClick={() => this.props.onClick(item)}>Events Type {item}</li>
                );
            });
            return (
                <ul className="EventTypeTable">{listItems}</ul>
            );
        }
    }
}

export default EventTypeTable;
