export interface LoginProps {
  username: string
  password: string
  email?: string
}

export interface User {
  terms: boolean;
  first_name: string;
  last_name: string;
  birth_day: string;
  email?: string;
  isPhone: string;
  address?: string;
  city: string;
  state: string;
  country: string;
  id: number;
  photo: string;
  banner?: string;
  isWhatsapp: boolean;
  notifications: boolean;  
  ct_email: boolean;
  ct_phone: boolean;
  ct_whatsapp: boolean;
  
}

export type ToggleMenu = {
  toggleMenu: () => void
}
