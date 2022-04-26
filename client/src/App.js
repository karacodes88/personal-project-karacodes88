import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Search from "./components/Search";
import Map from "./components/Map";
import ReactMapGl, {Marker, Popup} from "react-map-gl";
import Info from "./components/Info";
import BasicCard from "./components/Info";
// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "./services/profileService";




function App() {
  const [profiles, setProfiles] = useState(null);


  useEffect(() => {
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }

    getProfiles();
  }, [profiles]);

  const renderProfile = (user) => {
    return (
      <p key={user._id}>
        <h3>{user.Name} </h3> 
        <img src={user.Picture} />
         <p> {user.Location}</p>
      </p>
    );
  }




  return(
    <Router>
      <Route
        exact
        path="/"
        render={() => (
            <div>
          <Search/>
          <Info/>
          <BasicCard/>
            <ul>
            {profiles && profiles.length > 0 ? (
             profiles.map((profile) => (<BasicCard sighting={profile} ></BasicCard>))
              ) : (
                <p>No profiles found</p>
              )}
            </ul>
          </div>
        )}
      />
      <Route exact path="/about" render={() => <About />} />
      <Route
        exact
        path="/Map"
        render={() => (
        <Map map = {ReactMapGl}/>




        )}
      />
      {/* <BasketTotal /> */}
    </Router>
  );


}

export default App;




















// function App() {
//   const [profiles, setProfiles] = useState(null);

//   useEffect(() => {
//     // here we need to implement to GET BEES(GET PROFILES IS JUST A EXAMPLE)
//     async function getProfiles() {
//       if (!profiles) {
//         const response = await getAllProfiles();
//         setProfiles(response);
//       }
//     }
    
    
//     getProfiles();
//   }, [profiles]);


//   return (
//     <div>
      
//       <p>
//         {profiles && profiles.length > 0 ? (
//           profiles.map((profile) => (<BasicCard sighting={profile} ></BasicCard>))
//         ) : (
//           <p>kara here</p>
//         )}
//       </p>
//     </div>
//   );
// }

// export default App;
//  return(
//     <Router>
//       <Route
//         exact
//         path="/"
//         render={() => (
//           <div>
//           <ul>
            
//             {profiles && profiles.length > 0 ? (
//               profiles.map((profile) => (<BasicCard sighting={profile} ></BasicCard>))
//             ) : (
//               <p>kara here</p>
//             )}
//           </ul>
//            <Card/>
//         </div>
        
//         )}
//       />
//       <Route exact path="/about" render={() => <About />} />
//       <Route
//         exact
//         path="/Map"
//         render={() => (
//           <Map />

//           // <Basket basket={basket} removeFromBasket={removeFromBasket} />
//         )}
//       />
//       {/* <BasketTotal /> */}
//     </Router>
//   );

