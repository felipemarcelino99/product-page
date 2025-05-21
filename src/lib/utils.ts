import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export function setWithExpiry(key: string, value: any, ttl: number) {
  const now = new Date();
  const item = {
    value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getWithExpiry(key: string) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
}

export function formatCep(value: string): string {
  const cep = value.replace(/\D/g, "");
  return cep.replace(/^(\d{5})(\d{0,3})/, "$1-$2");
}

export const fetchAddressFromCEP = async (cep: string) => {
  const cleanCep = cep.replace(/\D/g, "");

  if (!/^\d{8}$/.test(cleanCep)) {
    throw new Error("CEP inválido");
  }

  const response = await axios.get(
    `https://viacep.com.br/ws/${cleanCep}/json/`
  );

  if (response.data.erro) {
    throw new Error("CEP não encontrado");
  }

  return response.data;
};
