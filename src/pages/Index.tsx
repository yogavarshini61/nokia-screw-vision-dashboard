
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChartBar, FileText, Activity } from "lucide-react";
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
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="col-span-2">
            <InputPanel />
          </div>
          <div className="col-span-1">
            <ScrewInfo />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <DataTable />
            <div className="grid grid-cols-3 gap-4">
              <Link to="/angle-pattern">
                <Button className="w-full h-12">
                  <Activity className="mr-2" />
                  Angle Pattern
                </Button>
              </Link>
              <Link to="/torque-pattern">
                <Button className="w-full h-12">
                  <ChartBar className="mr-2" />
                  Torque Pattern
                </Button>
              </Link>
              <Link to="/report">
                <Button className="w-full h-12">
                  <FileText className="mr-2" />
                  Report
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <ChassisView />
            <ControlPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
