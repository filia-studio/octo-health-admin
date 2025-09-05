import AuthCard from "@/components/features/cards/auth";

const Login = () => {
  return (
    <main
      className="h-dvh px-2 lg:pl-[8.3125rem] lg:pr-24 overflow-hidden flex flex-col items-center justify-center relative before:absolute before:inset-0 before:bg-black/30 before:z-0"
      style={{
        backgroundImage: `url('/assets/images/auth-bg.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col gap-6 items-center justify-between w-full relative max-w-[80rem] mx-auto xl:flex-row">
        <img src="/assets/images/octo-health-white.png" alt="" className="w-[15.2rem] lg:w-[22rem]" />
        <AuthCard />
      </div>
    </main>
  );
};

export default Login;
