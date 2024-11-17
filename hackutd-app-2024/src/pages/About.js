import Locations from "./Locations";
function About(){
    return(
        <>
        <h1>SustainaBRE</h1>
        <h3>Our Purpose: Sustainability Commitment</h3>
        <p>We help different businesses operate in the most sustainable manner by providing recommendations
to save energy in different buildings through IoT devices.</p>
        <p>Check out our different buildings below for more info.</p>

        
        <h3>Locations</h3>
        {Locations.map((location) => (
            <div >
                <h4>{location.name}</h4>
                <p>{location.address}</p>
            </div>    
        ))};
        
        </>
    );
}

export default About;