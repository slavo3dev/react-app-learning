import { Hero, Info } from "./Components";
import { heroData } from "./lib";

function App () {
    
    return (
        <>
          <Hero title={ heroData.title } text={heroData.text} />
          <Info />
          <Hero title={ "Please learn React" } text={"lalalalala alalallala alalla "} />
        </>   
  );
}

export default App;
