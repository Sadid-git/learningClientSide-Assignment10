import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const NewsCarts = ({ n: { title, img, details, id, pay } }) => {
  console.log(id);
  return (
    <div className="text-start">
      <Card style={{ width: "95%" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card style={{ padding: "5px" }}>
            {details.length > 110 ? (
              <>{details.slice(0, 110) + "..."} </>
            ) : (
              details
            )}
          </Card>
          <Card.Text>{pay}</Card.Text>

          <Link to={`/category/${id}`}>
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsCarts;
