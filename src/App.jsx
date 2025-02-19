
import './App.css'
import './index.css';
import Form from './components/FormPage/Form';
import { Route } from 'react-router-dom';
import BookedTicket from './components/FormPage/BookedTicket';


function App() {
    

  console.log('hello world' )

  return (
       <main className='  h-full w-full'>
    



           <Route path='/' component={Form} />
           <Route path='/ Tickets' component={BookedTicket} />
        
       </main> 

  )
}

export default App
