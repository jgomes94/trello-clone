import './CardDisplay.css';


function CreateCard({title, cardList}) {
    return (
    <div className="card-container">
        <div className="card-header">
            <span className="card-header">{title}</span>
        </div>
        {
            cardList.map((el)=>{
                return(<div className="card-body">
                    <div className="card-thumbnail">
                        <span>{el.title} </span>
                    </div>
                </div>)
            })
        }
        
    </div>
    );
}

export default CreateCard;
