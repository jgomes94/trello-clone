import React from 'react';

import CreateCard  from './create-card/CreateCard';
import './AddCard.css';

class AddCard extends React.Component {
    constructor(props){
        super();
        this.state = {};
        this.state.showNewCardForm = false;
        this.state.addCard= props.addCard;
        this.state.tableId = props.tableId;
    }
    
    openCreateCard(){
        this.setState({showNewCardForm: true});
    }

    closeNewCard(){
        this.setState({showNewCardForm: false});
    }

    render() {
        let toReturn; 

        if(this.state.showNewCardForm){
            toReturn = <CreateCard tableId={this.state.tableId} addCard={this.state.addCard.bind(this)} onClose={this.closeNewCard.bind(this)}/>;
        } else {
            toReturn = <div onClick={this.openCreateCard.bind(this)}><span> + </span> <span> Add another card </span></div>;
        }

        return (
            <div className="add-card"> 
                {toReturn}
            </div>
        )
    }
}

export default AddCard;
