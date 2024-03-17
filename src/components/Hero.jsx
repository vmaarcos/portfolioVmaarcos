import Link from "next/link";
import { Button } from "./ui/button";
import { Dowload, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RitodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-12 h-[84vh] xl:pt-28 ">
      <div className="container mx-auto ">
        <div className="flex justify-between gap-x-8">
          {/* texto */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              desenvolver Full Stack 
            </div>

            <h1 className="h1 mb-4">Olá, meu nome é Marcos Vincios</h1>
            <p className="subtitle max-w-[480px] mx-auto xl:mx-0">
              {" "}
              Sou um desenvolvedor Full Stack, Onde sempre busco pela
              aprendizagem contínua e pela busca por desafios.{" "}
            </p>

            {/* butao */}
            <div className="flex flex-col gap-y-3 md:row gap-x-3 mx-auto xl:mx-0 mb12">
              <Link href="/contato ">
                <Button className="gap-x-2">
                  entre em contato <Send size={18} />
                </Button>
              </Link>
              <div>
              <a href="./patch/Modelo_curriculo Marcos Vinicios OFC (1).pdf" download="curriculo-cv.pdf">
                <Button variant="secondary" className="gap-x-2 ">
                  dowload CV <Send size={18} />
                </Button>
                </a>
              </div>
            </div>
          </div>

          {/* imagem */}
          <div className="hidden xl:flex relative ">
            <div className="relative float ">
              <img
                className="w-[400px] h-[600px] "
                src="/Shape.png"
                alt="Background Shape"
              />
              <DevImg
                containerStyles="w-[350px] h-[469px] absolute top-0 left-0 "
                imgSrc="/minhaft.png"
              />
           
            <div className="absolute bottom-0 right-0">
              <img
                className="w-[400px] h-[274px]"
                src="/Shape2.png"
                alt="Second Shape"
              />
               </div>
            </div>
          </div>
        </div>

        {/* sociais */}
        <Socials
          containerStyles="flex justify-center gap-x-6 mt-3 mx-auto xl:mx-0 "
          iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
        />

        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
