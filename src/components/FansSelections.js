import React,{useState,useEffect} from 'react';
import "../assets/css/Fav.css"
import TinderCard from "react-tinder-card"
import ReactPlayer from 'react-player'
import { Container } from 'reactstrap';
import firebase from "../components/api/firebase"
import Add from "../components/add"



function CardsFirebase() {
  const [cards,setCards]=useState([])
  
  useEffect(() => {
   firebase
   .firestore()
   .collection("User_Collections")
    .onSnapshot((snapshot)=>{
      const newCard = snapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()}))  
      setCards(newCard)
    })
  }, [])

  const swiped = (direction, nameToDelete) =>{
    console.log("removing" + nameToDelete);
}       
const outOfFrame = (name) =>{
    console.log(name + "left the screen");
}
  return (
    <Container className="themed-container" fluid={true}>
    <main>
    <div class="cardText"> 
            </div>
            <Add/> 
            <div className="Cards">
            {cards.map((fetch)=>(
                 <TinderCard
                 className="swipe"
                 key={fetch.name}
                 preventSwipe={["up","down"]}
                 onSwipe={(dir) => swiped(dir, fetch.name)}
                 onCardLeftScreen={()=>outOfFrame(fetch.name)}       
                 >
                   <div className='player-wrapper'> 
<ReactPlayer    
            className="player" 
            url={fetch.videoUrl} 
            width='320px'
            height='160px'
             /> 
               </div>   
        </TinderCard>
         ))}            
         </div>
     </main>
</Container>
   
 );
}

export default CardsFirebase;
