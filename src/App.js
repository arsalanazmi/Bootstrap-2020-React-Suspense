import React, { Suspense } from "react";
import "./App.css";
import ArsalanRepo from "./component/arsalanRepo";
import InamRepo from "./component/inamRepo";
import createResource from "./resource";
import { Spinner } from "react-bootstrap";

const resource = createResource();

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>
        Fetch API Calls With React Suspense
      </h1>
      <div className="app container">
        <div className="arsalanRepo">
          <h2>Arsalan GITHUB Repositories:</h2>
          <Suspense
            fallback={
              <>
                <h3>Loading Arsalan Repositories...</h3>
                <Spinner animation="border" variant="primary" size="sm" />
              </>
            }
          >
            <ArsalanRepo resource={resource} />
          </Suspense>
        </div>

        <div className="inamRepo">
          <h2>Inam GITHUB Repositories:</h2>
          <Suspense
            fallback={
              <>
                <h3>Loading Inam Repositories...</h3>
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="info" size="sm" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="info" size="sm" />
                <Spinner animation="grow" variant="info" />
              </>
            }
          >
            <InamRepo resource={resource} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;