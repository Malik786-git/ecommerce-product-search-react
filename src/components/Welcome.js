import React, { useEffect, useState } from 'react'

const Welcome = () => {
 
 const [userName, getUserName] = useState('');

 useEffect(()=>{
    getUserName(localStorage.getItem('userName'))
    console.log(userName)
 })


  return (
    <div>
      <h1 className='display-1'>Welcome {userName}</h1>
    </div>
  )
}

export default Welcome
