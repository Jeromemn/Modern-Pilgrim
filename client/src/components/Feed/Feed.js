import { Link } from "react-router-dom";

// const TripsList

const FeedContainer = ({ trips }) => {
  if (!trips.length) {
    return <h3> No ones ventured there, Be the first? </h3>;
  }
  return (
    <>
      <div>
        <ul>
          {trips &&
            trips.map((trip) => (
              <li key={trip.id}>
                <div>
                  <h3>
                    {" "}
                    {trip.location}
                    <Link to={`/trips/${trip._id}`}> {trip.location}</Link>
                  </h3>
                  <h4> {trip.country} </h4>
                  <p> {trip.price} </p>
                  <p> {trip.username}</p>
                </div>
                <div background={trip.image} src={trip.image}></div>
                {/* set the second ul to display on hover */}
                <ul>
                  <li>{trip.rating}</li>
                  <li>{trip.Summary}</li>
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
