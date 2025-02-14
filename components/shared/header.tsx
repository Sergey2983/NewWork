import { cn } from '@/lib/utils';
import * as React from 'react';
import { Container } from '@/components/shared';
import Image from 'next/image'
import { Button } from '../ui';
import { ShoppingCart, User } from 'lucide-react';

interface Props {
className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
return (
<header className={cn('border border-b', className)}>
<Container className='flex items-center justify-between py-8'>
    {/* Левая часть */}
    <div className='flex items-center gap-4'>
        <Image src="/logo.png" alt="лого" width={35}  height={35}/>
        <div>
            <h1 className='font-black text-2xl uppercase'>next pizza</h1>
            <p>вкусней уже некуда</p>
        </div>
    </div>
    {/* правая часть */}
    <div className='flex items-center gap-4'>
        <Button variant="outline"><User size={16} />профиль</Button>
        <Button className='gap-3' variant="default">520 ₽<ShoppingCart size={16}/> 3 </Button>
    </div>
</Container>
</header>
);
}
