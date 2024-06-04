import React from "react"
import Card from "react-bootstrap/Card"
import Logo from './Logo.jpg'

function GitHubCard() {
    return (
        <div className="card">
          <Card style={{ width: "18rem"}}>
         <Card.Img variant="top" src={Logo} />
        <Card.Body>
              <Card.Title>My Logo</Card.Title>
              <Card.Text>
              This is my logo.
              </Card.Text>
        </Card.Body>
          </Card>
        </div>
    );
  }
  
  export default GitHubCard