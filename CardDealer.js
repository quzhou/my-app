import React from 'react';

class CardDealer extends React.Component {
    constructor() {
        super();

        this.state = {
            candidates: [],
            cards: []
        };

        this.liClick = this.liClick.bind(this);
        this.shuffle = this.shuffle.bind(this);

        this.shuffle();
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
            let arr = state.candidates.splice(0, 5);
            let obj = {};
            Object.assign(obj, state);
            obj.cards = arr;
            return obj;
        });
    }

    shuffle() {
        this.state.candidates = [];
        for (let i = 1; i <= 52; i++) {
            this.state.candidates.push(i);
        }

        let idx = 51;
        while (idx > 0) {
            let rn = Math.floor(Math.random() * idx);

            let tmp = this.state.candidates[rn];
            this.state.candidates[rn] = this.state.candidates[idx];
            this.state.candidates[idx] = tmp;

            idx--;
        }
    }
}

export default CardDealer;
