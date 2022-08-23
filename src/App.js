import { useState,useEffect } from "react";
import CardList from "./component/card-list/card-list.component";
import SearchBox from "./component/search-box/search-box.component";
import "./App.css";

const App = ()=>
{
  const [searchField, setsearchField] = useState('');
  const [monsters, setMonsters]=useState([]);
  const [filteredMonsters, setFilteredMonsters]=useState(monsters);
  
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
          .then((Response) => Response.json())
          .then((users) => setMonsters(users));
  },[])

  useEffect(()=>{
    const newfilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(newfilteredMonsters)
  },[monsters,searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    {
     setsearchField(searchFieldString)
    }
  };
  return (
          <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchBox
              onChangeHandler={onSearchChange}
              placeholder="Search Monsters"
              className="monster-search-box"
            />
             <CardList monsters={filteredMonsters} />
          </div>
        );
}

export default App;
