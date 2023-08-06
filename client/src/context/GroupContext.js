import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';


// Initial state for the reducer
const initialState = {
    donors: [],
    loading: true,
    error: null,
};


// Reducer function
const groupReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                groups: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};


const GroupContext = createContext();


export const GroupProvider = ({ children }) => {
    const [state, dispatch] = useReducer(groupReducer, initialState);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/ambassador'); // Replace with your actual API endpoint
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR', payload: error.message });
            }
        };


        fetchData();
    }, []);


    return (
        <GroupContext.Provider value={state}>
            {children}
        </GroupContext.Provider>
    );
};


export const useGroupContext = () => {
    return useContext(GroupContext);
};
