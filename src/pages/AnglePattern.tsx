
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const AnglePattern = () => {
  const data = [
    { id: 1, value: 3782 },
    { id: 2, value: 3939 },
    { id: 3, value: 5422 },
    { id: 4, value: 4567 },
    { id: 5, value: 4867 },
    { id: 6, value: 5789 },
    { id: 7, value: 4656 },
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
        <h2 className="text-2xl font-bold mb-6">Angle Pattern Analysis</h2>
        <div className="w-full h-[400px]">
          <LineChart width={800} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" label={{ value: 'Screw ID', position: 'bottom' }} />
            <YAxis label={{ value: 'Angle', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#124191" strokeWidth={2} />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default AnglePattern;
