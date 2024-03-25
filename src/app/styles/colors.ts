export const COLORS = {
    white: '#ffffff',
    black: '#000000',
    primary: '#22bf8e',
    secondary: '#3d9d92',   
  } as const;
  
  export const tints = {
    black: (tint: number): string => `rgba(0, 0, 0, 0.${tint / 10})`,
    darkGray: (tint: number): string => `rgba(34, 34, 34, 0.${tint / 10})`,
    primary: (tint: number): string => `rgba(34, 191, 142, 0.${tint / 10})`,
    lightGrey: (tint: number): string => `rgba(245, 245, 245, 0.${tint / 10})`,
    darkGrey2: (tint: number): string => `rgba(36, 28, 21, 0.${tint / 10})`,
  };
  
  export const convertHexToRGB = (hex: string, tint: number): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    if (tint) {
      return `rgba(${r}, ${g}, ${b}, ${tint})`;
    }
  
    return `rgb(${r}, ${g}, ${b})`;
  };
  