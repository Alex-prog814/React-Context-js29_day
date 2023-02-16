import React from 'react';
import MySuperButton from './componets/Button/MySuperButton';
import Counter from './componets/Counter/Counter';
import Counter2 from './componets/Counter2/Counter2';
import CounterContextProvider from './counterContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// users
import AddForm from './componets/AddForm/AddForm';
import Details from './componets/Details/Details';
import UsersList from './componets/UsersList/UsersList';
import EditForm from './componets/EditForm/EditForm';
import UsersContextProvider from './usersContext';

const App = () => {
  return (
      <UsersContextProvider>
        <CounterContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/counter" element={<Counter />} />
              <Route path="/counter2" element={<Counter2 />} />
              {/* users routes */}
              <Route path="/edit/:id" element={<EditForm />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/users" element={<><AddForm /><UsersList /></>} />
            </Routes>
          </BrowserRouter>
        </CounterContextProvider>
      </UsersContextProvider>
  )
}

export default App