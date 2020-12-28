import React from 'react';



function HomeText() {
    
    return (
        
        <div className="text-area">

            <h1>VLog</h1>
            <h2>Follow my journey as I document my learing and challenges in web development!</h2>
            <br/>
            <ul className="vlog-list">
            <li>
                    <a href="https://youtu.be/1W97A6VMzA0">
                        Rational Programming Ep 5  </a> <br/>
                    What is an SDK?
                </li>
            
             
            <li>
                    <a href="https://youtu.be/nU-k9SdVV_g">Rational Programming Ep 4  </a> <br/>
                    What is SASS?
                </li>
            <li>
                    <a href="https://youtu.be/nU-k9SdVV_g">Rational Programming Ep 3  </a> <br/>
                    In todays new episode I discuss how I find the answers to the magic of my code. Sometimes we need to look at the obvious before we go looking for that which is hidden from us.
                </li>
            <li>
                    <a href="https://youtu.be/Sa4LPRQ_RsM">Rational Programming Ep 2:  </a> <br/>
                    On todays episode we explore the planning process involved in making my new app!
                </li>
                <li>
                    <a href="https://youtu.be/m4A2emg-6Y4">Rational Programming: Learning through creating idea's to build in React:  </a> <br/>
                      This is my first ever programming show, and my introduction to learning React.js. I'm happy to share with you in my journey in learning how to use React by "doing", while still being creative!
                </li>
            </ul>
        </div>
               

    );
}

export default HomeText