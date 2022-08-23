import React from 'react';
import "./card.styles.css"

class Card extends React.Component{
    render()
    {
       const {name,id,email} =this.props.monster;
        return(
            <div className="card-container" key={id}>
            <img
              alt={`monster ${name}`}
              src={`https://robohash.org/${id}?set2&size=180x180`}
            />
            <h1>{name}</h1>
            <p>{email}</p>
          </div>
        )
    }
}

export default Card; 