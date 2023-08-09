import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';


// Initial state for the reducer
const initialState = {
    donors: [],
    loading: true,
    error: null,
    sumOfAllDonorAmount: 0,

};


// Reducer function
const donorReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                donors: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case 'ADD_DONOR_SUCCESS':
            return {
                ...state,
                donors: [...state.donors, action.payload],
            };
        case 'ADD_DONOR_ERROR':
            return state; 
        case 'FETCH_TOTAL_AMOUNT_SUCCESS':
            return {
                ...state,
                sumOfAllDonorAmount: action.payload
            };
        case 'FETCH_TOTAL_AMOUNT_ERROR':
            return state;
        default:
            return state;
    }
};

const DonorContext = createContext();

export const DonorProvider = ({ children }) => {
    const [state, dispatch] = useReducer(donorReducer, initialState);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/donor');
            dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
    };

    const getDonorsByGroupId = async (groupId) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/donor/groupId/${groupId}`);
            dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
    };

    const addDonor = async (newDonor) => {
        try {
            const response = await axios.post('http://localhost:5000/api/donor', newDonor);
            dispatch({ type: 'ADD_DONOR_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'ADD_DONOR_ERROR' });
        }
    };

 const fetchTotalDonorAmount = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/donor/totalAmount');
            dispatch({ type: 'FETCH_TOTAL_AMOUNT_SUCCESS', payload: response.data.totalAmount });
        } catch (error) {
            dispatch({ type: 'FETCH_TOTAL_AMOUNT_ERROR', payload: error.message });
        }
    };

    useEffect(() => {
        fetchTotalDonorAmount(); // Call the function here
    }, []);

    return (
        <DonorContext.Provider value={{ ...state, addDonor, fetchData, getDonorsByGroupId,fetchTotalDonorAmount }}>
            {children}
        </DonorContext.Provider>
    );
};



export const useDonorContext = () => {
    return useContext(DonorContext);
};
