import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './style.css';

const URL = `http://localhost:4000`;
const path = `/total`;

function StatsBar() {
  // const [taxOwed, setTaxOwed] = useState(0);

  // useEffect(() => {
  //   fetch(`${URL}${path}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('data', data);
  //       setTaxOwed(data.data);
  //     })
  //     .catch((error) => {
  //       console.log('error');
  //     });
  // });
  
  return (
    <section>
      <div className='container stats__container'>
        <div className='stats__totals__container'>
          <article className='stats__total__owed'>
            <h2>Owed: 300,000,000</h2>
          </article>

          <article className='stats__uk__citizens'>
            <h2>Citizens: 60,000,000</h2>
          </article>
        </div>
      </div>
    </section>
  );
}

export default StatsBar;
