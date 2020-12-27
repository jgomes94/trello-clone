import React from 'react';

import './CardDisplay.css';

import AddCard from './add-card/AddCard';
import { Draggable  } from 'react-beautiful-dnd';

class CreateBoard extends React.Component {
    constructor(props){
        super();
        this.state = {};
        this.state.addCard = props.addCard; 
        this.state.tableId = props.tableId;
    }

    render() {
        const cardList = this.props.cardList;
        
        return (
            <div className="card-container">
                <div className="card-header">
                    <span className="card-header">{this.props.title}</span>
                </div>
                {cardList.map((el, index)=>{
                    return(
                        <Draggable key={el.id} draggableId={''+el.id} index={index}>
                            {(provided) => (
                                <div ref={provided.innerRef} 
                                    {...provided.draggableProps} 
                                    {...provided.dragHandleProps} 
                                    className="card-body">
                                    <div className="card-thumbnail">
                                        <span>{el.title} </span>
                                    </div>
                                </div>
                            )}
                        </Draggable>
                    )
                })
                }
                <AddCard tableId={this.state.tableId} addCard={this.state.addCard.bind(this)}></AddCard>
            </div>
        );
    }
}

export default CreateBoard;