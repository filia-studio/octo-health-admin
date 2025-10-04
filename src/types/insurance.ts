export type Insurance = {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  hmo_id: string;
};

export type InsuranceProvider = {
    id: string;
    created_at: string;
    updated_at: string;
    accreditation_number: string;
    address: string;
    email: string;
    phone_number: string;
    accreditation_verified: boolean;
    insurance: Insurance
}
