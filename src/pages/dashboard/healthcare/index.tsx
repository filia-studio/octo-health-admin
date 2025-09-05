import DashboardTitle from "@/components/features/common/dashboard-title";
import DataTable, {
  type Column,
} from "@/components/features/common/data-table";
import { useFetch } from "@/hooks/use-fetch";
import type { Healthcare } from "@/types/healthcare";
import { PlusIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HealthcareList = () => {
  const navigate = useNavigate();
  const { isLoading, data: healthcares } = useFetch<{ data: Healthcare[] }>(
    "/healthcare/",
    { useAuth: false }
  );

  const columns: Column<Healthcare>[] = [
    {
      header: "Name",
      key: "name",
    },
    {
      header: "Type",
      key: "healthcare_type",
      cellClassName: "capitalize",
    },
    {
      header: "Owner's Name",
      key: "owner_name",
    },
    {
      header: "Owner's Email",
      key: "email",
    },
    {
      header: "License Number",
      key: "license_number",
    },
  ];

  return (
    <section>
      <div className="mb-8">
        <DashboardTitle
          title="Healthcare Providers"
          action={{
            variant: "default",
            onClick: () => navigate("/app/healthcare/create"),
            children: (
              <>
                <PlusIcon className="size-4" /> Add New
              </>
            ),
          }}
        />
      </div>
      <DataTable
        loading={isLoading}
        columns={columns}
        data={healthcares?.data ?? []}
        onRowClick={(row) => navigate(`/app/healthcare/${row.id}`)}
      />
    </section>
  );
};

export default HealthcareList;
