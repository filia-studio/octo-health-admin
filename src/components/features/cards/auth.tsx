import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useSend } from "@/hooks/use-send";
import { cn } from "@/lib/utils";
import { useStore } from "@/store";
import type { User } from "@/types/user";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaInfoCircle } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AuthCard = () => {
  const navigate = useNavigate();
  const [isOTP, setIsOTP] = useState(false);
  const [email, setEmail] = useState("");
  const { setAuth } = useStore();
  const creds = localStorage.getItem("creds");

  const form = useForm({
    defaultValues: { value: !isOTP ? creds || "" : "" },
  });

  const { isPending, mutate: initiate } = useSend("/users/admin_login/", {
    useAuth: false,
    onSuccess: () => {
      setEmail(form.watch("value"));
      form.reset({ value: "" });
      setIsOTP(true);
    },
  });

  const { isPending: verifying, mutate: verify } = useSend<{
    otp: string;
  }, {
    data: { user: User; token: string };
  }>("/users/verify_otp/", {
    useAuth: false,
    onSuccess: (data) => {
      setAuth({
        token: data.data.token,
        details: data.data.user,
      });
      navigate("/app/healthcare");
    },
  });

  const onSubmit = (data: { value: string }) => {
    if (!isOTP) {
      initiate({ email: data.value });
    } else {
      verify({ otp: data.value });
    }
  };

  return (
    <Card className="h-[18rem] lg:h-[28.375rem] w-full max-w-[39.125rem] py-0 gap-0 rounded-4xl overflow-hidden border-none">
      <div className="bg-primary text-white h-[5.5625rem] px-7 lg:px-10 py-8">
        <h5 className="lg:text-2xl font-bold">
          <FaInfoCircle className="inline w-6 h-6 mr-2 lg:mr-3" /> Please verify
          your credentials
        </h5>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="py-8 px-9 lg:p-10"
      >
        <Input
          {...form.register("value")}
          type={isOTP ? "text" : "email"}
          placeholder={isOTP ? "Enter OTP" : "hi@octohealth.pro"}
          className="h-16 lg:h-[5.375rem] max-w-[18.75rem] md:max-w-[34rem] mx-auto bg-transparent border-black rounded-[12.5rem] text-center lg:!text-2xl"
        />
        <div className="flex justify-between items-center mt-9">
          {isOTP ? (
            <Button
              variant="link"
              disabled={isPending || verifying}
              onClick={() => initiate({ email })}
            >
              <FaArrowRotateLeft
                className={cn({ "animate-spin": isPending })}
              />
              Resend OTP
            </Button>
          ) : (
            <div className="flex items-center space-x-2">
              <Switch
                id="switch-mode"
                className="w-8 lg:w-[5.5625rem] h-4 lg:h-11 lg:p-1"
                defaultChecked={!!creds}
                onCheckedChange={(checked) => {
                  if (checked) {
                    localStorage.setItem("creds", form.watch("value"));
                  } else {
                    localStorage.removeItem("creds");
                  }
                }}
              />
              <Label htmlFor="switch-mode" className="text-sm lg:text-xl">
                Store Credentials
              </Label>
            </div>
          )}
          <Button
            disabled={!form.watch("value") || isPending || verifying}
            className="rounded-[12.5rem] bg-black w-full max-w-[6.5rem] lg:max-w-[11.8rem] h-10 lg:h-[4.1875rem] text-sm lg:text-xl font-semibold"
          >
            {isOTP ? "Verify OTP" : "Send OTP"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default AuthCard;
