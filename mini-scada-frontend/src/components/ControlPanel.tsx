import React from "react";

interface ControlPanelProps {
  running: boolean;
  setRunning: (val: boolean) => void;
  resetData: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ running, setRunning, resetData }) => (
  <div className="flex gap-4 mt-4 md:col-span-2 justify-center">
    <button
      onClick={() => setRunning(!running)}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {running ? "Stop" : "Start"}
    </button>
    <button
      onClick={resetData}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Reset
    </button>
  </div>
);

export default ControlPanel;
