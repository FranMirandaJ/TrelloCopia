export interface ThemeDefinition {
  id: string;
  label: string;
  bgClass: string;
  emoji?: string;
}

export const BOARD_COLORS: Record<string, ThemeDefinition> = {
  blue: {
    id: 'blue',
    label: 'Azul',
    bgClass: 'bg-sky-600',
  },
  orange: {
    id: 'orange',
    label: 'Naranja',
    bgClass: 'bg-amber-500',
  },
  green: {
    id: 'green',
    label: 'Verde',
    bgClass: 'bg-green-600',
  },
  red: {
    id: 'red',
    label: 'Rojo',
    bgClass: 'bg-red-600',
  },
  purple: {
    id: 'purple',
    label: 'Morado',
    bgClass: 'bg-purple-500',
  },
  pink: {
    id: 'pink',
    label: 'Rosa',
    bgClass: 'bg-pink-500',
  },
  lightGreen: {
    id: 'lightGreen',
    label: 'Verde Claro',
    bgClass: 'bg-green-400',
  },
  cyan: {
    id: 'cyan',
    label: 'Celeste',
    bgClass: 'bg-cyan-500',
  },
  gray: {
    id: 'gray',
    label: 'Gris',
    bgClass: 'bg-slate-500',
  },
};

export const BOARD_GRADIENTS: Record<string, ThemeDefinition> = {
  default: {
    id: 'default',
    label: 'Por defecto',
    bgClass: 'bg-slate-300',
  },
  snow: {
    id: 'snow',
    label: 'Nieve',
    bgClass: 'bg-gradient-to-br from-blue-400 to-cyan-500',
    emoji: '❄️',
  },
  ocean: {
    id: 'ocean',
    label: 'Océano',
    bgClass: 'bg-gradient-to-br from-blue-600 to-blue-900',
    emoji: '🌊',
  },
  crystal: {
    id: 'crystal',
    label: 'Cristal',
    bgClass: 'bg-gradient-to-br from-slate-700 to-purple-600',
    emoji: '🔮',
  },
  rainbow: {
    id: 'rainbow',
    label: 'Arcoíris',
    bgClass: 'bg-gradient-to-br from-purple-500 to-pink-400',
    emoji: '🌈',
  },
  peach: {
    id: 'peach',
    label: 'Durazno',
    bgClass: 'bg-gradient-to-br from-orange-400 to-amber-400',
    emoji: '🍑',
  },
  blossom: {
    id: 'blossom',
    label: 'Cerezo',
    bgClass: 'bg-gradient-to-br from-pink-400 to-rose-400',
    emoji: '🌸',
  },
  earth: {
    id: 'earth',
    label: 'Tierra',
    bgClass: 'bg-gradient-to-br from-teal-600 to-emerald-400',
    emoji: '🌍',
  },
  alien: {
    id: 'alien',
    label: 'Alien',
    bgClass: 'bg-gradient-to-br from-slate-600 to-slate-800',
    emoji: '👽',
  },
  volcano: {
    id: 'volcano',
    label: 'Volcán',
    bgClass: 'bg-gradient-to-br from-stone-800 to-red-700',
    emoji: '🌋',
  },
};

export const getThemeClass = (themeId: string): string => {
  if (BOARD_COLORS[themeId]) return BOARD_COLORS[themeId].bgClass;
  if (BOARD_GRADIENTS[themeId]) return BOARD_GRADIENTS[themeId].bgClass;
  return BOARD_COLORS.blue.bgClass;
};
