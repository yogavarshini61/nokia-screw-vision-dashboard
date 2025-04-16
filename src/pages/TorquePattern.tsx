
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const TorquePattern = () => {
  const data = [
    { id: 1, value: 2.4 },
    { id: 2, value: 2.6 },
    { id: 3, value: 2.2 },
    { id: 4, value: 2.5 },
    { id: 5, value: 2.3 },
    { id: 6, value: 2.9 },
    { id: 7, value: 2.5 },
  ];

  return (
    <div className="p-6">
      <div className="mb-4">
        <Link to="/">
          <Button variant="outline">
            <ChevronLeft className="mr-2" />
            Back to Dashboard
          </Button>
        </Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Torque Pattern Analysis</h2>
        <div className="w-full h-[400px]">
          <LineChart width={800} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" label={{ value: 'Screw ID', position: 'bottom' }} />
            <YAxis label={{ value: 'Torque', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#00A1DE" strokeWidth={2} />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default TorquePattern;
