import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export function isBase64Image(imageData) {
  const base64Regex = /^data:image\/(png|jpe?g|gif|jfif|webp);base64,/;
  return base64Regex.test(imageData);
}

export function dateFormat(timestamp) {

  // Convert the timestamp string to a JavaScript Date object
  const date = new Date(timestamp);

  // Extract the year, month, and day from the date object
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so we add 1
  const day = String(date.getDate()).padStart(2, '0');

  // Format the date as YYYY-MM-DD
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate; // Output: 2024-03-15

}
