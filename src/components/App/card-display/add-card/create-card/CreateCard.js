import React from 'react';

class CreateCard extends React.Component {
    constructor(props){
        super();
        this.state = {};
        this.state.addCard=props.addCard;
        this.state.tableId= props.tableId;
        this.state.id=600;
        this.closeNewCard = props.onClose;
        
    }

    render() {
        return (
            <div>
                <input type="text" id="title" name="title" placeholder="Enter a title for this card" />
                <div>
                    <button onClick={this.createCard.bind(this)}>Add Card </button>
                    <span onClick={this.closeNewCard}> X </span>
                </div>
            </div>
        )
    }

    createCard () {
        console.log('this.state.tableId', this.state.tableId);
        console.log('ORDER', 2);

        this.state.addCard({id: this.state.id, order: 1, title:'Ill sing smth for you', body:""}, this.state.tableId, 2);
        let id = this.state.id;
        id++;
        this.setState({id: id});
    }
}

export default CreateCard;
