/* eslint-disable @next/next/no-img-element */
import Image from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  user2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  User2,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Marcos Vinicios Alves Dos Santos Pereira",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+55 11 94850-2101",
  },
  {
    icon: <MailIcon size={20} />,
    text: "eumarcosalvess@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "15/01/2006",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Cursando Análise e Desenvolvimento de Sistemas",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Ferraz de Vasconcelos, São Paulo",
  },
];
const qualificationData = [
  {
    title: "educação",
    data: [
      {
        universidade: "Universidade Braz Cubas",
        qualification: "superior",
        anos: "2024-2026",
      },
      {
        universidade: "Proa",
        qualification:
          "Curso web java, com tcc e certificado reconhecido pelo senac",
        anos: "2023-2023",
      },
    ],
  },
  {
    title: "experiência",
    data: [
      {
        company: "Parttida",
        qualification: "Full Stack, Social media",
        anos: "2023-2023",
      },
    ],
  },
];

const skillData = [
  {
    title: "Skills",
    data: [
      {
        name: "Front-End",
      },
      {
        name: "Javascript, ReactJS, NextJS, TailwindCSS",
      },
      {
        name: "Back-End",
      },
      {
        name: " Python, Java, MySQL",
      },
      {
        name: "Mobile",
      },
      {
        name: "expoGO, ReactNative",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 mt-16">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Sobre mim
        </h2>
        <div className="flex flex-col xl:flex-row"></div>
        {/* imagem */}
        <div className="hidden xl:flex-1 relative">
          <Image
            src="/developer.png"
            alt="Minha Imagem"
            width={505}
            height={505}
            className="bg-no-repeat relative"
          />
        </div>
        {/* tabs */}
        <div className="flex-1">
          <Tabs defaultValue="personal">
            <TabsList className="w-full xl:grid-cols-3 grid xl:max-[520px] xl:border dark:border-none">
              <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                informacoes pessoais
              </TabsTrigger>
              <TabsTrigger
                className="w-[162px] xl:w-auto"
                value="qualifications"
              >
                Qualificações
              </TabsTrigger>
              <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                habilidades
              </TabsTrigger>
            </TabsList>
            {/* tabs content */}
            <div className="text-lg mt-12 xl:mt-8"></div>
      {/* personal */}
      <div>
        <TabsContent value="personal">
          <div className="text-center xl:text-left">
            <div>
              <h3 className="h3 mb-4 mt-6">
                Mantendo prazos e serviços de qualidade ao longo de um ano
              </h3>
              <p className="subtitle max-w-xl mx-auto xl:mx-0">
                Há um ano, iniciei freelancers e projetos pessoais,
                buscando ganhar <br></br>
                experiência real de trabalho enquanto ainda não consegui
                minha primeiro oportunidade na área.<br></br>
                Em meus projetos, estabeleço prazos, utilizo mapas
                mentais, organizo task e realizo reuniões diárias quando o
                projeto é em grupo.
              </p>
            </div>
            {/* icons */}
            <div className="grid xl:grid-cols-2 gap-4 mb-12">
              {infoData.map((items, index) => {
                return (
                  <div
                    className="flex items-center gap-x-4 mx-auto xl:mx-0"
                    key={index}
                  >
                    <div>{items.icon}</div>
                    <div>{items.text}</div>
                  </div>
                );
              })}
            </div>

                  {/* linguagens */}
                  <div className="flex flex-col gap-y-2">
                    <div className="text-primary"> línguas </div>
                    <div className="border-b border-border"></div>
                    <div>português, inglês intermediário</div>
                  </div>
                </div>
              </TabsContent>
              {/* Qualificações */}
              <TabsContent value="qualifications">
                <div>
                  <h3 className="h3 mb-8 text-center xl:text-left ">
                    Minha incrível Jornada
                  </h3>
                  <h2 className="text-center xl:text-left break-before-auto mb-11"> Minha jornada na programação começou de forma despretensiosa, enquanto eu realizava modificações em aplicativos diretamente do meu celular, <br></br> utilizando ferramentas como o ZArchiver e editores de APK.  <br></br>
                  Logo me vi encantado com a ideia de criar meu próprio jogo, mas deparei-me com um desafio que me fez hesitar: a necessidade de programação. Foi um momento de travamento. <br></br>No entanto, esse obstáculo não me afastou completamente do mundo da programação, mas sim me fez dar um passo para trás por dois anos. <br></br>
                  Durante esse período, nunca perdi o interesse pela área. Continuei consumindo conteúdo, acompanhando as novidades e absorvendo conhecimento sempre que possível.<br></br> Foi durante esse tempo de reflexão que percebi algo fundamental. <br></br>
                  O momento decisivo veio quando o Professor Gabriel fez uma pergunta simples em sala de aula: {''}Por que vocês querem entrar na área da programação?{''} <br></br>Minha resposta surgiu de forma natural e sincera: -Porque é a única área na qual consigo estudar por horas sem sentir qualquer desconforto. Porque não é um sacrifício,<br></br> mas sim algo normal para mim. Alguns chamam isso de vocação, e talvez eles tenham razão. Talvez eu seja realmente vocacionado para essa área.<br></br>
                  </h2>             

                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/jornada/jor1.jpg"
                      alt="Foto 1 da Jornada"
                      className="w-full h-auto"
                    />
                    <img
                      src="/jornada/jor2.jpg"
                      alt="Foto 2 da Jornada"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    {/* experiecia */}
                    <div>
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium mt-16">
                          {qualificationData &&
                            qualificationData.experiencia &&
                            qualificationData.experiencia.title}
                        </h4>
                      </div>
                      {/* list */}
                      <div className="flex items-center">
                        <div className="relative ml-2">
                          <a href="https://parttida-fenix.vercel.app/">
                            <h3 className="hover:text-cyan-500 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-8">
                              parttida
                            </h3>
                            <p className="hover:text-cyan-500 break-words ">
                              Parttida é uma plataforma projetada para reunir
                              <br></br>
                              entusiastas do esporte, oferecendo oportunidades
                              para praticar qualquer modalidade esportiva.{" "}
                              <br></br> Com seções dedicadas a profissionais,
                              proprietários de quadras e usuários em busca de
                              diversão, aluguel de quadras ou aulas particulares
                              com especialistas e treinadores,<br></br> o
                              Parttida proporciona uma experiência abrangente
                              para todos os interessados em atividades
                              esportivas.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              {/* skills */}
              <TabsContent value="skills">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-8 ">
                    Ferramentas que utilizo no dia a dia
                  </h3>
                  {/* skills list */}
                  <div className="mb-16">
                    <h4 className="text-cl font-semibold mb-2">Habilidades</h4>
                    <div className="border-b border-border mb-4"> </div>
                    {/* skills list */}

                    <div>
                      {getData(skillData, "Skills").data.map((item, index) => {
                        const { name } = item;
                        return (
                          <div
                            className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="font-medium"></div>
                            <div>{name}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* tools */}
                  <div>
                    <h4 className="text-cl font-semibold mb-2 xl:text-left ">
                      Ferramentas
                    </h4>
                    <div className="border-b border-border mb-4"> </div>

                    <p>
                      <a
                        href="https://www.prisma.io/"
                        target="_blank"
                        class="hover:underline hover:text-blue-500"
                      >
                        ORM Prisma
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.docker.com/"
                        target="_blank"
                        class="hover:underline hover:text-blue-500"
                      >
                        Docker
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.notion.so/"
                        target="_blank"
                        class="hover:underline hover:text-blue-500"
                      >
                        Notion
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.diagrams.net/"
                        target="_blank"
                        class="hover:underline hover:text-blue-500"
                      >
                        Draw.io
                      </a>
                    </p>
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="mb-16 mt-6 text-center sm:text-left">
                  <h4 className="text-cl font-semibold mb-2 xl:text-left">
                    Soft Skills
                  </h4>
                  <div className="border-b border-border mb-4"></div>
                  {/* skills list */}
                  <ul>
                    <p>
                      Ânsia por aprendizado<br></br>
                      Comunicação<br></br>
                      Relacionamento interpessoal<br></br>
                      Ética de trabalho<br></br>
                      Empatia<br></br>
                      Pontualidade
                    </p>
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
