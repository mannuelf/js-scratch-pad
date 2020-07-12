import React from 'react';
import { UserConsumer } from '../App';

const NewSingle = ({item}) => (
  <UserConsumer>
    {({ name, toggleName }) => (
    <div className="col s4" onClick={toggleName}>
      <div className="card">
        <div className="card-image">
          <img src={item.urlToImage} alt={item.title}/>
          <span className="card-title">{name}</span>
        </div>
        <div className="card-content">
          <p>{item.title}</p>
        </div>
        <div className="card-action">
          <a href={item.url} rel="noopener noreferrer" target="_blank">Full article</a>
        </div>
      </div>
    </div>
    )}
  </UserConsumer>
);

export default NewSingle;
