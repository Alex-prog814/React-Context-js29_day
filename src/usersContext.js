import React, { useState } from 'react';
import axios from 'axios';

export const usersContext = React.createContext();

const INIT_STATE = {
    users: [],
    oneUser: null
};

function reducer(state=INIT_STATE, action) {
    switch(action.type) {
        case 'GET_USERS':
            return { ...state, users: action.payload };
        case 'GET_ONE_USER':
            return { ...state, oneUser: action.payload };
        default: 
            return state;
    };
};

const UsersContextProvider = ({ children }) => {
    const API = 'http://localhost:8000/users';
    // const [users, setUsers] = useState([]);
    // const [oneUser, setOneUser] = useState(null);
    const [state, dispatch] = React.useReducer(reducer, INIT_STATE);

    async function getUsers() {
        let res = await axios(API);
        // console.log(res);
        // setUsers(res.data);
        dispatch({
            type: 'GET_USERS',
            payload: res.data
        });
    };

    async function createUser(newUser) {
        await axios.post(API, newUser);
        getUsers();
    };

    async function getOneUser(id) {
        let res = await axios(`${API}/${id}`);
        // setOneUser(res.data);
        dispatch({
            type: 'GET_ONE_USER',
            payload: res.data
        });
    };

    async function updateUser(id, editedUser) {
        await axios.patch(`${API}/${id}`, editedUser);
        getUsers();
    };

    return (
        <usersContext.Provider value={{
            users: state.users,
            oneUser: state.oneUser,

            getUsers,
            createUser,
            getOneUser,
            updateUser
        }}>
            { children }
        </usersContext.Provider>
    )
}

export default UsersContextProvider;