import React from 'react';
import axios from 'axios';
import './EventTable.css';

class EventTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        };
    }

    componentDidMount() {
        axios.get('http://www.reddit.com/r/dankmemes.json').then(
            res => {
                let rows = res.data.data.children.map(obj => {
                    return {
                        id: obj.data.id,
                        author: obj.data.author
                    };
                });
                this.setState({
                    data: rows,
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
            let rows = this.state.data.map(obj => {
                return (
                    <tr>
                        <td><div className="inRowHead">tiemstamp</div>{obj.id}</td>
                        <td><div className="inRowHead">_raw</div>{obj.author}</td>
                    </tr>
                );
            });
            return (
                <table className="EventTable">
                  {rows}
                </table>
            );
        }
    }
}

export default EventTable;
