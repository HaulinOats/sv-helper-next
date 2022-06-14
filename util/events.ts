export const selectInput = (e: React.MouseEvent<HTMLInputElement>) => {
  e.currentTarget.select();
};

export const blurInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") (e.currentTarget as HTMLInputElement).blur();
};
