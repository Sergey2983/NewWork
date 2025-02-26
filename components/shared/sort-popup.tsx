import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";

interface Props {
    className?: string;
    }
    export const SortPopup: React.FC<Props> = ({ className }) => {
    return (
    <div className={cn('inline-flex items-center gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
       <ArrowUpDown /> <b>Сортировка:</b> <b className="text-primary">Популярное</b>
    </div>
    );
    }