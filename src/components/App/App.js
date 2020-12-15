import './App.css';
import CardDisplay from './card-display/CardDisplay';






function App() {
  let cardList = [{
    title:'TODO',
    cardList:[{title:'Do something productive', body:"clean the dishes"}]
  },{
    title:'DOING',
    cardList:[{title:'Call the Delivery Company', body:"clean the dishes"}]
  },{
    title:'DONE',
    cardList:[{title:'Wake Up', body:"clean the dishes"}]
  }];
  


  return (
    <div className="App">
      <div className="row">
        {
          cardList.map((el) =>  {
            return (<div className='card-column'>
              <CardDisplay title={el.title} cardList={el.cardList}/>
            </div>)
          })
        } 
      </div>
    </div>
  );
}

export default App;
