
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
    <div className="min-h-screen bg-gray-50 font-roboto">
      <Header />
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2">
            <InputPanel />
          </div>
          <div className="col-span-1">
            <ScrewInfo />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <DataTable />
            <div className="grid grid-cols-3 gap-4">
              <Link to="/angle-pattern" className="w-full">
                <Button className="w-full h-12 bg-nokia-blue hover:bg-nokia-blue/90">
                  <Activity className="mr-2" />
                  Angle Pattern
                </Button>
              </Link>
              <Link to="/torque-pattern" className="w-full">
                <Button className="w-full h-12 bg-nokia-blue hover:bg-nokia-blue/90">
                  <ChartBar className="mr-2" />
                  Torque Pattern
                </Button>
              </Link>
              <Link to="/report" className="w-full">
                <Button className="w-full h-12 bg-nokia-blue hover:bg-nokia-blue/90">
                  <FileText className="mr-2" />
                  Report
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <ChassisView />
            <ControlPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
