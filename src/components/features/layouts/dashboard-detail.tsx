import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DashboardDetailLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="mb-8">
        <Button variant="outline" onClick={() => navigate(-1)}>
          <FaArrowLeft className="size-2.5" /> Back
        </Button>
      </div>
      <div className="bg-white rounded-2xl rounded-b-none border border-[#E1E1E1] min-h-dvh">
        <h4 className="p-6 border-b border-[#E1E1E1] font-medium text-lg">{title}</h4>
        <div className="p-6">{children}</div>
      </div>
    </section>
  );
};

export default DashboardDetailLayout;
