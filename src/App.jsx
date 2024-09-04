import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import Watchlist from "./Components/Watchlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

function App() {

  let [watchlist, setWatchlist] = useState([])

  let handleAddtowatchlist = (movieObj) =>
  {
      let newwatchlist = [...watchlist, movieObj]
      setWatchlist(newwatchlist)
      console.log(watchlist)
  } 

  useEffect(() => {
    console.log(watchlist);
  }, [watchlist]);


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner /> 
                  <Movies handleAddtowatchlist={handleAddtowatchlist}/>
                </>
              }
            />
            <Route path="/Watchlist" element={<Watchlist />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
