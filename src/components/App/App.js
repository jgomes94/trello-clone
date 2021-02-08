import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import CardDisplay from './card-display/CardDisplay';

class App extends React.Component{
  constructor(props)  {
    super(props);
    this.state = {};
    this.state.displayRefresh = false;
    this.state.columnList = this.getCards();
  }

  render() {
      console.log('this.state.columnList', this.state.columnList);
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
                                  cardList={el.cardList}
                                  addCard = {this.addCardToTable.bind(this)}
                                  tableId = {el.id}
                                  refresh = {!this.state.displayRefresh}
                                  />
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

  getCards(){
    return [{
      id: uuidv4(),
      title:'TODO',
      cardList:[{id: uuidv4(), order: 1, title:'View the chapter 3 of the online course', body:"clean the dishes"}]
    },{
      id: uuidv4(),
      title:'DOING',
      cardList:[{id: uuidv4(), order: 1, title:'Call the Delivery Company about package', body:"clean the dishes"}]
    },{
      id: uuidv4(),
      title:'DONE',
      cardList:[{id: uuidv4(), order: 1, title:'Dinner with Friends', body:"clean the dishes"},
                {id: uuidv4(), order: 2, title:'Cook Food', body:"Make the bed"},
                {id: uuidv4(), order: 3, title:'Order Coffee', body:"Make Coffee"}]
    }];
  }

  addCardToTable(card, tableId, order) {
    for(let column of this.state.columnList) {
      if(column.id === tableId) {
        column.cardList.splice(order, 0, card);
        this.setState({displayRefresh: !this.state.displayRefresh});
        return;
      }
    }
  }

  updateCards(result) {
    const card = this.findCardById(result.draggableId);
    if(card && result && result.destination && result.destination.droppableId){
      this.removeCardById(result.draggableId);
      this.addCardToTable(card, result.destination.droppableId, result.destination.index);
    }
  }

  removeCardById(cardId) {
    for(let column of this.state.columnList) {
      column.cardList = column.cardList.filter((el) => {
      return  '' + el.id !==  '' + cardId});
    }
  }
  
  findCardById(cardId) {
    for(let column of this.state.columnList){
      for(let card of column.cardList){  
        if('' + card.id ===  ''+ cardId){
          return card;
        }
      }
    }
    return null;
  }
}

export default App;