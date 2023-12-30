export interface LoginProps {
  username: string
  password: string
  email?: string
}

export interface User {
  first_name: string;
  last_name: string;
  birth_day: string;
  email?: string;
  phone: string;
  address?: string;
  city: string;
  state: string;
  country: string;
  id?: number;
  user_id: number;
  photo?: string;
  banner?: string;
  isWhatsapp: string;
  notification: string;  
  ct_email: string;
  ct_phone: string;
  ct_whatsapp: string;
  
}

export type ToggleMenu = {
  toggleMenu: () => void
}
