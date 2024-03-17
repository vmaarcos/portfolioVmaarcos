import {GanttChartSquare, Blocks, Gem} from 'lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
const ServicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Full Stack',
    description: 'Atuei como Full Stack, Tanto no Front com Tailwind CSS e testes de api, quando no Back-End com Java SpringBoot, NodeJS, ORM Prisma e SQL'
  },
]

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          Meus Servicos
        </h2>
      </div>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {ServicesData.map((item, index)=> (
            <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
              <CardHeader className=" text-primary absolute -top-[60px]">
                <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>{item.icon}</div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-4">{item.title}<h4>Parttida</h4></CardTitle>
                <CardDescription className="text-lg">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services