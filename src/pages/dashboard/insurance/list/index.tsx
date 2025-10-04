import DashboardTitle from "@/components/features/common/dashboard-title";
import type { Column } from "@/components/features/common/data-table";
import DataTable from "@/components/features/common/data-table";
import { useFetch } from "@/hooks/use-fetch";
import type { Insurance } from "@/types/insurance";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedFormat);

const InsuranceList = () => {
  const { data, isLoading } = useFetch<Insurance[]>("/insurance/", {
    hideToast: "success",
  });

  const columns: Column<Insurance>[] = [
    {
      header: "Name",
      key: "name",
    },
    {
      header: "HMO ID",
      key: "hmo_id",
      headerClassName: "text",
      cellClassName: "text-center",
    },
    {
      header: "Date Created",
      key: "created_at",
      render: (row) => dayjs(row.created_at.split("T")[0]).format("LL"),
    },
    {
      header: "Date Updated",
      key: "updated_at",
      render: (row) => dayjs(row.updated_at.split("T")[0]).format("LL"),
    },
  ];

  return (
    <section>
      <div className="mb-8">
        <DashboardTitle
          title="All Insurance Providers"
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

export default InsuranceList;
