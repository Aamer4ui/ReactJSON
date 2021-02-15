import React from "react";
import { Card, Button } from "react-bootstrap";
import "../MainBody/Fetching.css";

const FetchingDataChild = ({ Info }) => {
  return (
    <div className="card-body">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Info.image} />
        <Card.Body>
          <Card.Title>{Info.name}</Card.Title>
          <Card.Text>
            {Info.title} <br /> Age:{Info.age}
            <br />
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">View Detail's</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FetchingDataChild;
