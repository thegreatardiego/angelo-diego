
import React from 'react';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DownloadButtonProps {
  label: string;
  fileName: string;
  fileUrl: string;
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  label,
  fileName,
  fileUrl,
  className,
}) => {
  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={cn(
        "flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium transition-all duration-300 hover:shadow-lg btn-hover",
        className
      )}
      title={`Download ${fileName}`}
    >
      {label} <Download className="h-4 w-4" />
    </button>
  );
};

export default DownloadButton;
