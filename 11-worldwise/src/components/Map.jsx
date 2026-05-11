import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  // this serves for navigation to an URL without using a link or button, using a function instead, without using a NavLink or Link
  const navigate = useNavigate();

  // this search params and stores them in an object
  const [searchParams, setSearchParams] = useSearchParams();

  // to get a parameter from the object we need to use the get method
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
      {/* 
      This sets the URL parameters to an object you need to define, it rerenders the parameters in every component
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 12 });
        }}
      >
        change pos
      </button> */}
    </div>
  );
}

export default Map;
