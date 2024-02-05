import { Link } from "react-router-dom";

const Pet = (props) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (props.images.length) {
    hero = props.images[0];
  }
  return (
    <Link to={`/details/${props.id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={props.name} />
      </div>
      <div className="info">
        <h1>{props.name}</h1>
        <h2>
          {props.animal} - {props.breed} - {props.location}
        </h2>
      </div>
    </Link>
  );
};
// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h3", {}, props.breed),
//   ]);
// };
export default Pet;
