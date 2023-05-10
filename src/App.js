import SearchFilter from './components/SearchFilter'
import { Routes, Route } from 'react-router-dom';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  return (
    <div className='mb-5'>
      <header className='d-flex justify-content-center'>
        <h1>
          Luke APIwalker
        </h1>
      </header>
      <SearchFilter/>
      <Routes>
        <Route path='/people/:id' element={<People/>} />
        <Route path='/planets/:id' element={<Planets/>} />
      </Routes>
    </div>
  );
}

export default App;
