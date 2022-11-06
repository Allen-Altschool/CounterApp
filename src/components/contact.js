import { Link } from "react-router-dom";
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <Link to="/">
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}
export default Contact;
