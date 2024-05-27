import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </div>
    </div>
  );
};
export default DefaultLayout;
