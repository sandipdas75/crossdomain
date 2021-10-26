import { useState,useEffect } from 'react';
import Checkboxes from './components/Checkboxes';
import { data,data1, listCheckboxesRating } from './components/data';
let PERMITTED_DOMAIN = "http://192.168.1.2/";



const App = () => {

  useEffect(() => {
    window.addEventListener('message', function(event) {
      if (event.origin === PERMITTED_DOMAIN) {
          //var msg = JSON.parse(event.data);
          // var msgKey = Object.keys(msg)[0];
  
          console.log("eventeventevent",event)
          if (event.data) {
            console.log("eventeventeventddd",event)
              document.cookie = "auth_token=" + event.data;
              localStorage.setItem("localstorage", event.data);
          } else {
              localStorage.removeItem("localstorage");
          }
      }
  });

}, []);

  console.log('data1',data1)
  console.log("localstorage",JSON.stringify(localStorage.getItem('localstorage')))
  const [movies, setMovies] = useState(data);
  const [selected, setSelected] = useState({
    rating: [],
    genre: []
  });

  /**
   * This function will perform the filtration process based on the key value.
   *
   * @param {number[]} checkboxState - It will take the final state of checkboxes
   * @param {string} key - It will help us to determine the type of filtration
   */
  const handleFilters = (checkboxState, key) => {
    debugger
    const logic = 'AND';
    const newFilters = { ...selected };
    newFilters[key] = checkboxState;

    const hasRatings = newFilters.rating.length > 0;
    const hasGenres = newFilters.genre.length > 0;
    const hasFilters = hasRatings || hasGenres;
    const filterRating = (moduleType) =>
      newFilters.rating.includes(0) ||
      newFilters.rating.includes(moduleType.ActivityType);
    const filterGenre = (moduleType) =>
      newFilters.genre.includes('') || newFilters.genre.includes(moduleType.ActivityType);

    const filteredMovies = data.filter(
      logic === 'OR'
        ? (m) => !hasFilters || filterRating(m) || filterGenre(m) // OR
        : (m) =>
            !hasFilters ||
            ((!hasRatings || filterRating(m)) && (!hasGenres || filterGenre(m))) // AND
    );
    setMovies(filteredMovies);
    setSelected(newFilters);
  };

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.ActivityId}>
          <div>Description: {movie.Description}</div>
          <div>Class :{movie.ActivityClassification}</div>
          <div>Hours: {movie.Hours}</div>
          <hr />
        </div>
      ))}

      <div className="row">
        <div className="col">
          <h1>Filter by Rating</h1>
          <Checkboxes
            list={listCheckboxesRating}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, 'rating')
            }
          />
        </div>

        <div className="col">
          {/* <h1>Filter by Genre</h1>
          <Checkboxes
            list={listCheckboxesGenre}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, 'genre')
            }
          /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
