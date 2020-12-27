import React from 'react';

import { v4 as uuidv4 } from 'uuid';

class CreateCard extends React.Component {
    constructor(props){
        super();
        this.state = {};
        this.state.addCard=props.addCard;
        this.state.tableId= props.tableId;
        this.state.inputValue = '';
        this.closeNewCard = props.onClose;
    }

    render() {
        return (
            <div>
                <input onChange={evt => this.updateInputValue(evt)}  type="text" id="title" name="title" placeholder="Enter a title for this card" />
                <div>
                    <button onClick={this.createCard.bind(this)}>Add Card </button>
                    <span onClick={this.closeNewCard}> X </span>
                </div>
            </div>
        )
    }

    createCard () {
        this.state.addCard({id: uuidv4(), order: 1, 
                            title: this.state.inputValue, 
                            body:""}, this.state.tableId, 2);
    }

    updateInputValue(evt) {
        this.setState({inputValue: evt.target.value});
    }
}

export default CreateCard;
