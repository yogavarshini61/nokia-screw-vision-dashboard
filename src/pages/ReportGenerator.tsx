
import { Button } from "@/components/ui/button";
import { ChevronLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

const ReportGenerator = () => {
  const handleDownload = () => {
    // This is where you would implement the report generation logic
    console.log("Downloading report...");
  };

  return (
    <div className="p-6">
      <div className="mb-4">
        <Link to="/">
          <Button variant="outline">
            <ChevronLeft className="mr-2" />
            Back to Dashboard
          </Button>
        </Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Report Generator</h2>
        <div className="space-y-4">
          <Button onClick={handleDownload} className="w-full">
            <Download className="mr-2" />
            Generate Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReportGenerator;
