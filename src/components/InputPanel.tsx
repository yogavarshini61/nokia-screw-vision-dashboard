
import { Card } from "@/components/ui/card";

const InputPanel = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Card className="p-4 bg-white border-2 border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">PALETTE ID</h3>
        <p className="text-2xl font-bold text-nokia-blue">PAL-2025-04</p>
      </Card>
      <Card className="p-4 bg-white border-2 border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">CHASSIS ID</h3>
        <p className="text-2xl font-bold text-nokia-blue">CHS-NK-102</p>
      </Card>
      <Card className="p-4 bg-white border-2 border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">RESOURCE</h3>
        <p className="text-2xl font-bold text-nokia-blue">MAC-LINE02</p>
      </Card>
      <Card className="p-4 bg-white border-2 border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">TYPE</h3>
        <p className="text-2xl font-bold text-nokia-blue">DEPRAG-AS712</p>
      </Card>
    </div>
  );
};

export default InputPanel;
