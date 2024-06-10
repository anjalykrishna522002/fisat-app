import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeleteStudent from './components/DeleteStudent';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route>
        <Route path='/' element={<AddStudent/>}/>
        <Route path='/search' element={<SearchStudent/>}/>
        <Route path='/delete' element={<DeleteStudent/>}/>
        <Route path='/viewall' element={<ViewAll/>}/>

      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
