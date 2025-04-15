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
    base: "リキュール",
    taste: "フルーティー",
    alc: "5%",
    color: "ブルー",
    ingredient: ["ライチリキュール：40cc", "グレープフルーツジュース：80cc", "ブルーキュラソー：20cc", "氷：適量", "ミント：適量"],
    recipe: ["グラスに氷を入れ、ライチリキュール、グレープフルーツジュースを注いで軽く混ぜる。", "ブルーキュラソーをゆっくりと注ぎ、ミントを添える。"],
  },
  {
    id: "orange",
    name: "Fuzzy Navel",
    image: FuzzyNable,
    description: "オレンジジュースとピーチリキュールで仕上げた、甘くフルーティーなカクテル。\n初心者にもおすすめの飲みやすさで、リラックスしたい夜にぴったり。\nまるで果実そのものを味わっているようなジューシーさが魅力。",
    base: "リキュール",
    taste: "フルーティー・スイート",
    alc: "4%",
    color: "オレンジ",
    ingredient: ["ピーチリキュール：30cc", "オレンジジュース：90cc", "氷：適量"],
    recipe: ["グラスに氷を入れ、ピーチリキュールとオレンジジュースを注ぐ。", "軽くステアして完成。"],
  },
  {
    id: "cosmopolitan",
    name: "Cosmopolitan",
    image: Cosmopolitan,
    description: "クランベリージュースとライムの酸味、ウォッカのキレが合わさった大人の女性に人気のカクテル。\nスタイリッシュな夜に映える、美しいルビーレッドの一杯。\nセクシーで洗練された印象を与える、バーの定番スタイル。",
    base: "ウォッカ",
    taste: "さっぱり・酸味",
    alc: "15%",
    color: "ルビーレッド",
    ingredient: ["ウォッカ：30cc", "コアントロー：15cc", "クランベリージュース：20cc", "ライムジュース：10cc", "氷：適量"],
    recipe: ["シェーカーに材料と氷を入れ、しっかりシェイクする。", "カクテルグラスに注いで完成。"],
  },
  {
    id: "negroni",
    name: "Negroni",
    image: Negroni,
    description: "ジン、スイートベルモット、カンパリを等量で合わせた、ビターで香り高いクラシックなカクテル。\n落ち着いた夜に、自分だけの時間を楽しみたいときにおすすめ。",
    base: "ジン",
    taste: "ビター",
    alc: "24%",
    color: "ディープレッド",
    ingredient: ["ジン：30cc", "カンパリ：30cc", "スイートベルモット：30cc", "オレンジピール：適量", "氷：適量"],
    recipe: ["氷を入れたグラスに材料を注ぎ、軽くステアする。", "オレンジピールを添えて完成。"],
  },
];