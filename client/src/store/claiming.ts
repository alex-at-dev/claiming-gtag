import { create } from 'zustand';

interface ClaimingStore {
  email: string;
  name: string;
  birthday: string;
  password: string;
  termsConfirmed: boolean | null;
  newsletterOptin: boolean | null;
  set: (val: Partial<ClaimingStore>) => void;
}

export const useClaimingStore = create<ClaimingStore>((_set) => ({
  email: '',
  name: '',
  birthday: '',
  password: '',
  termsConfirmed: null,
  newsletterOptin: null,
  set: (val: Partial<ClaimingStore>) => _set(val),
}));
