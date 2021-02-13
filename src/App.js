import './App.css';
import Header from "./components/Header";
import React from "react";
import { useState, useEffect } from "react";
import FetchUser from "./services/rando_user";

function App () {
  // function refreshUser() {
  //   const fetchUser = "Hello World";
  //   return (
  //     console.log(fetchUser)
  //   )
  // }
  // const currentUser = useState(null)

  function RefreshUser() {
    const [randomUserData, setRandomUserData] = useState([]);

    const getRandomUserDataAsyncly = async () => {
      const randomUser = await FetchUser();
      setRandomUserData(randomUser);
      console.log(randomUser)
    };

    useEffect(() => {
      getRandomUserDataAsyncly();
    }, []);
  
    return (
      <div className="App">
        <Header />
        <div>
          {/* <img alt="random user" src={randomUser} /> */}
          <button onClick={getRandomUserDataAsyncly}>{" "}New Random User{" "}</button>
          {/* <button type="submit" onClick={getSearchRandAdvice}>
              Ask Advice
            // </button> */}
          <div>{JSON.stringify(randomUserData)}</div>
        </div>
      </div>
    );
  }
}

export default App;
