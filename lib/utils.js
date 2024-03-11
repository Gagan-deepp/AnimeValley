import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export function isBase64Image(imageData) {
  const base64Regex = /^data:image\/(png|jpe?g|gif|jfif|webp);base64,/;
  return base64Regex.test(imageData);
}

