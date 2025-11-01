import React, { useState, useEffect } from "react";
import TankCard from ".../components/TankCard";
import TankChart from ".../components/TankChart";
import ControlPanel from ".../components/ControlPanel";

interface DataPoint {
  suhu: number;
  level: number;
  time: string;
}

export default function Dashboard() {
  const [data, setData] = useState<DataPoint[]>([]);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (running) {
      interval = setInterval(() => {
        const newData: DataPoint = {
          suhu: Math.floor(Math.random() * 70),
          level: Math.floor(Math.random() * 100),
          time: new Date().toLocaleTimeString(),
        };
        setData(prev => [...prev.slice(-19), newData]);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const resetData = () => setData([]);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <TankCard suhu={data[data.length - 1]?.suhu} level={data[data.length - 1]?.level} />
      <TankChart data={data} />
      <ControlPanel running={running} setRunning={setRunning} resetData={resetData} />
    </div>
  );
}
