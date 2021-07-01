import React from 'react'
import fire from "../../fire"

const handleLogout = () => {
    fire.auth().signOut();
  }
export default function Home() {

    return (
        <div>
            Home page

            <button onClick={handleLogout}>logout</button>
        </div>
    )
}
