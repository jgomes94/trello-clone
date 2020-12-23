import React from 'react';

import './CardDisplay.css';
import { Draggable  } from 'react-beautiful-dnd';

class CreateCard extends React.Component {
    render(){
            const cardList = this.props.cardList
            return (
            <div className="card-container">
                <div className="card-header">
                    <span className="card-header">{this.props.title}</span>
                </div>
                {
                    cardList.map((el, index)=>{
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
                
            </div>
            );

    }
}

export default CreateCard;
