import React from 'react';
import Item from './Item';
import './style.css';

function ItemList({ items }) {
  return (
    <section className='container itemList__container'>
      {items?.length > 0 ? (
            <ul className="items-list">
              {items?.map((item, index) => (
                <Item item={item} key={index} />
              ))}
            </ul>
          ) : (
            <p className="no-items-message">
              There are no items at the moment.
            </p>
          )}
    </section>
  );
}

export default ItemList;
