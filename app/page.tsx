import { Container,  Title, } from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
   <>
   <Container className="mt-10">
    <Title text="Все пиццы" size="lg" className="font-bold"/>  
   </Container>
   <TopBar/>
   
   <Container className='flex items-center justify-between py-8 w-lg'>
    {/* Левая часть */}
    <div className='flex items-center gap-4 w-24'>
      
    
    </div>
    {/* правая часть */}
    <div className='flex items-center gap-4 w-24'>
        
    </div>
</Container>
  </>

  );
}
