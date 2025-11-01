import React from "react";
import Dashboard from ".../pages/Dashboard";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Mini SCADA Dairyland 🥛
      </h1>
      <Dashboard />
    </div>
  );

  useEffect(() => {
  const ws = new WebSocket("ws://localhost:8080");
  ws.onmessage = (event) => {
    const newEntry = JSON.parse(event.data);
    setData((prev) => [...prev.slice(-19), newEntry]);
  };
  return () => ws.close();
}, []);

}
