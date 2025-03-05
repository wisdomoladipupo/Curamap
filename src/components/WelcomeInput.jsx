import React from 'react'
import '../App.css';
const WelcomeInput = () => {
  return (
    <div className='input-container'>
        <form>
            <label htmlFor="email">
                <input type="email" />
            </label>
            <div>
            <button className="waitlist-btn"  href=".">Join Waitlist</button>
            </div>
        </form>
    </div>
  )
}

export default WelcomeInput