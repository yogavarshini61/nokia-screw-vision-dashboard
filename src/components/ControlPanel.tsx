
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlayCircle, StopCircle } from "lucide-react";

const ControlPanel = () => {
  return (
    <Card className="p-6">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col items-center space-y-4">
          <Button className="w-32 h-12 bg-green-500 hover:bg-green-600" >
            <PlayCircle className="mr-2 h-5 w-5" />
            START
          </Button>
          <div className="text-center">
            <div className="text-sm font-semibold mb-2">SCREW DRIVER</div>
            <div className="w-8 h-8 rounded-full bg-green-500 mx-auto"></div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Button className="w-32 h-12 bg-red-500 hover:bg-red-600">
            <StopCircle className="mr-2 h-5 w-5" />
            STOP
          </Button>
          <div className="text-center">
            <div className="text-sm font-semibold mb-2">PLCM STATUS</div>
            <div className="w-8 h-8 rounded-full bg-green-500 mx-auto"></div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ControlPanel;
