import React from "react";
import IntroPanel from "./components/IntroPanel";
import ProjectCards from "./components/ProjectCards";
import Data from "./Data";
import ContactInfo from "./components/ContactInfo";

function App() {

    return (
    <>
        <IntroPanel />
        <ContactInfo/>
        <ProjectCards projects={Data}/>
    </>
  );
}

export default App;
