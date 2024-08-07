import React,{useState,createContext} from "react";
import "./App.css";
import Portfolio from "./Components/Portfolio/Portfolio";
export let context=createContext();
const App = () => {
  let [ShowToggleMenu, setShowToggleMenu] = useState(true);
  return (
    <div className="app_container">
      <context.Provider value={{ShowToggleMenu,setShowToggleMenu}}>
      <Portfolio />
      </context.Provider>
     
    </div>
  );
};

export default App;
