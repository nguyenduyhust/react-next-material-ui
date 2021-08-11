export const generateAvatarFromName = (
  name: string, // The name used to generate initials. You can specify the initials yourself as well.
  options?: {
    size?: number; // Avatar image size in pixels.
    backgroundColor?: string; // Hex color for the image background.
    color?: string; // Hex color for the font.
    font?: string;
    bold?: boolean;
  },
): string => {
  const trendColors = [
    '#CD212A',
    '#FFA500',
    '#56C6A9',
    '#4B5335',
    '#798EA4',
    '#FA7A35',
    '#00758F',
    '#EDD59E',
    '#E8A798',
    '#9C4722',
    '#6B5876',
  ];
  const firstText = name.trim()[0].toUpperCase();
  const randomTrendColor = trendColors[Math.floor(Math.random() * trendColors.length)];
  const {
    color = '#FFF',
    backgroundColor = randomTrendColor,
    size = 200,
    font = 'Arial',
    bold = false,
  } = options || {};

  // Create canvas element
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = size;
  canvas.height = size;

  // Draw background
  context!.fillStyle = backgroundColor;
  context!.fillRect(0, 0, canvas.width, canvas.height);

  // Draw text
  context!.font = `${bold ? 'bold ' : ''}${size / 2}px ${font}`;
  context!.fillStyle = color;
  context!.textAlign = 'center';
  context!.textBaseline = 'middle';
  context!.fillText(firstText, canvas.width / 2, canvas.height / 2);

  const result = canvas.toDataURL('image/png');

  // Remove canvas element
  canvas.remove();

  return result;
};
