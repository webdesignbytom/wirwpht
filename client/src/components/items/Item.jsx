import React from 'react';
import './style.css';
import { RiStarSLine } from 'react-icons/ri';
import { AiFillCaretDown } from 'react-icons/ai';

function Item({ item, key }) {
  return (
    <li className='list__item' key={key}>
      <div className='item__top__container'>
        <h2>{item.name}</h2>
        <p className='stars'>
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
        </p>
      </div>

      <div className='item__image__container'>
        <img
          className='item__image'
          src={item.imageUrl}
          alt='really good stuffdd'
        />
      </div>

      <div className='item__stats__container'>
        <p>{item.cost}</p>
        <p>total can buy</p>
        <p>total each</p>
        <p>time to earn</p>
      </div>
      <div className='item__description__container'>
        <p>{item.desc}</p>

        <div className='item__comments__container'>
          Comments <AiFillCaretDown />
        </div>
      </div>
      <div className='item__footer__container'>
        <p>{item.createdAt}</p>
        <p>{item.id}</p>
      </div>
    </li>
  );
}

export default Item;
