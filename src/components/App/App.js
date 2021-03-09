import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import CardDisplay from './card-display/CardDisplay';

const API_URL = 'http://127.0.0.1:3000';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.displayRefresh = false;
    this.state.columnList = [];
  }

  async componentDidMount() {
    try {
      const cardList = await axios.get(API_URL + '/cards', {"Access-Control-Allow-Headers": "Access-Control-Allow-Headers", 'Access-Control-Allow-Origin': 'http://localhost:3001'});
      this.setState({ columnList: cardList });
    } catch (exception) {
      console.log('exception', exception);
    }
  }


  render() {
    return (
      <div className="App">
        <div className="row">
          <DragDropContext onDragEnd={this.updateCards.bind(this)}>
            {this.state.columnList.map((el) => (
              <Droppable key={'' + el.id} droppableId={'' + el.id}>
                {(provided) => (
                  <div ref={provided.innerRef} className='card-column'>
                    <CardDisplay
                      {...provided.droppableProps}
                      {...provided.placeholder}
                      className="characters"
                      title={el.title}
                      cardList={el.cardList}
                      addCard={this.addCardToTable.bind(this)}
                      tableId={el.id}
                      refresh={!this.state.displayRefresh}
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

  getCards = () => {
    let toReturn = []

    this.state.columnList.forEach((el) => {
      let tableObj = {}
      tableObj = toReturn.filter((filter) => filter.title == el.tableName);

      if (tableObj) {
        tableObj.cardList.push(el)
      } else {
        tableObj = {}
        tableObj.id = uuidv4();
        tableObj.title = el.tableName
        tableObj.cardList = [];
        tableObj.cardList.push(el);
        toReturn.push(tableObj);
      }
    });

    return toReturn;

  }

  addCardToTable(card, tableId, order) {
    for (let column of this.state.columnList) {
      if (column.id === tableId) {
        column.cardList.splice(order, 0, card);
        this.setState({ displayRefresh: !this.state.displayRefresh });
        return;
      }
    }
  }

  updateCards(result) {
    const card = this.findCardById(result.draggableId);
    if (card && result && result.destination && result.destination.droppableId) {
      this.removeCardById(result.draggableId);
      this.addCardToTable(card, result.destination.droppableId, result.destination.index);
    }
  }

  removeCardById(cardId) {
    for (let column of this.state.columnList) {
      column.cardList = column.cardList.filter((el) => {
        return '' + el.id !== '' + cardId
      });
    }
  }

  findCardById(cardId) {
    for (let column of this.state.columnList) {
      for (let card of column.cardList) {
        if ('' + card.id === '' + cardId) {
          return card;
        }
      }
    }
    return null;
  }
}

export default App;