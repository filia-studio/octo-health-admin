import type { Route } from "@/types/common";

export const routes: Route[] = [
  {
    path: "/app/healthcare",
    title: "Healthcare",
  },
  {
    title: "Insurance",
    path: `/app/insurance/list`,
    subRoutes: [
      {
        title: "Insurance List",
        path: `/app/insurance/list`,
      },
      {
        title: "Onboarded Providers",
        path: `/app/insurance/onboarded`,
      },
      { title: "Unverified Providers", path: `/app/insurance/unverified` },
    ],
  },
];

export const healthcareProviders = [
  "Hospital",
  "Pharmacy",
  "Lab",
  "Ultrasound center",
  "Physiotherapy clinic",
  "Dental clinic",
];
