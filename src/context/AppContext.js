import React, {useState} from 'react';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [languageChanged, setLanguageChanged] = useState(null);
  return (
    <AppContext.Provider value={{languageChanged, setLanguageChanged}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
