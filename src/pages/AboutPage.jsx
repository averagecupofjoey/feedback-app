import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return <Card>
  <div className="about">About this project</div>
  <p>This is a React app to leave feedback</p>
  <p>Version: 1.0.0</p>
  <p>
    <Link to="/">Back To Home</Link>
  </p>
  </Card>
}

export default AboutPage;
