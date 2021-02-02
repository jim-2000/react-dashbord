import React from 'react'
import right from '../asset/svg/02.svg'
import './Reallex.style.css'
import Parallax from 'react-rellax'

//>>>>>>>>>>>>>>>>>>>>>>>>>>
function Index() {
    return (
        <>
        <div className="reallex">
     
            <div className="left-side">
            <Parallax speed={7} >
                    <p> Amet sadipscing magna nonumy sanctus aliquyam dolor at tempor voluptua, gubergren dolore at duo et diam sed amet ea, diam. </p>
            </Parallax>
            <Parallax speed={5} >
            <p> Amet sadipscing magna nonumy sanctus aliquyam dolor at tempor voluptua, gubergren dolore at duo et diam sed amet ea, diam. </p>
            </Parallax>
            <Parallax speed={3}>
                    
                    <p> Amet sadipscing magna nonumy sanctus aliquyam dolor at tempor voluptua, gubergren dolore at duo et diam sed amet ea, diam. </p>
                   
                </Parallax>
                <Parallax speed={1} >
                <button className="btn">Home</button>
                </Parallax>
            </div>
            <div className="right-side">
                <Parallax speed={-10} >
                      <img src={right}  />
                </Parallax>
               
            </div>
              
                   
        </div>
        <div className="red-section">
                   <h1> Hope your Enjoy</h1>
               </div>
        </>
    )
}

export default Index
