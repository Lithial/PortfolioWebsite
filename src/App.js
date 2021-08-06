import React from "react";
import IntroPanel from "./components/IntroPanel";
import ProjectCards from "./components/ProjectCards";
import Data from "./Data";

function App() {

    return (
    <>
        <IntroPanel />
        <ProjectCards projects={Data}/>
    </>
  );
}

export default App;
