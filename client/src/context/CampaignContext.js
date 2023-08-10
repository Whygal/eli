import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const domain = `https://back-ujng.onrender.com/api`;

const initialState = {
    campaigns: {},
    loading: true,
    error: null,
};

const campaignReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                campaigns: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
            case 'UPDATE_SUCCESS':
            return {
                ...state,
                campaigns: action.payload,
                loading: false,
                error: null,
            };
        case 'UPDATE_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

const CampaignContext = createContext();

export const CampaignProvider = ({ children }) => {
    const [state, dispatch] = useReducer(campaignReducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${domain}/campaign`);
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR', payload: error.message });
            }
        };
        fetchData();
    }, []);

    const updateCampaign = async (id, updatedData) => {
        try {
            const response = await axios.put(`${domain}/campaign/${id}`, updatedData);
            dispatch({ type: 'UPDATE_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'UPDATE_ERROR', payload: error.message });
        }
    };

    

    return (
        <CampaignContext.Provider value={{ ...state, updateCampaign }}>
            {children}
        </CampaignContext.Provider>
    );
};

export const useCampaignContext = () => {
    return useContext(CampaignContext);
};
