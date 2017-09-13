import React from 'react';
import axios from 'axios';
import './css/EventTable.css';

class EventTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: true
        };
    }

    loadTable(type) {
        let url = 'http://pay.reddit.com/user/' + type +
            '/comments.json?t=all&limit=100&sort=new';
        axios.get(url).then(
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

    componentDidMount() {
        this.loadTable(this.props.type);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.type !== nextProps.type) {
            this.loadTable(nextProps.type);
        }
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
