import React from 'react' 
import {Card,Button} from 'react-bootstrap'
import PropTypes from 'prop-types'; 


export const Profile = ({myprofile,children,handlname}) => {
    
    return (
        <div>
    {
      myprofile.map((el,index)=>
      <Card style={{ width: '18rem' }} key = {index}>
      <Card.Img variant="top" src={children} />
      <Card.Body>
        <Card.Title>{el.fullname}</Card.Title>
        <Card.Text>
          {el.bio}
        </Card.Text>

        <Card.Text>
        {el.profession}

          </Card.Text>
        <Button variant="primary" onClick={()=>handlname(el.fullname)}>Go somewhere</Button>
      </Card.Body>
    </Card>) 
    }        
        </div>
    )
}
Profile.propTypes = {
 
    myprofile: PropTypes.array,
    handlname: PropTypes.func,
}