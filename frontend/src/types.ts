export interface LoginProps {
  username: string
  password: string
}

export interface User {
  first_name: string;
  last_name: string;
  birth_day: string;
  age: number;
  phone: string;
  address: string;
  cep: string;
  city: string;
  state: string;
  id: number;
  photo: string;
  banner: string;
}

export type ToggleMenu = {
  toggleMenu: () => void
}