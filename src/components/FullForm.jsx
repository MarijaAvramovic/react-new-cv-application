import { useState } from "react";

export function FullForm() {
    

    const handleForm = (e) => {
        e.preventDefault();
        
    }
    

    return(
        <div>
             <h2>CV Builder</h2>
            <form onSubmit={handleForm}>
                <label htmlFor="name">Name</label>
                <input type="text"
                    //  value={name}
                    //  onChange={(e) => setName(e.target.value)}
                />
            </form>
        </div>
    );

}