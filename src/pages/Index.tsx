
import Header from "@/components/Header";
import InputPanel from "@/components/InputPanel";
import ScrewInfo from "@/components/ScrewInfo";
import DataTable from "@/components/DataTable";
import ChassisView from "@/components/ChassisView";
import ControlPanel from "@/components/ControlPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-roboto">
      <Header />
      <div className="container mx-auto py-4">
        <InputPanel />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <ScrewInfo />
          <ChassisView />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <DataTable />
          <div className="space-y-4">
            <ControlPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
