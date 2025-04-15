
import { Button } from "@/components/ui/button";

const ControlPanel = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col items-center space-y-6">
        <Button className="w-40 h-14 text-xl font-bold bg-green-500 hover:bg-green-600 rounded-full">
          START
        </Button>
        <div className="bg-nokia-blue/20 p-4 rounded-lg w-full">
          <div className="text-xl font-bold text-center mb-4">SCREW DRIVER</div>
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-6">
        <Button className="w-40 h-14 text-xl font-bold bg-red-500 hover:bg-red-600 rounded-full">
          STOP
        </Button>
        <div className="bg-gray-300 p-4 rounded-lg w-full">
          <div className="text-xl font-bold text-center mb-4">PLCM STATUS :</div>
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
