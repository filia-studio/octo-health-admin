import { Button } from "@/components/ui/button";
import { routes } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useStore } from "@/store";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen?: boolean;
  toggle: () => void;
}) => {
  const [subRoute, setSubRoute] = useState("");
  const { resetAuth } = useStore();

  const subPaths =
    routes?.find((path) => path.title === subRoute)?.subRoutes ?? [];

  const handleLogout = () => {
    resetAuth();
  };

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
        <p
          onClick={() => setSubRoute("")}
          className="text-[0.625rem] text-primary font-bold tracking-[19%] cursor-pointer"
        >
          MENU{" "}
          {subRoute ? (
            <>
              <FaArrowRight className="inline text-black size-2 mx-2" />{" "}
              {subRoute}
            </>
          ) : null}
        </p>
        <div className="w-full mt-8 relative">
          <div
            className={cn("w-[200%] flex transition-all duration-300", {
              "translate-x-0": !subRoute,
              "-translate-x-1/2": subRoute,
            })}
          >
            <div className="flex flex-col gap-10 w-full">
              {routes.map(({ title, path, subRoutes }) => (
                <NavLink
                  to={path}
                  onClick={() =>
                    subRoutes?.length ? setSubRoute(title) : setSubRoute("")
                  }
                >
                  {title}
                </NavLink>
              ))}
              <span className="cursor-pointer" onClick={handleLogout}>
                Logout
              </span>
            </div>
            <div className="flex flex-col gap-10 w-full">
              {subPaths.map(({ title, path }) => (
                <NavLink to={path}>{title}</NavLink>
              ))}
            </div>
          </div>
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
