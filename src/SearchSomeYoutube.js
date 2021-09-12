import React from 'react'
import "./assets/css/search.css";
import ReactPlayer from 'react-player'
import TinderCard from 'react-tinder-card'
import { Container } from 'reactstrap';

const swiped = (direction, nameToDelete) =>{
  console.log("removing" + nameToDelete);
  /*setLastDirection(direction)*/
}       
const outOfFrame = (name) =>{
  console.log(name + "left the screen");
}

function SearchSomeYoutbe() {
    const [query, setQuery] = React.useState('');
    const [list, setList] = React.useState(null);
    const search = (e) => {
      e.preventDefault();
      searchYouTube(query).then(setList);
    };

    return (
      <Container className="themed-container" fluid={true}>
        <main>
      <div class="searchText"><p>Find your favourite Techno Music on YouTube</p>
      <div className="SearchSomeYoutbe">
        <form onSubmit={search}>
          <input placeholder="Techno" autoFocus value={query} onChange={e => setQuery(e.target.value)} />
          <button>Search on YouTube</button>
        </form>
        {list &&
          (list.length === 0
            ? <p>No results</p>
            : (
              <div className="items">
                {list.map(item => (
                
                  <li className="item" key={item.id}> <h1>{console.log(item.url)}</h1>
                      <div class="someRandomClass"> 
                       <TinderCard
                className="swipe_line"
                key={item.id}
                preventSwipe={["up","down"]}
                onSwipe={(dir) => swiped(dir, item.id)}
                onCardLeftScreen={()=>outOfFrame(item.id)}       
                >                      
                      <div className='player-wrapper'> 
        <ReactPlayer
          className='player1'
          url={item.url}
          width='320px'
          height='160px'
          />
      </div>       
            </TinderCard>              
                    </div> 
                  </li>
                ))}
              </div>
            )
          )
        }
      </div></div>
      </main>
      </Container>
    );
  }
  async function searchYouTube(q) {
    q = encodeURIComponent(q);
    const response = await fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
        "x-rapidapi-key": "f42681fcf3msh3cce7cfc73b7ae8p1acfb9jsn31694aef9f29"
      }
    });
    const body = await response.json();
    console.log(body);
    return body.items.filter(item => item.type === 'video');
  }

export default SearchSomeYoutbe;