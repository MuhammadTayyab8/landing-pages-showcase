export interface Creator {
  id: string;
  handle: string;
  name: string;
  avatar: string;
  points: number;
  ratePerSecond: number;
  followers: number;
  category: string;
  verified: boolean;
  avatarType: 'punk' | 'ape' | 'cat' | 'alien';
}

export interface WalletState {
  isConnected: boolean;
  address: string | null;
  ensName: string | null;
  balanceEth: number;
  balanceClub: number;
  network: 'Base Mainnet' | 'Base Sepolia';
}
