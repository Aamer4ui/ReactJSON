import React from "react";
import { Card , Button} from "react-bootstrap";

const FetchingDataChild = ({ employeeInfo }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={employeeInfo.image} />
        <Card.Body>
          <Card.Title>{employeeInfo.title}</Card.Title>
          <Card.Text>
            {employeeInfo.name} Age:{employeeInfo.age}
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
