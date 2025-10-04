import DashboardTitle from "@/components/features/common/dashboard-title";
import DataTable, {
  type Column,
} from "@/components/features/common/data-table";
import { useFetch } from "@/hooks/use-fetch";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import type { InsuranceProvider } from "@/types/insurance";
import { cn } from "@/lib/utils";

dayjs.extend(LocalizedFormat);

const OnboardedInsuranceProviders = () => {
  const { data, isLoading } = useFetch<InsuranceProvider[]>(
    "/insurance_provider/",
    {
      hideToast: "success",
    }
  );

  const columns: Column<InsuranceProvider>[] = [
    {
      header: "Name",
      key: "name",
      render: (row) => row.insurance.name,
    },
    {
      header: "HMO ID",
      key: "hmo_id",
      render: (row) => row.insurance.hmo_id,
      headerClassName: "text",
      cellClassName: "text-center",
    },
    {
      header: "Email",
      key: "email",
      cellClassName: "break-all",
    },
    {
      header: "Accreditation Number",
      key: "accreditation_number",
      cellClassName: "break-all",
      className: "text-center",
    },
    {
      header: "Verification Status",
      key: "accreditation_verified",
      className: "text-center",
      render: (row) => (
        <span
          className={cn({
            "text-green-500": row.accreditation_verified,
            "text-red-500": !row.accreditation_verified,
          })}
        >
          {row.accreditation_verified ? "Verified" : "Not Verified"}
        </span>
      ),
    },
    {
      header: "Date Added",
      key: "created_at",
      render: (row) => dayjs(row.created_at.split("T")[0]).format("LL"),
    },
  ];

  console.log({ data });

  return (
    <section>
      <div className="mb-8">
        <DashboardTitle
          title="Onboarded Insurance Providers"
          // action={{}}
        />
      </div>
      <DataTable
        loading={isLoading}
        columns={columns}
        data={data ?? []}
        // onRowClick={(row) => navigate(`/app/healthcare/${row.id}`)}
      />
    </section>
  );
};

export default OnboardedInsuranceProviders;
