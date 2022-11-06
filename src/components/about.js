import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <h2>About</h2>
      <Link to="/">
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}
export default About;
