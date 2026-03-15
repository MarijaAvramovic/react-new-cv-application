import { useState } from "react";

export function FullForm() {
       const [name, setName] = useState('');
       const [lastName, setLastName] = useState('');
       const [email, setEmail] = useState('');
       const [experience, setExperience] = useState('');
       const [edit, setEdit] = useState(true);
    


    const handleForm = (e) => {
        e.preventDefault();
        setEdit(false);
    }
    const now = new Date().toLocaleDateString();
    
    if(edit){
return(
        <div>
             <h2>Cover Letter</h2>
            <form onSubmit={handleForm}>
                <label htmlFor="name">Name:</label>
                <input type="text"
                 value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                 <label htmlFor="experience">Email:</label>
                <input type="text" name="experience" id="experience" 
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
        return(
                
            <div>
                 


                   <p>{name}{lastName}</p>
                     <p>{email} </p>
                    <p>{now}</p>
                    <p>
                    Dear  Hiring Team,

                            I am enthusiastic about applying for the job  at your company. With  {experience}I am confident I can add value to your team.

 

                    Thank you for your time — I’d be thrilled to discuss how I can contribute.

                        Best regards,  
                        {name}{lastName}

                    </p>
 
              
              <button onClick={() => setEdit(true)}>Edit</button>
            </div>
             
        );
     

}