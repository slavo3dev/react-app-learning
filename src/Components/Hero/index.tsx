import "./Hero.styles.css"
import { useState } from "react";


export const Hero = ({title, text}: any) => {
    const [ score, setScore ] = useState( 0 );

    const handleCount = () => setScore( score + 1 )

    const handleReset = () => setScore( 0 )
    
    return (
        <section className="heroStyles">
            <h1>{title}</h1>
            <p>{ text }</p>
            <p>{ score }</p>
            <button onClick={handleCount}>Count</button>
            <button onClick={handleReset}>Reset</button>
        </section>
    );
}