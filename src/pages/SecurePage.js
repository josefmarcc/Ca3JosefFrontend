import userFacade from "../api/userFacade";
import React, { useState, useEffect } from "react";
import apiFacade from "../api/apiFacade";

export default function SecurePage() {
  const [items, setItems] = useState("");
  const [savedJokes, setSavedJokes] = useState("");

  useEffect(() => {
    userFacade.fetchAllUsers().then((data) => setItems(data.all));
    apiFacade.getSavedJokes().then((jokes) => setSavedJokes(jokes.all));
  }, []);

  return (
    <div className="container-fluid padding">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2 className="mt-5">Secure page</h2>
          <h4>Only available if logged in</h4>
          <div>
            <h3>List of users</h3>
            {items && items.length > 0
              ? items.map((item) => {
                  return <div key={item.userName}>{item.userName}</div>;
                })
              : "Loading..."}
          </div>
          <div>
            <h3>List of saved jokes</h3>
            {savedJokes && savedJokes.length > 0
              ? savedJokes.map((savedJokes) => {
                  return <div key={savedJokes.joke}>{savedJokes.joke}</div>;
                })
              : "Loading..."}
          </div>

          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}
