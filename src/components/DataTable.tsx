
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";

interface ScrewData {
  id: number;
  angle: { min: number; max: number; actual: number };
  torque: { min: number; max: number; actual: number };
}

const screwDataItems: ScrewData[] = [
  { id: 1, angle: { min: 3600, max: 5500, actual: 3782 }, torque: { min: 2.1, max: 2.8, actual: 2.4 } },
  { id: 2, angle: { min: 3600, max: 5500, actual: 3939 }, torque: { min: 2.1, max: 2.8, actual: 2.6 } },
  { id: 3, angle: { min: 3600, max: 5500, actual: 5422 }, torque: { min: 2.1, max: 2.8, actual: 2.2 } },
  { id: 4, angle: { min: 3600, max: 5500, actual: 4567 }, torque: { min: 2.1, max: 2.8, actual: 2.5 } },
  { id: 5, angle: { min: 3600, max: 5500, actual: 4867 }, torque: { min: 2.1, max: 2.8, actual: 2.3 } },
  { id: 6, angle: { min: 3600, max: 5500, actual: 5789 }, torque: { min: 2.1, max: 2.8, actual: 2.9 } },
  { id: 7, angle: { min: 3600, max: 5500, actual: 4656 }, torque: { min: 2.1, max: 2.8, actual: 2.5 } },
  { id: 8, angle: { min: 3600, max: 5500, actual: 5123 }, torque: { min: 2.1, max: 2.8, actual: 2.7 } },
  { id: 9, angle: { min: 3600, max: 5500, actual: 5234 }, torque: { min: 2.1, max: 2.8, actual: 2.2 } },
  { id: 10, angle: { min: 3600, max: 5500, actual: 4789 }, torque: { min: 2.1, max: 2.8, actual: 2.3 } },
  { id: 11, angle: { min: 3600, max: 5500, actual: 5900 }, torque: { min: 2.1, max: 2.8, actual: 3.0 } },
  { id: 12, angle: { min: 3600, max: 5500, actual: 3782 }, torque: { min: 2.1, max: 2.8, actual: 2.5 } },
  { id: 13, angle: { min: 3600, max: 5500, actual: 4125 }, torque: { min: 2.1, max: 2.8, actual: 2.3 } },
  { id: 14, angle: { min: 3600, max: 5500, actual: 5959 }, torque: { min: 2.1, max: 2.8, actual: 2.9 } },
  { id: 15, angle: { min: 3600, max: 5500, actual: 3999 }, torque: { min: 2.1, max: 2.8, actual: 2.4 } },
  { id: 16, angle: { min: 3600, max: 5500, actual: 4177 }, torque: { min: 2.1, max: 2.8, actual: 2.4 } },
  { id: 17, angle: { min: 3600, max: 5500, actual: 4589 }, torque: { min: 2.1, max: 2.8, actual: 2.5 } },
  { id: 18, angle: { min: 3600, max: 5500, actual: 3890 }, torque: { min: 2.1, max: 2.8, actual: 2.7 } },
  { id: 19, angle: { min: 3600, max: 5500, actual: 3912 }, torque: { min: 2.1, max: 2.8, actual: 2.3 } },
];

const DataTable = () => {
  const isWithinSpec = (value: number, min: number, max: number) => {
    return value >= min && value <= max;
  };

  return (
    <Card className="p-2">
      <Table className="border-collapse w-full text-sm">
        <TableHeader>
          <TableRow className="h-8">
            <TableHead colSpan={3} className="text-center bg-gray-100 border border-gray-300 p-1">
              Angle
            </TableHead>
            <TableHead colSpan={3} className="text-center bg-gray-100 border border-gray-300 p-1">
              Torque
            </TableHead>
          </TableRow>
          <TableRow className="h-6">
            <TableHead className="text-center border border-gray-300 p-1 text-xs">Min</TableHead>
            <TableHead className="text-center border border-gray-300 p-1 text-xs">Max</TableHead>
            <TableHead className="text-center border border-gray-300 p-1 text-xs">Actual</TableHead>
            <TableHead className="text-center border border-gray-300 p-1 text-xs">Min</TableHead>
            <TableHead className="text-center border border-gray-300 p-1 text-xs">Max</TableHead>
            <TableHead className="text-center border border-gray-300 p-1 text-xs">Actual</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {screwDataItems.map((screw) => {
            const isAngleValid = isWithinSpec(screw.angle.actual, screw.angle.min, screw.angle.max);
            const isTorqueValid = isWithinSpec(screw.torque.actual, screw.torque.min, screw.torque.max);
            
            return (
              <TableRow key={screw.id} className="h-6">
                <TableCell className={`text-center py-0.5 px-1 border border-gray-300 text-xs ${isAngleValid ? 'bg-green-600 text-white' : ''}`}>
                  {screw.angle.min}
                </TableCell>
                <TableCell className={`text-center py-0.5 px-1 border border-gray-300 text-xs ${isAngleValid ? 'bg-green-600 text-white' : ''}`}>
                  {screw.angle.max}
                </TableCell>
                <TableCell 
                  className={`text-center py-0.5 px-1 border border-gray-300 text-xs font-bold ${
                    isAngleValid ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                  }`}
                >
                  {screw.angle.actual}
                </TableCell>
                <TableCell className={`text-center py-0.5 px-1 border border-gray-300 text-xs ${isTorqueValid ? 'bg-green-600 text-white' : ''}`}>
                  {screw.torque.min}
                </TableCell>
                <TableCell className={`text-center py-0.5 px-1 border border-gray-300 text-xs ${isTorqueValid ? 'bg-green-600 text-white' : ''}`}>
                  {screw.torque.max}
                </TableCell>
                <TableCell 
                  className={`text-center py-0.5 px-1 border border-gray-300 text-xs font-bold ${
                    isTorqueValid ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                  }`}
                >
                  {screw.torque.actual}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
};

export default DataTable;
