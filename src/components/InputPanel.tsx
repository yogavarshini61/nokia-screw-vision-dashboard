
import { Card } from "@/components/ui/card";

const InputPanel = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <Card className="p-6 bg-nokia-blue/70 text-white">
        <h3 className="text-xl font-bold text-center">PALETTE ID</h3>
        <p className="text-xl font-bold text-center mt-1">PAL-2025-04</p>
      </Card>
      <Card className="p-6 bg-gray-300 text-black">
        <h3 className="text-xl font-bold text-center">CHASSIS ID</h3>
        <p className="text-xl font-bold text-center mt-1">CHS-NK-102</p>
      </Card>
      <Card className="p-6 bg-gray-300 text-black">
        <h3 className="text-xl font-bold text-center">RESOURCE</h3>
        <p className="text-xl font-bold text-center mt-1">MAC-LINE02</p>
      </Card>
      <Card className="p-6 bg-nokia-blue/70 text-white">
        <h3 className="text-xl font-bold text-center">TYPE</h3>
        <p className="text-xl font-bold text-center mt-1">DEPRAG-AS712</p>
      </Card>
    </div>
  );
};

export default InputPanel;
