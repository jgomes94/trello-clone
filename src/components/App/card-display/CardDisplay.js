import './CardDisplay.css';


function CreateCard() {
    return (
    <div className="card-container">
        <p className="card-header">Header</p>
        <div className="card-body">
            <div className="card-thumbnail">
                <span>Hi this is my card </span>
            </div>
            <div className="card-thumbnail">
                <span>Hi this is my card </span>
            </div>
        </div>
    </div>
    );
}

export default CreateCard;
