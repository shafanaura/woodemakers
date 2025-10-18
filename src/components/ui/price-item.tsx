import { cn } from "@/lib/utils";

interface PriceItemProps {
  label: string;
  price: string;
  className?: string;
}

export function PriceItem({ label, price, className }: PriceItemProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-md border bg-background px-4 py-4 shadow-sm hover:shadow transition-shadow cursor-pointer",
        className
      )}
    >
      <span className="text-sm">{label}</span>
      <span className="text-sm font-semibold">{price}</span>
    </div>
  );
}
