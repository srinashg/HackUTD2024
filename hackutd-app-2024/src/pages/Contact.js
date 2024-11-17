function Contact(){
    const contactInfo = [
       {name: "Faaiz Shaphy", email: "faaiz.shaphy@gmail.com", linkedIN: "https://www.linkedin.com/in/faaiz-shaphy/"}, 
       {name: "Srinesh Ganesh", email: "emailtosrinesh@gmail.com", linkedIN: "https://www.linkedin.com/in/srineshg/"}, 
       {name: "Nicholas Remack", email: "nichrem@gmail.com", linkedIN: "https://www.linkedin.com/in/nichrem/"}, 
       {name: "Cristian Leon", email: "cris.leon.meza@gmail.com", linkedIN: "https://www.linkedin.com/in/cfleon/"}, 
    ];

    return(
        <>
            <h1>Contact</h1>
            {contactInfo.map((contacts) => (
                <div>
                    <h3>{contacts.name}</h3>
                    <p>{contacts.email}</p>
                    <p>{contacts.linkedIN}</p>
                </div>
            ))};
        </>
        

    );
}

export default Contact;