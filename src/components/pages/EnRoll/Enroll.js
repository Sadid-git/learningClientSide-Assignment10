import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";
import Card from "react-bootstrap/Card";
import toast from "react-hot-toast";

const Enroll = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  {
    toast.success("Wellcome to Our Course");
  }
  return (
    <div>
      <div className="mt-5 text-start mb-5">
        <h1>Name: {user.displayName}</h1>
        <h3>Email: {user.email}</h3>
        <img src={user?.photoURL} alt="user" title="User Profile" />
      </div>
      <Card>
        <Card.Img
          variant="top"
          src={data?.img}
          style={{ width: "100%", height: "500px" }}
        />
        <Card.Body>
          <Card.Title>{data?.title}</Card.Title>
          <Card.Text>{data?.details}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Enroll;
