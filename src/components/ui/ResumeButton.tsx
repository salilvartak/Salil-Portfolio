import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const ResumeButton = () => {
  const handleOpenPDF = () => {
    window.open("/assets/Resume.pdf", "_blank");
  };

  return (
    <Button
      onClick={handleOpenPDF}
      className="flex items-center gap-2 bg-gray-800/50 rounded-md border border-gray-700 hover:bg-gray-800/50 px-4 py-2 transition-all duration-300 hover:scale-105"
    >
      <FileText className="text-white w-5 h-5" />
      <span className="text-white text-base font-semibold ">
        Resume
      </span>
    </Button>
  );
};

export default ResumeButton;
