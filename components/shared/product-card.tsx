import { Link } from "lucide-react";

interface Props {
    id: number;
    name: string;
    price: number;
    imageURL: string;
    className?: string;
}


export const ProductCard: React.FC<Props> = ({ id, name, imageURL, price, className }) => {
    return (
        <div className={className}>
            <Link href={'/product/${id}'}>
            <
            
            
            </Link>
        </div>
    )
}