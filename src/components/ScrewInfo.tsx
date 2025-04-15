
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

const ScrewInfo = () => {
  const totalScrews = 19;
  const completedScrews = 19;
  const progress = (completedScrews / totalScrews) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <Card className="p-6 flex flex-col items-center justify-center">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-nokia-grey">SCREW COUNT</h3>
          <p className="text-3xl font-bold text-nokia-blue">{completedScrews}/{totalScrews}</p>
        </div>
        <Progress value={progress} className="w-64 h-3" />
      </Card>
      <Card className="p-6 grid grid-cols-3 gap-4">
        <div className="text-center">
          <h3 className="text-sm font-semibold text-nokia-grey">SCREW ID</h3>
          <p className="text-xl font-bold text-nokia-blue">1</p>
        </div>
        <div className="text-center">
          <h3 className="text-sm font-semibold text-nokia-grey">TORQUE</h3>
          <p className="text-xl font-bold text-nokia-blue">2.3</p>
        </div>
        <div className="text-center">
          <h3 className="text-sm font-semibold text-nokia-grey">ANGLE</h3>
          <p className="text-xl font-bold text-nokia-blue">3912</p>
        </div>
      </Card>
    </div>
  );
};

export default ScrewInfo;
