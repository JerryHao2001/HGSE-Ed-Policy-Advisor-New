import { Button } from "@/components/ui/button";
import { LogicFrameworkResponse } from "@/lib/types";
import { Download } from "lucide-react";

interface LogicFrameworkResultProps {
  data: LogicFrameworkResponse | null;
  isLoading: boolean;
}

const LogicFrameworkResult = ({ data, isLoading }: LogicFrameworkResultProps) => {
  const handleDownload = () => {
    // In a real application, this would download the framework
    alert("This would download the framework as a PDF or Word document in a production environment.");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {isLoading ? (
        <div className="animate-pulse space-y-6">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      ) : data ? (
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: data.html }}></div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">No framework data available.</p>
        </div>
      )}

      <div className="mt-6 flex justify-end">
        <Button 
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
          onClick={handleDownload}
          disabled={!data || isLoading}
        >
          <Download className="w-4 h-4" />
          Download Framework
        </Button>
      </div>
    </div>
  );
};

export default LogicFrameworkResult;
