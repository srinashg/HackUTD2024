
import PropertyFormat from "./Properties/PropertyFormat";
function Profile(){
    return(
        <div>
            <h1>Profile</h1>
            <div  style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                <h2>{"Faaiz Shaphy"}</h2>
                <p><strong>Email:</strong> faaiz.shaphy@gmail.com</p>
                <p><strong>Phone:</strong> 214-973-4322</p>
            </div>

            <div>
                <PropertyFormat/>
            </div>
                
               
        </div>
        
    );
}

export default Profile;