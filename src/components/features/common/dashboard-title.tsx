import { Button, type ButtonProps } from "@/components/ui/button";

const DashboardTitle = ({
  title,
  action,
}: {
  title: string;
  action?: ButtonProps;
}) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold">{title}</h1>
      {action && <Button {...action} />}
    </div>
  );
};

export default DashboardTitle;
