import React from "react";
import Navbar from "./Navbar";

const GeneralError = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>
          An unexpected error occured. If the error persists please contact us
          at{" "}
          <a href="mailto:preduscacristian@gmail.com">
            preduscacristian@gmail.com
          </a>{" "}
        </h1>
      </main>
    </>
  );
};

export default GeneralError;
