import { Link } from "react-router";

export default function HomePage() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Home Page</h1>
      <h1 className="text-3xl font-bold underline text-center">
        <Link className="text-3xl font-bold underline " to="/details">
          Details
        </Link>
      </h1>
    </>
  );
}
