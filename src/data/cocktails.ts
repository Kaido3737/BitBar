import ChinaBlue from './images/cocktail_blue.gif';
import FuzzyNable from './images/cocktail_orange.gif';
import Cosmopolitan from './images/cosmopolitan.gif';
import Negroni from './images/negroni.gif';
import { Cocktail } from '../types/cocktail';

export const cocktails: Cocktail[] = [
  {
    id: "blue",
    name: "China Blue",
    image: ChinaBlue,
    description: "澄んだブルーに、ライチとグレープフルーツの香りが広がる爽やかな一杯。\nふっと気持ちを切り替えたい夜や、静かに自分と向き合いたいときにぴったり。\n甘すぎず軽やかな後味が、心をそっとリセットしてくれる。",
  },
  {
    id: "orange",
    name: "Fuzzy Navel",
    image: FuzzyNable,
    description: "aaaa",
  },
  {
    id: "cosmopolitan",
    name: "Cosmopolitan",
    image: Cosmopolitan,
    description: "bbbb",
  },
  {
  id: "negroni",
  name: "Negroni",
  image: Negroni,
  description: "cccc",
  },
];