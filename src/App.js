import React, { useState } from "react";
import Weather from "./components/Weather";

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  return (
    <div className="app">
      <Weather
        location={location}
        setLocation={setLocation}
        data={data}
        setData={setData}
      />
    </div>
  );
};

export default App;
