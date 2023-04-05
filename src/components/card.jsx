import react from 'react';
import reactDom from 'react-dom';
function Card(props) {
    return <div className='card'><p>{props.title} </p>
        <p>{props.content} </p> </div>
}
export default Card;