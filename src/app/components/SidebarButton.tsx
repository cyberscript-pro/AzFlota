
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SidebarButtonProps = {
  onClick: () => void;
  icon: React.ReactNode;
  tooltipText: string;
  className?: string;
};

export default function SidebarButton({
  onClick,
  icon,
  tooltipText,
  className,
}: SidebarButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className={`p-2 gap-1 ${className}`}
            aria-label={tooltipText}
          >
            {icon}
            {tooltipText}
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="center">
          <p className="text-sm text-white">{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
