import Card from './Card.js'

function Tours({tours,removeCard}){
    return(
        <div className='tour-container'>
            {
                tours.map((tour)=>{
                    return <Card {...tour} removeCard={removeCard}></Card>
                })
            }
        </div>
    );
}
export default Tours;