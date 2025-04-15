
import { Card } from "@/components/ui/card";

const ChassisView = () => {
  return (
    <Card className="p-4">
      <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
        <div className="text-nokia-grey">Chassis Image Placeholder</div>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <span className="text-sm text-nokia-grey">Good</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <span className="text-sm text-nokia-grey">Faulty</span>
        </div>
      </div>
    </Card>
  );
};

export default ChassisView;
