import React from 'react';
import ItemList from '../../components/items/ItemList';
import FloatingNav from '../../components/nav/FloatingNav';
import StatsBar from '../../components/stats/StatsBar';
import './style.css';

function Home({ items }) {
  return (
    <div>
      <main className='main__container'>
        <StatsBar />
        <ItemList items={items} />
        <FloatingNav />
      </main>
    </div>
  );
}

export default Home;
