
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";

interface ScrewData {
  id: number;
  angle: { min: number; max: number; actual: number };
  torque: { min: number; max: number; actual: number };
}

const generateMockData = (): ScrewData[] => {
  return Array.from({ length: 19 }, (_, i) => ({
    id: i + 1,
    angle: {
      min: 3900,
      max: 4000,
      actual: Math.random() > 0.1 ? 3912 : 4100,
    },
    torque: {
      min: 2.0,
      max: 2.5,
      actual: Math.random() > 0.1 ? 2.3 : 1.8,
    },
  }));
};

const DataTable = () => {
  const screwData = generateMockData();

  const isWithinSpec = (value: number, min: number, max: number) => {
    return value >= min && value <= max;
  };

  return (
    <Card className="p-4">
      <div className="space-y-4">
        {["Angle", "Torque"].map((section) => (
          <div key={section} className="rounded-lg border">
            <h3 className="p-2 bg-nokia-blue text-white font-semibold">{section}</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Screw ID</TableHead>
                  <TableHead>Min</TableHead>
                  <TableHead>Max</TableHead>
                  <TableHead>Actual</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {screwData.map((screw) => {
                  const data = section.toLowerCase() as keyof typeof screw;
                  const values = screw[data] as any;
                  const isValid = isWithinSpec(values.actual, values.min, values.max);

                  return (
                    <TableRow key={`${section}-${screw.id}`}>
                      <TableCell>{screw.id}</TableCell>
                      <TableCell>{values.min}</TableCell>
                      <TableCell>{values.max}</TableCell>
                      <TableCell className={`font-semibold ${isValid ? 'text-green-600' : 'text-red-600'}`}>
                        {values.actual}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DataTable;
