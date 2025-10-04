import DashboardLayout from "@/components/features/layouts/dashboard";
import Login from "@/pages/auth/login";
import HealthcareList from "@/pages/dashboard/healthcare";
import CreateHealthcare from "@/pages/dashboard/healthcare/create";
import InsuranceList from "@/pages/dashboard/insurance/list";
import OnboardedInsuranceProviders from "@/pages/dashboard/insurance/inapp/onboarded";
import UnverifiedInsuranceProviders from "@/pages/dashboard/insurance/inapp/unverified";
import DashboardOverview from "@/pages/dashboard/overview";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import InsuranceProviderDetail from "@/pages/dashboard/insurance/inapp/detail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="auth" element={<Login />} />
      <Route path="app" element={<DashboardLayout />}>
        <Route index element={<DashboardOverview />} />
        <Route path="healthcare" element={<Outlet />}>
          <Route index element={<HealthcareList />} />
          <Route path="create" element={<CreateHealthcare />} />
          <Route path=":id" element={<CreateHealthcare />} />
        </Route>
        <Route path="insurance" element={<Outlet />}>
          <Route path="list" element={<InsuranceList />} />
          <Route path="onboarded" element={<OnboardedInsuranceProviders />} />
          <Route path="unverified" element={<UnverifiedInsuranceProviders />} />
          <Route path=":id" element={<InsuranceProviderDetail />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/app" />} />
    </Routes>
  );
};

export default AppRouter;
