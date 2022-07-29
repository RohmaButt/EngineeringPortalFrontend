import React from "react";

const UserContext = React.createContext({});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState([]);
  const [userEmail, setUserEmail] = React.useState('');
  const [impersonatedUser, setIUser] = React.useState({});
  const [okrServices, setOkrServices] = React.useState([]);
  const [kpiBulkData, setKpiBulkData] = React.useState([]);
  const [errorText, setErrorText] = React.useState("");

  const [kpiTableData, setKpiTableData] = React.useState([]);
  const [componentRights, setComponentRights] = React.useState([]);
  React.useEffect(() => {
    setComponentRights(
      JSON.parse(sessionStorage.getItem("Imp_componentRights")) ||
        JSON.parse(localStorage.getItem("componentRights"))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionStorage.getItem("Imp_componentRights")]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        errorText, 
        setErrorText,
        setIUser,
        userEmail, 
        okrServices,
        kpiBulkData,
        kpiTableData,
        setUserEmail,
        setOkrServices,
        setKpiBulkData,
        setKpiTableData,
        componentRights,
        impersonatedUser,
        setComponentRights,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
