import { TankData } from "./types";

export function generateTankData(): TankData {
  return {
    time: new Date().toLocaleTimeString(),
    suhu: Math.floor(Math.random() * 70),  // 0–70°C
    level: Math.floor(Math.random() * 100) // 0–100%
  };
}
