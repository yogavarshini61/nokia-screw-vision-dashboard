
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <Card className="p-4 border-2 border-gray-200">
      <div className="h-[280px]">
        <Table className="border-collapse">
          <TableHeader className="sticky top-0 z-10 bg-white">
            <TableRow>
              <TableHead className="text-center font-bold text-gray-800 bg-gray-100 border-2 border-gray-300 py-3" colSpan={2}>
                Screw No.
              </TableHead>
              <TableHead className="text-center font-bold text-gray-800 bg-gray-100 border-2 border-gray-300 py-3" colSpan={3}>
                Angle
              </TableHead>
              <TableHead className="text-center font-bold text-gray-800 bg-gray-100 border-2 border-gray-300 py-3" colSpan={3}>
                Torque
              </TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="text-center font-semibold text-sm text-gray-700 bg-gray-50 border-2 border-gray-300 py-2">
                No.
              </TableHead>
              <TableHead className="text-center font-semibold text-sm text-gray-700 bg-gray-50 border-2 border-gray-300 py-2">
                Status
              </TableHead>
              <TableHead className="text-center font-semibold text-sm text-gray-700 bg-gray-50 border-2 border-gray-300 py-2">
                Min
              </TableHead>
              <TableHead className="text-center font-semibold text-sm text-gray-700 bg-gray-50 border-2 border-gray-300 py-2">
                Max
              </TableHead>
              <TableHead className="text-center font-semibold text-sm text-gray-700 bg-gray-50 border-2 border-gray-300 py-2">
                Actual
              </TableHead>
              <TableHead className="text-center font-semibold text-sm text-gray-700 bg-gray-50 border-2 border-gray-300 py-2">
                Min
              </TableHead>
              <TableHead className="text-center font-semibold text-sm text-gray-700 bg-gray-50 border-2 border-gray-300 py-2">
                Max
              </TableHead>
              <TableHead className="text-center font-semibold text-sm text-gray-700 bg-gray-50 border-2 border-gray-300 py-2">
                Actual
              </TableHead>
            </TableRow>
          </TableHeader>
          <ScrollArea className="h-[180px]">
            <TableBody>
              {screwDataItems.map((screw, index) => {
                const isAngleValid = isWithinSpec(screw.angle.actual, screw.angle.min, screw.angle.max);
                const isTorqueValid = isWithinSpec(screw.torque.actual, screw.torque.min, screw.torque.max);
                const status = isAngleValid && isTorqueValid ? "OK" : "NG";
                const statusColor = status === "OK" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
                
                return (
                  <TableRow key={screw.id} className="hover:bg-gray-50">
                    <TableCell className="text-center border-2 border-gray-200 py-2">
                      {index + 1}
                    </TableCell>
                    <TableCell className={`text-center border-2 border-gray-200 py-2 font-semibold ${statusColor}`}>
                      {status}
                    </TableCell>
                    <TableCell className="text-center border-2 border-gray-200 py-2">
                      {screw.angle.min}
                    </TableCell>
                    <TableCell className="text-center border-2 border-gray-200 py-2">
                      {screw.angle.max}
                    </TableCell>
                    <TableCell className={`text-center border-2 border-gray-200 py-2 font-semibold ${
                      isAngleValid ? "text-green-600" : "text-red-600"
                    }`}>
                      {screw.angle.actual}
                    </TableCell>
                    <TableCell className="text-center border-2 border-gray-200 py-2">
                      {screw.torque.min}
                    </TableCell>
                    <TableCell className="text-center border-2 border-gray-200 py-2">
                      {screw.torque.max}
                    </TableCell>
                    <TableCell className={`text-center border-2 border-gray-200 py-2 font-semibold ${
                      isTorqueValid ? "text-green-600" : "text-red-600"
                    }`}>
                      {screw.torque.actual}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </ScrollArea>
        </Table>
      </div>
    </Card>
  );
};

export default DataTable;
