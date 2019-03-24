import React from 'react'
import MyGround from './MyGround';

const MygroundContainer = props => {
    console.log(props)
    return (
        <div style={{ width: "30%" }}>
            <MyGround {...props}/>
        </div>
    )
}

export default MygroundContainer;