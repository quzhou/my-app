import React from 'react';

class CardDealer extends React.Component {
    constructor() {
        super();

        this.state = {
            candidates: [],
            cards: []
        };

        for (let i = 0; i < 52; i++) {
            let num = Math.floor((Math.random() * 100) + 1);
            num = (num % 52) + 1;
            this.state.candidates.push(num);
        }

        this.liClick = this.liClick.bind(this);
    }

    render() {
        let listItems = this.state.cards.map(item => {
            return (
                <div className="card">{item}</div>
            );
        });

        return (
            <div className="tContainer">
                <div className="tTop" onClick={this.liClick}>Deal</div>
                <div className="tBot">
                    {listItems}
                </div>
            </div>
        );
    }

    liClick(item) {
        this.setState((state) => {
            let arr = [];
            let cnt = 0;
            for (let i = 0; i < state.candidates.length; i++) {
                if (cnt >= 5) {
                    break;
                }

                let num = state.candidates.shift();
                arr.push(num);
                cnt++;
            }

            let obj = {};
            Object.assign(obj, state);
            obj.cards = arr;
            return obj;
        });
    }
}

export default CardDealer;
