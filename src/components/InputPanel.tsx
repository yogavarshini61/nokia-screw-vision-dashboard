
import { Card } from "@/components/ui/card";

const InputPanel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {[
        { title: "PALETTE ID", value: "PAL-2025-04" },
        { title: "CHASSIS ID", value: "CHS-NK-102" },
        { title: "RESOURCE", value: "MAC-LINE02" },
        { title: "TYPE", value: "DEPRAG-AS712" }
      ].map(({ title, value }) => (
        <Card key={title} className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 border-nokia-blue/20">
          <h3 className="text-sm font-semibold text-nokia-grey mb-2">{title}</h3>
          <p className="text-lg font-bold text-nokia-blue">{value}</p>
        </Card>
      ))}
    </div>
  );
};

export default InputPanel;
