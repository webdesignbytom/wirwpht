import './app.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/home/Home';
import { useEffect, useState } from 'react';
import AddItem from './pages/AddItem';
import TopTen from './pages/TopTen';
import Random from './pages/Random';
import Account from './pages/account/Account';
import FloatingNav from './components/nav/FloatingNav';
import Header from './components/header/Header';

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/items`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        setItems(data.data)
      })
      .catch((error) => {
        console.error('error', error)
      })
  }, [])
  console.log('items', items);

  return (
    <div className='app'>
      <Header />
      <FloatingNav />
      <Routes>
        <Route path='/' element={<Home items={items} />} />
        <Route path='/additem' element={<AddItem items={items} />} />
        <Route path='/topten' element={<TopTen items={items} />} />
        <Route path='/random' element={<Random />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
