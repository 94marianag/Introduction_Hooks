import React from "react";

export const GlobalContext = React.createContext({
    username: null,
    password: null,
});

export const GlobalContextProvider = ({children, settings}) => {
    const [generalSettings, setGeneralSettings] = React.useState(settings);
    console.log(generalSettings)
    return (<GlobalContext.Provider value={generalSettings}>{children}</GlobalContext.Provider>);
}