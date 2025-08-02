import { Titillium_Web } from 'next/font/google';

export const TitilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-titillium-web',
});

export const FontsVariables = {
  titilliumWeb: TitilliumWeb,
};

export type FontsType = typeof FontsVariables;
