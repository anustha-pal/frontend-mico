import React, { useEffect, useState } from "react";

function App() {
  const [service1, setService1] = useState("");
  const [service2, setService2] = useState("");

  useEffect(() => {
    // Call Node.js service (Microservice1)
    fetch("https://microservice1-aagkescycea6guej.canadacentral-01.azurewebsites.net/api/hello")
      .then(res => res.json())
      .then(data => setService1(data.message))
      .catch(() => setService1("Error connecting to Microservice1"));

    // Call Flask service (Microservice2)
    fetch("https://microservice2-chavemfpcxeecwc9.canadacentral-01.azurewebsites.net/api/hello")
      .then(res => res.text()) // Flask currently returns plain text
      .then(data => setService2(data))
      .catch(() => setService2("Error connecting to Microservice2"));
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Frontend App</h1>
      <p><b>Microservice1 says:</b> {service1}</p>
      <p><b>Microservice2 says:</b> {service2}</p>
    </div>
  );
}

export default App;

