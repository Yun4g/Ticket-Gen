
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Form from './components/FormPage/Form';
import BookedTicket from './components/FormPage/BookedTicket';



function App() {
    

  console.log('hello world' )

  return (
       <main className='  h-full w-full'>
          <Routes>
            <Route path='/' element={<Form/>} />
          
         
          </Routes>
       </main> 

  )
}

export default App
