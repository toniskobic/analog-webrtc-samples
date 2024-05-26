export const RESOLUTION_CONSTRAINTS = [
  {
    name: 'qvga',
    constraints: {
      video: {
        width: { exact: 320 }, height: { exact: 240 }
      }
    }
  },
  {
    name: 'vga',
    constraints: {
      video: {
        width: { exact: 640 }, height: { exact: 480 }
      }
    }
  },
  {
    name: 'hd',
    constraints: {
      video: {
        width: { exact: 1280 }, height: { exact: 720 }
      }
    }
  },
  {
    name: 'fullHd',
    constraints: {
      video: {
        width: { exact: 1920 }, height: { exact: 1080 }
      }
    }
  },
  {
    name: 'televisionFourK',
    constraints: {
      video: {
        width: { exact: 3840 }, height: { exact: 2160 }
      }
    }
  },
  {
    name: 'cinemaFourK',
    constraints: {
      video: {
        width: { exact: 4096 }, height: { exact: 2160 }
      }
    }
  },
  {
    name: 'eightK',
    constraints: {
      video: {
        width: { exact: 7680 }, height: { exact: 4320 }
      }
    }
  }
] as const;
