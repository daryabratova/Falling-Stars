export const formatTime: (seconds: number) => string = (seconds) => {
  const parts = [seconds / 60, seconds % 60];

  return parts
    .map((part) => String(Math.floor(part)).padStart(2, "0"))
    .join(":");
};
