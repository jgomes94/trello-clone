import React from 'react';
import './App.css';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import CardDisplay from './card-display/CardDisplay';

class App extends React.Component{
  constructor(props)  {
    super(props);
    this.state = {};
    this.state.columnList =  [{
      id: 100,
      title:'TODO',
      cardList:[{id: 1, order: 1, title:'View the chapter 3 of the online course', body:"clean the dishes"}]
    },{
      id: 101,
      title:'DOING',
      cardList:[{id: 2, order: 1, title:'Call the Delivery Company about package', body:"clean the dishes"}]
    },{
      id: 102,
      title:'DONE',
      cardList:[{id: 3, order: 1, title:'Dinner with Friends', body:"clean the dishes"},
                {id: 4, order: 2, title:'Cook Food', body:"Make the bed"},
                {id: 5, order: 3, title:'Order Coffee', body:"Make Coffee"}]
    }];
  }

  render() {
      return (
        <div className="App">
          <div className="row">
            <DragDropContext onDragEnd={this.updateCards.bind(this)}>
                  {this.state.columnList.map((el) => (
                    <Droppable key={''+el.id} droppableId={''+el.id}>
                      {(provided) => (
                        <div ref={provided.innerRef} className='card-column'>
                                <CardDisplay 
                                  {...provided.droppableProps}
                                  {...provided.placeholder}
                                  className="characters"
                                  title={el.title} 
                                  cardList={el.cardList}/>
                          {provided.placeholder}                          
                          
                        </div>
                      )}
                      </Droppable> 
                    ))}
            </DragDropContext>
        </div>
      </div>
    )
  }

  updateCards(result) {
    const card = this.findCardById(result.draggableId);
    if(card && result && result.destination && result.destination.droppableId){
      this.removeCardById(result.draggableId);
      this.addCardToTable(card, result.destination.droppableId, result.destination.index);
    }
  }
  
  findCardById(cardId) {
    for(let column of this.state.columnList){
      for(let card of column.cardList){  
        if(Number(card.id) ===  Number(cardId)){
          return card;
        }
      }
    }
  
    return null;
  }
  
  removeCardById(cardId) {
    for(let column of this.state.columnList) {
      column.cardList = column.cardList.filter((el) => {
        return Number(el.id) !== Number(cardId)});
    }
  } 

  addCardToTable(card, tableId, order) {
    for(let column of this.state.columnList) {
      if(Number(column.id) === Number(tableId)) {
        column.cardList.splice(order, 0, card);
        return;
      }
    }
  }

}

export default App;