import { Button } from "@/components/ui/button";
import { useFetch } from "@/hooks/use-fetch";
import { useSend } from "@/hooks/use-send";
import type { InsuranceProvider } from "@/types/insurance";
import { CheckIcon, DownloadIcon } from "lucide-react";
import { useParams } from "react-router-dom";

const InsuranceProviderDetail = () => {
  const { id } = useParams();
  const { data } = useFetch<InsuranceProvider>(`/insurance_provider/${id}`, {
    hideToast: "success",
  });

  const { mutate, isPending } = useSend(
    "/insurance_provider/update_insurance_provider_verification_status/",
    {
      successMessage: "Insurance Provider has been verified",
    }
  );

  const handleVerify = () => {
    mutate({
      insurance_provider_id: data?.id,
      status: "verified",
    });
  };

  return (
    <div className="bg-white rounded-2xl p-10 max-w-[35rem] mx-auto">
      <h3 className="text-primary text-2xl font-semibold mb-10">
        {data?.insurance?.name}
      </h3>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <p className="text-gray-400">HMO ID</p>
          <p className="">{data?.insurance?.hmo_id}</p>
        </div>
        <div>
          <p className="text-gray-400">Accreditation Number</p>
          <p className="break-all">{data?.accreditation_number}</p>
        </div>
        <div>
          <p className="text-gray-400">Email</p>
          <p className="break-all">{data?.email}</p>
        </div>
        <div>
          <p className="text-gray-400">Phone Number</p>
          <p className="">{data?.phone_number}</p>
        </div>
        <div>
          <p className="text-gray-400">Address</p>
          <p className="">{data?.address}</p>
        </div>
        <div>
          <p className="text-gray-400">Accreditation Verified</p>
          <p className="">{data?.accreditation_verified ? "Yes" : "No"}</p>
        </div>
      </div>
      <div className="flex justify-between gap-5 mt-10">
        <Button variant="outline">
          <DownloadIcon className="size-4" /> Download
        </Button>
        {!data?.accreditation_verified && (
          <Button onClick={handleVerify} isLoading={isPending}>
            <CheckIcon className="size-4" /> Verify
          </Button>
        )}
      </div>
    </div>
  );
};

export default InsuranceProviderDetail;
