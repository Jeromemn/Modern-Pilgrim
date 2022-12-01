import { QUERY_SINGLE_TRIP } from "../utils/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BsFillPersonLinesFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { Row, Col } from "react-bootstrap";

const Trip = () => {
  const { tripId } = useParams();
  console.log(tripId);

  const { loading, error, data } = useQuery(QUERY_SINGLE_TRIP, {
    variables: { _id: tripId },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const { location, summary, price, rating, comments, user } = data.getTripById;
  console.log(location, summary, price, rating, comments, user);
  return (
    <>
      {data ? (
        <Row
          style={{
            justifyContent: "center",
            display: "flex",
            alignContent: "center",
            backgroundColor: "lightblue",
            minHeight: "100vh",
          }}
        >
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "3rem",
              }}
            >
              <Link to="/" style={{ fontSize: "50px", color: "black" }}>
                <BsFillArrowLeftCircleFill />
              </Link>

              <Link to="/profile" style={{ fontSize: "50px", color: "black" }}>
                <BsFillPersonLinesFill />
              </Link>
            </Col>
          </Row>
          <Row>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Card
                style={{
                  width: "50vw",
                  marginBottom: "5rem",
                }}
                className="row"
              >
                <Card.Img
                  style={{ marginTop: "2rem" }}
                  variant="top"
                  src="http://placekitten.com/200/200"
                  width="200px"
                  height="200px"
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginLeft: "1rem",
                      alignItems: "center",
                    }}
                  >
                    {location}{" "}
                    <Button variant="outline-success">{user._id}</Button>
                  </Card.Title>
                  <br />
                  <Card.Text
                    style={{
                      display: "flex",
                      marginLeft: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Col lg={8}>
                        <cite>{summary}</cite>
                      </Col>
                      <Col style={{ alignItems: "right" }}>
                        <Row>Price: ${price} </Row>
                        <Row>Rating: {rating} / 5</Row>
                      </Col>
                    </Row>
                  </Card.Text>
                  {comments.map((comment) => {
                    return (
                      <>
                        <ul
                          style={{ listStyleType: "none", paddingLeft: "0px" }}
                        >
                          <li key={comment._id}>
                            <Card>
                              <Card.Header>Comments</Card.Header>
                              <Card.Body>
                                <blockquote className="blockquote mb-0">
                                  <p> {comment.commentText}</p>
                                  <footer className="blockquote-footer">
                                    by{" "}
                                    <cite title="Source Title">
                                      {comment.commentUser}
                                    </cite>
                                  </footer>
                                </blockquote>
                              </Card.Body>
                            </Card>
                          </li>
                        </ul>
                      </>
                    );
                  })}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      ) : null}
    </>
  );
};

export default Trip;
