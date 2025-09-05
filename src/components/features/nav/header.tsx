import Notifications from "../notifications";
import { Button } from "@/components/ui/button";
import { IoMenu } from "react-icons/io5";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="lg:min-h-36 flex flex-col justify-center items-center bg-white border-b border-gray-200 px-4 lg:px-16 py-4 sticky top-0 z-10">
      <div className="max-w-[75.5rem] w-full mx-auto flex items-center justify-between">
        <Button variant="link" className="text-black" onClick={toggleSidebar}>
          <IoMenu className="size-7" />
        </Button>
        <Notifications />
      </div>
    </header>
  );
};
export default Header;
