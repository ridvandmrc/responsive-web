import React from "react";
import {
  ClientSays,
  FoodPackages,
  Header,
  HealthyEating,
} from "@components/common";

function App() {
  console.log("process: ", process.env);
  return (
    <>
      {process.env.REACT_APP_ENV}
      <Header />
      <FoodPackages />
      <HealthyEating />
      <ClientSays />
    </>
  );
}

export default App;
