import React, { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

const domain = `https://back-5zii.onrender.com/api`;

const initialState = {
  groups: [],
  loading: true,
  error: null,
  group: {},
};

const groupReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        groups: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_GROUP_SUCCESS":
      return {
        ...state,
        group: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [state, dispatch] = useReducer(groupReducer, initialState);

  const createGroup = async (groupData) => {
    try {
      const response = await axios.post(`${domain}/group`, groupData);
      fetchData();
    } catch (error) {
      console.error("Error creating group:", error);
    }
  };

  const getGroupByID = async (groupId) => {
    try {
      const response = await axios.get(`${domain}/group/${groupId}`);
      dispatch({ type: "GET_GROUP_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
      console.error("Error get Group By ID:", error);
    }
  };

  const updateGroup = async (groupId, updateData) => {
    try {
      const response = await axios.put(
        `${domain}/group/${groupId}`,
        updateData
      );
      fetchData();
    } catch (error) {
      console.error("Error updating group:", error);
    }
  };

  const deleteGroup = async (groupId) => {
    try {
      const response = await axios.delete(`${domain}/group/${groupId}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting group:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${domain}/group`);
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GroupContext.Provider
      value={{ ...state, createGroup, updateGroup, deleteGroup, getGroupByID }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroupContext = () => {
  return useContext(GroupContext);
};
