
import { Card } from "@/components/ui/card";

const ScrewInfo = () => {
  const totalScrews = 19;
  const completedScrews = 19;

  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      <Card className="p-4 flex flex-col items-center justify-center border-2 rounded-2xl">
        <h3 className="text-lg font-bold mb-2 text-center">SCREW COUNT</h3>
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[12px] border-nokia-blue"></div>
          <p className="text-xl font-bold">{completedScrews}/{totalScrews}</p>
        </div>
      </Card>
      <Card className="p-4 border-2 rounded-2xl bg-nokia-blue/20">
        <div className="mb-2">
          <h3 className="text-lg font-bold">SCREW ID:</h3>
          <div className="bg-white rounded-lg p-1 mt-1">
            <p className="text-2xl font-bold text-center">1</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-center bg-nokia-blue/40 p-2 rounded-lg">
            <h3 className="text-sm font-bold">TORQUE</h3>
            <p className="text-xl font-bold">2.3</p>
          </div>
          <div className="text-center bg-nokia-blue/40 p-2 rounded-lg">
            <h3 className="text-sm font-bold">ANGLE</h3>
            <p className="text-xl font-bold">3912</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ScrewInfo;
