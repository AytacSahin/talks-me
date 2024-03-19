import React, { createContext, useState, useContext } from 'react';
import conversationsData from './src/data/conversationData';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyProvider = ({ children }) => {
    const [conversations, setConversations] = useState(conversationsData);

    const handleChangeConversations = (updatedConversations) => {
        setConversations(updatedConversations);
    };

    return (
        <MyContext.Provider value={{ conversations, handleChangeConversations }}>
            {children}
        </MyContext.Provider>
    );
};
