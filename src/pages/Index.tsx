
import Header from "@/components/Header";
import InputPanel from "@/components/InputPanel";
import ScrewInfo from "@/components/ScrewInfo";
import DataTable from "@/components/DataTable";
import ChassisView from "@/components/ChassisView";
import ControlPanel from "@/components/ControlPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-roboto p-4">
      <Header />
      <div className="container mx-auto">
        <InputPanel />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <ScrewInfo />
          <div className="grid grid-cols-1 gap-4">
            <DataTable />
            <ChassisView />
            <ControlPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
