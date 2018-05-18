import React from 'react'

const Profil = ({ id, name, image, action }) => 
      <div className="character">
        {id} - {name}
        <img src={image} alt='' />
        <button onClick={()=> action()}> Go Home</button>
      </div>



export default Profil;