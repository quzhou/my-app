import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './EventTypeTable.css';

class EventTypeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            types: [],
            loading: true
        };
        this.liClick = this.liClick.bind(this);
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
                    <li onClick={this.liClick}>Events Type {item}</li>
                );
            });
            return (
                <ul className="EventTypeTable">{listItems}</ul>
            );
        }
    }

    liClick(e) {
        ReactDOM.render(
            <div>{e.target.innerText}</div>,
            document.getElementById('headerRowRight')
        );
    }
}

export default EventTypeTable;
