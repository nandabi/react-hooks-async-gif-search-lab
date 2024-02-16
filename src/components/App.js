import React from "react";

import NavBar from "./NavBar";

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="container">
      <div className="col-md-3">
        <div className="row">
          <GifListContainer/>

        </div>
       </div>
      </div>
    </div>
  );
}

export default App;
