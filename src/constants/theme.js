export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    black: '#010101',
    green: '#4caf50',
    red: '#f44336',
    blue: '#2196f3',
    skyBlue: '#14cbd8',
    yellow: '#ffd700',
    gray: '#757575',
    lightGray: '#ececec',
    transparentGray: 'rgba(33, 33, 33, 0.2)',
    redText: '#f44336',
    primaryText: '#212121',
    secondaryText: '#757575',
    error: '#f44336',
    success: '#4caf50',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: { xs: '14px', s: '16px', m: '18px', l: '24px', xl: '32px' },
  fontWeights: { normal: 400, semiBold: 600, bold: 700 },
  lineHeights: { body: 1.5, heading: 1.125 },
  borders: { none: 'none', normal: '1px solid', bold: '2px solid' },
  radii: { none: 0, normal: '4px', big: '8px', round: '50%' },
});