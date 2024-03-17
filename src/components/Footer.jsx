import Socials from "./Socials";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      <footer className="bg-secondary py-12">
        <div className="container mx-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4' iconsStyles='text-primary text-[20px]'/>
            <div className="text-muted-foreground"> Copyright &copy; Marcos Vinicios. All reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;