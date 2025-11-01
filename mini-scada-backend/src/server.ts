import { WebSocketServer } from "ws";
import { generateTankData } from "./simulator";

const PORT = 8080;
const wss = new WebSocketServer({ port: PORT });

console.log(`🌐 Mini SCADA Backend running on ws://localhost:${PORT}`);

wss.on("connection", (ws) => {
  console.log("📡 Client connected.");

  const interval = setInterval(() => {
    const data = generateTankData();
    ws.send(JSON.stringify(data)); // kirim data ke frontend
  }, 2000); // setiap 2 detik

  ws.on("close", () => {
    clearInterval(interval);
    console.log("❌ Client disconnected.");
  });
});
