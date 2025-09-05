import { Button } from "@/components/ui/button";
import { routes } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useStore } from "@/store";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen?: boolean;
  toggle: () => void;
}) => {
  const { resetAuth } = useStore();

  return (
    <section
      className={cn(
        "z-50 bg-white md:w-[30%] lg:w-[20%] w-full border-r border-[#E1E1E1] h-full sidebar",
        { "absolute -left-full": isOpen, "absolute lg:static": !isOpen }
      )}
    >
      <div className="h-36 flex items-center justify-center border-b border-[#E1E1E1]">
        <img src="/assets/svgs/logo.svg" alt="" className="w-12" />
      </div>
      <div className="py-4 px-5">
        <p className="text-[0.625rem] text-primary font-bold tracking-[19%]">
          MENU
        </p>
        <div className="flex flex-col gap-10 mt-8">
          {routes.map(({ path, title }) => (
            <NavLink
              to={path}
              onClick={() => title === "Logout" && resetAuth()}
            >
              {title}
            </NavLink>
          ))}
        </div>
      </div>
      <Button
        size="icon"
        className="rounded-full size-7 bg-black absolute top-2.5 right-2.5 lg:hidden"
        onClick={toggle}
      >
        <BsArrowsAngleExpand className="size-3" />
      </Button>
    </section>
  );
};

export default Sidebar;
