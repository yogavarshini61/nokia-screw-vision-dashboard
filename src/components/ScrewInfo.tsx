
import { Card } from "@/components/ui/card";

const ScrewInfo = () => {
  const totalScrews = 19;
  const completedScrews = 19;

  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="p-6 flex flex-col items-center justify-center border-2 rounded-2xl">
        <h3 className="text-xl font-bold mb-4 text-center">SCREW COUNT</h3>
        <div className="relative w-40 h-40 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[20px] border-nokia-blue"></div>
          <p className="text-2xl font-bold">{completedScrews}/{totalScrews}</p>
        </div>
      </Card>
      <Card className="p-6 border-2 rounded-2xl bg-nokia-blue/20">
        <div className="mb-6">
          <h3 className="text-xl font-bold">SCREW ID:</h3>
          <div className="bg-white rounded-lg p-2 mt-2">
            <p className="text-3xl font-bold text-center">1</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center bg-nokia-blue/40 p-4 rounded-lg">
            <h3 className="text-xl font-bold">TORQUE</h3>
            <p className="text-3xl font-bold mt-1">2.3</p>
          </div>
          <div className="text-center bg-nokia-blue/40 p-4 rounded-lg">
            <h3 className="text-xl font-bold">ANGLE</h3>
            <p className="text-3xl font-bold mt-1">3912</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ScrewInfo;
