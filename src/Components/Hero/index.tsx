import "./Hero.styles.css"



export const Hero = ({title, text}: any) => {
    
    return (
        <section className="heroStyles">
            <h1>{title}</h1>
            <p>{text}</p>
        </section>
    );
}