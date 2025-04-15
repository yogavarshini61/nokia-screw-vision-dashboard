
import { Card } from "@/components/ui/card";

const ChassisView = () => {
  return (
    <Card className="p-4 h-[300px] flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center text-lg font-bold mb-4">
        Electronic Component View
      </div>
      <div className="text-gray-500 italic">
        Component image will be displayed here
      </div>
    </Card>
  );
};

export default ChassisView;
