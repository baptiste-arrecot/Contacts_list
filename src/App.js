import './App.css';
import Search from './components/Search';
import LoadingSymbol from './components/LoadingSymbol'
import ContactsList from './components/ContactsList';
import { useState, useEffect } from 'react';


function App() {
  const [query, setQuery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [secondPage, setSecondPage] = useState(false);
  // const [favorites, setFavorites] = useState([]);
  
  
  // const context = {
  //   favorites,
  //   setFavorites
  // }
  // const favoritesContext = createContext(context);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1&delay=1").then((response) => response.json()).then((json) => {
      setQuery([...query, json.data]);
      setLoading(false);
    })
  }, []);
  const moreContacts = () => {
    fetch("https://reqres.in/api/users?page=2&delay=1").then((response) => response.json()).then((json) => {
      setQuery([...query, json.data]);
      setSecondPage(true)
    })
  };

  return query && (
    <div className="App">
      <Search/>
      <ul>
              {loading ? <LoadingSymbol/> : 
                <ContactsList query={query}/>
              }
      </ul>
      <ul>
       <div>Favorites</div>
           {/* {loading ? <LoadingSymbol/> : 
           <FavoritesList query={favorites}/>
           } */}
      </ul>
      {secondPage ? null : <button onClick={moreContacts}>Add more contacts</button>}
    </div>
  );
}

export default App;
