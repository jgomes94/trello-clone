const API_URL = 'http://localhost:3000';

module.exports.getCards = async () => {
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