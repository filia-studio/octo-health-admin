import DashboardLayout from "@/components/features/layouts/dashboard";
import Login from "@/pages/auth/login";
import HealthcareList from "@/pages/dashboard/healthcare";
import CreateHealthcare from "@/pages/dashboard/healthcare/create";
import DashboardOverview from "@/pages/dashboard/overview";
import { Outlet, Route, Routes } from "react-router-dom";

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
      </Route>
    </Routes>
  );
};

export default AppRouter;
