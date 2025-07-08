
import { Verb } from '../types';

interface VerbData {
  id: number;
  teForm: string;
  dictionaryForm: string;
  burmese: string;
  group: 1 | 2 | 3;
}

const verbDataList: VerbData[] = [
  { id: 1, teForm: "てつだって", dictionaryForm: "てつだう", burmese: "ကူညီသည်", group: 1 },
  { id: 2, teForm: "みて", dictionaryForm: "みる", burmese: "ကြည့်သည်။မြင်သည်။", group: 2 },
  { id: 3, teForm: "よやくして", dictionaryForm: "よやくする", burmese: "ကြိုတင်မှာသည်", group: 3 },
  { id: 4, teForm: "むかえて", dictionaryForm: "むかえる", burmese: "ကြိုဆိုသည်", group: 2 },
  { id: 5, teForm: "よんで", dictionaryForm: "よぶ", burmese: "ခေါ်သည်", group: 1 },
  { id: 6, teForm: "つれていって", dictionaryForm: "つれていく", burmese: "ခေါ်သွားသည်", group: 1 },
  { id: 7, teForm: "つれてきて", dictionaryForm: "つれてくる", burmese: "ခေါ်လာသည်", group: 3 },
  { id: 8, teForm: "かして", dictionaryForm: "かす", burmese: "ချေးငှားသည်", group: 1 },
  { id: 9, teForm: "かりて", dictionaryForm: "かりる", burmese: "ချေးယူသည်", group: 2 },
  { id: 10, teForm: "まがって", dictionaryForm: "まがる", burmese: "ချိုးကွေ့သည်", group: 1 },
  { id: 11, teForm: "はなして", dictionaryForm: "はなす", burmese: "စကားပြောသည်", group: 1 },
  { id: 12, teForm: "はじめて", dictionaryForm: "はじめる", burmese: "စတင်သည်", group: 2 },
  { id: 13, teForm: "かんがえて", dictionaryForm: "かんがえる", burmese: "စဉ်းစားသည်", group: 2 },
  { id: 14, teForm: "あつめて", dictionaryForm: "あつめる", burmese: "စုဆောင်းသည်", group: 2 },
  { id: 15, teForm: "まって", dictionaryForm: "まつ", burmese: "စောင့်သည်", group: 1 },
  { id: 16, teForm: "たべて", dictionaryForm: "たべる", burmese: "စားသည်", group: 2 },
  { id: 17, teForm: "あらって", dictionaryForm: "あらう", burmese: "ဆေးကြောသည်", group: 1 },
  { id: 18, teForm: "すって", dictionaryForm: "すう", burmese: "ဆေးလိပ်သောက်သည်", group: 1 },
  { id: 19, teForm: "ついて", dictionaryForm: "つく", burmese: "ဆိုက်ရောက်သည်", group: 1 },
  { id: 20, teForm: "かぶって", dictionaryForm: "かぶる", burmese: "ဆောင်းသည်။(ဦးထုပ်ကို)", group: 1 },
  { id: 21, teForm: "かいものして", dictionaryForm: "かいものする", burmese: "ဈေးဝယ်သည်", group: 3 },
  { id: 22, teForm: "とって", dictionaryForm: "とる", burmese: "ဓာတ်ပုံရိုက်သည်", group: 1 },
  { id: 23, teForm: "のぼって", dictionaryForm: "のぼる", burmese: "တက်သည်", group: 1 },
  { id: 24, teForm: "かけて", dictionaryForm: "かける", burmese: "တပ်သည်၊ချိတ်သည်(မျက်မှန်ကို)", group: 2 },
  { id: 25, teForm: "とめて", dictionaryForm: "とめる", burmese: "တားသည်။ရပ်သည်။", group: 2 },
  { id: 26, teForm: "ひいて", dictionaryForm: "ひく", burmese: "တီးခတ်သည်", group: 1 },
  { id: 27, teForm: "とまって", dictionaryForm: "とまる", burmese: "တည်းခိုသည်", group: 1 },
  { id: 28, teForm: "あって", dictionaryForm: "あう", burmese: "တွေ့သည်", group: 1 },
  { id: 29, teForm: "しょくじして", dictionaryForm: "しょくじする", burmese: "ထမင်းစားသည်", group: 3 },
  { id: 30, teForm: "おいて", dictionaryForm: "おく", burmese: "ထားသည်", group: 1 },
  { id: 31, teForm: "でて", dictionaryForm: "でる", burmese: "ထွက်သည်", group: 2 },
  { id: 32, teForm: "すわって", dictionaryForm: "すわる", burmese: "ထိုင်သည်", group: 1 },
  { id: 33, teForm: "おもって", dictionaryForm: "おもう", burmese: "ထင်မြင်သည်။ယူဆသည်။တွေးတောသည်", group: 1 },
  { id: 34, teForm: "おしえて", dictionaryForm: "おしえる", burmese: "သင်ပေးသည်", group: 2 },
  { id: 35, teForm: "ならって", dictionaryForm: "ならう", burmese: "သင်ယူသည်", group: 1 },
  { id: 36, teForm: "そうじして", dictionaryForm: "そうじする", burmese: "သန့်ရှင်းရေးလုပ်သည်", group: 3 },
  { id: 37, teForm: "きをつけて", dictionaryForm: "きをつける", burmese: "သတိထားသည်", group: 2 },
  { id: 38, teForm: "いって", dictionaryForm: "いく", burmese: "သွားသည်", group: 1 },
  { id: 39, teForm: "のんで", dictionaryForm: "のむ", burmese: "သောက်သည်", group: 1 },
  { id: 40, teForm: "しって", dictionaryForm: "しる", burmese: "သိသည်", group: 1 },
  { id: 41, teForm: "うたって", dictionaryForm: "うたう", burmese: "သီချင်းဆိုသည်", group: 1 },
  { id: 42, teForm: "いれて", dictionaryForm: "いれる", burmese: "သွင်းသည်", group: 2 },
  { id: 43, teForm: "けんきゅうして", dictionaryForm: "けんきゅうする", burmese: "သုတေသနပြုလုပ်သည်", group: 3 },
  { id: 44, teForm: "つかれて", dictionaryForm: "つかれる", burmese: "ပင်ပန်းသည်", group: 2 },
  { id: 45, teForm: "おくって", dictionaryForm: "おくる", burmese: "ပို့သည်", group: 1 },
  { id: 46, teForm: "もって", dictionaryForm: "もつ", burmese: "ပိုင်ဆိုင်သည်။သယ်သည်။ကိုင်ထားသည်", group: 1 },
  { id: 47, teForm: "だして", dictionaryForm: "だす", burmese: "ပစ္စည်းထုတ်သည်။အစီရင်ခံစာတင်သည်", group: 1 },
  { id: 48, teForm: "あげて", dictionaryForm: "あげる", burmese: "ပေးသည်", group: 2 },
  { id: 49, teForm: "くれて", dictionaryForm: "くれる", burmese: "ပေးသည် (မိမိအားပေးသည်)", group: 2 },
  { id: 50, teForm: "はらって", dictionaryForm: "はらう", burmese: "ပေးချေသည်", group: 1 },
  { id: 51, teForm: "おわって", dictionaryForm: "おわる", burmese: "ပြီးဆုံးသည်", group: 1 },
  { id: 52, teForm: "かえって", dictionaryForm: "かえる", burmese: "ပြန်သည်", group: 1 },
  { id: 53, teForm: "かえして", dictionaryForm: "かえす", burmese: "ပြန်ပေးသည်", group: 1 },
  { id: 54, teForm: "のりかえて", dictionaryForm: "のりかえる", burmese: "ပြောင်းစီးသည်", group: 2 },
  { id: 55, teForm: "して", dictionaryForm: "する", burmese: "ပြုလုပ်သည်", group: 3 },
  { id: 56, teForm: "つくって", dictionaryForm: "つくる", burmese: "ပြုလုပ်သည်။တည်ဆောက်သည်", group: 1 },
  { id: 57, teForm: "しゅうりして", dictionaryForm: "しゅうりする", burmese: "ပြုပြင်သည်။ပြင်ဆင်သည်", group: 3 },
  { id: 58, teForm: "いって", dictionaryForm: "いう", burmese: "ပြောသည်", group: 1 },
  { id: 59, teForm: "きって", dictionaryForm: "きる", burmese: "ဖြတ်သည်။ညှပ်သည်", group: 1 },
  { id: 60, teForm: "わたって", dictionaryForm: "わたる", burmese: "ဖြတ်ကူးသည်", group: 1 },
  { id: 61, teForm: "なって", dictionaryForm: "なる", burmese: "ဖြစ်သည်။ဖြစ်လာသည်။ကျရောက်သည်", group: 1 },
  { id: 62, teForm: "よんで", dictionaryForm: "よむ", burmese: "ဖတ်သည်", group: 1 },
  { id: 63, teForm: "わすれて", dictionaryForm: "わすれる", burmese: "မေ့သည်", group: 2 },
  { id: 64, teForm: "たって", dictionaryForm: "たつ", burmese: "မတ်တပ်ရပ်သည်", group: 1 },
  { id: 65, teForm: "うんてんして", dictionaryForm: "うんてんする", burmese: "မောင်းနှင်သည်", group: 3 },
  { id: 66, teForm: "けして", dictionaryForm: "けす", burmese: "မီးပိတ်သည်", group: 1 },
  { id: 67, teForm: "つけて", dictionaryForm: "つける", burmese: "မီးဖွင့်သည်", group: 2 },
  { id: 68, teForm: "しょうかいして", dictionaryForm: "しょうかいする", burmese: "မိတ်ဆက်သည်", group: 3 },
  { id: 69, teForm: "コピーして", dictionaryForm: "コピーする", burmese: "မိတ္တူကူးသည်", group: 3 },
  { id: 70, teForm: "うまれて", dictionaryForm: "うまれる", burmese: "မွေးဖွားလာသည်", group: 2 },
  { id: 71, teForm: "おぼえて", dictionaryForm: "おぼえる", burmese: "မှတ်မိသည်။မှတ်သည်", group: 2 },
  { id: 72, teForm: "とって", dictionaryForm: "とる", burmese: "ယူသည်", group: 1 },
  { id: 73, teForm: "もっていって", dictionaryForm: "もっていく", burmese: "ယူသွားသည်(သက်မဲ့ပစ္စည်း)", group: 1 },
  { id: 74, teForm: "もってきて", dictionaryForm: "もってくる", burmese: "ယူလာသည်(သက်မဲ့ပစ္စည်း)", group: 3 },
  { id: 75, teForm: "とって", dictionaryForm: "とる", burmese: "ရသည်။ယူသည်", group: 1 },
  { id: 76, teForm: "およいで", dictionaryForm: "およぐ", burmese: "ရေကူးသည်", group: 1 },
  { id: 77, teForm: "あびて", dictionaryForm: "あびる", burmese: "ရေချိုးသည်", group: 2 },
  { id: 78, teForm: "かいて", dictionaryForm: "かく", burmese: "ရေးသည်", group: 1 },
  { id: 79, teForm: "うって", dictionaryForm: "うる", burmese: "ရောင်းသည်", group: 1 },
  { id: 80, teForm: "のって", dictionaryForm: "のる", burmese: "ရထားကို စီးသည်", group: 1 },
  { id: 81, teForm: "おりて", dictionaryForm: "おりる", burmese: "ရထားပေါ်မှဆင်းသည်", group: 2 },
  { id: 82, teForm: "ふって", dictionaryForm: "ふる", burmese: "ရွာသည်", group: 1 },
  { id: 83, teForm: "しらべて", dictionaryForm: "しらべる", burmese: "ရှာဖွေသည်။စစ်ဆေးသည်", group: 2 },
  { id: 84, teForm: "あって", dictionaryForm: "ある", burmese: "ရှိသည် (သက်မဲ့)", group: 1 },
  { id: 85, teForm: "いて", dictionaryForm: "いる", burmese: "ရှိသည် (သက်ရှိ)", group: 2 },
  { id: 86, teForm: "まけて", dictionaryForm: "まける", burmese: "ရှုံးနိမ့်သည်", group: 2 },
  { id: 87, teForm: "あるいて", dictionaryForm: "あるく", burmese: "လမ်းလျှောက်သည်", group: 1 },
  { id: 88, teForm: "きて", dictionaryForm: "くる", burmese: "လာသည်", group: 3 },
  { id: 89, teForm: "いって", dictionaryForm: "いる", burmese: "လိုအပ်သည်", group: 1 }, // Note: This is group 1 いる, not group 2
  { id: 90, teForm: "あんないして", dictionaryForm: "あんないする", burmese: "လိုက်လံရှင်းပြသည်", group: 3 },
  { id: 91, teForm: "かえて", dictionaryForm: "かえる", burmese: "လဲလှယ်သည်။ဖလှယ်သည်", group: 2 },
  { id: 92, teForm: "べんきょうして", dictionaryForm: "べんきょうする", burmese: "လေ့လာသည်", group: 3 },
  { id: 93, teForm: "いそいで", dictionaryForm: "いそぐ", burmese: "လောသည်။အလျင်စလိုလုပ်သည်", group: 1 },
  { id: 94, teForm: "すてて", dictionaryForm: "すてる", burmese: "လွှင့်ပစ်သည်", group: 2 },
  { id: 95, teForm: "かって", dictionaryForm: "かう", burmese: "ဝယ်သည်", group: 1 },
  { id: 96, teForm: "はいって", dictionaryForm: "はいる", burmese: "ဝင်သည်", group: 1 },
  { id: 97, teForm: "きて", dictionaryForm: "きる", burmese: "ဝတ်ဆင်သည်(ခါးအထက်ပိုင်း)", group: 2 },
  { id: 98, teForm: "はいて", dictionaryForm: "はく", burmese: "ဝတ်ဆင်သည်(ခါးအောက်ပိုင်း)", group: 1 },
  { id: 99, teForm: "やすんで", dictionaryForm: "やすむ", burmese: "အနားယူသည်", group: 1 },
  { id: 100, teForm: "ざんぎょうして", dictionaryForm: "ざんぎょうする", burmese: "အလုပ်အချိန်ပိုဆင်းသည်", group: 3 },
  { id: 101, teForm: "はたらいて", dictionaryForm: "はたらく", burmese: "အလုပ်လုပ်သည်", group: 1 },
  { id: 102, teForm: "つかって", dictionaryForm: "つかう", burmese: "အသုံးပြုသည်", group: 1 },
  { id: 103, teForm: "でかけて", dictionaryForm: "でかける", burmese: "အပြင်ထွက်သည်", group: 2 },
  { id: 104, teForm: "せんたくして", dictionaryForm: "せんたくする", burmese: "အဝတ်လျှော်သည်", group: 3 },
  { id: 105, teForm: "ねて", dictionaryForm: "ねる", burmese: "အိပ်သည်", group: 2 },
  { id: 106, teForm: "おきて", dictionaryForm: "おきる", burmese: "အိပ်ရာထသည်", group: 2 },
];

const getNaiForm = (dictForm: string, group: 1 | 2 | 3): string => {
  if (dictForm === 'ある') return 'ない';
  if (dictForm.endsWith('する')) return dictForm.replace(/する$/, 'しない');
  if (dictForm === 'くる') return 'こない';
  if (dictForm === 'つれてくる') return 'つれてこない';

  const stem = dictForm.slice(0, -1);
  const lastChar = dictForm.slice(-1);

  if (group === 1) { 
    const uVowelMap: { [key: string]: string } = {
      'う': 'わ', 'く': 'か', 'ぐ': 'が', 'す': 'さ',
      'つ': 'た', 'ぬ': 'な', 'ぶ': 'ば', 'む': 'ま', 'る': 'ら'
    };
    return stem + uVowelMap[lastChar] + 'ない';
  } else if (group === 2) { 
    return stem + 'ない';
  }
  return '';
};

const getMasuForm = (dictForm: string, group: 1 | 2 | 3): string => {
    if (dictForm.endsWith('する')) return dictForm.replace(/する$/, 'します');
    if (dictForm === 'くる') return 'きます';
    if (dictForm === 'つれてくる') return 'つれてきます';

    const stem = dictForm.slice(0, -1);
    const lastChar = dictForm.slice(-1);

    if (group === 2) {
        return stem + 'ます';
    }

    if (group === 1) {
        const iVowelMap: { [key: string]: string } = {
            'う': 'い', 'く': 'き', 'ぐ': 'ぎ', 'す': 'し',
            'つ': 'ち', 'ぬ': 'に', 'ぶ': 'び', 'む': 'み', 'る': 'り'
        };
        if (lastChar === 'いく'.slice(-1) && dictForm === 'いく') return 'いきます';
        if (lastChar === 'つれていく'.slice(-1) && dictForm === 'つれていく') return 'つれていきます';
        if (lastChar === 'もっていく'.slice(-1) && dictForm === 'もっていく') return 'もっていきます';

        return stem + iVowelMap[lastChar] + 'ます';
    }
    return '';
};

export const verbs: Verb[] = verbDataList.map(verb => ({
  ...verb,
  naiForm: getNaiForm(verb.dictionaryForm, verb.group),
  masuForm: getMasuForm(verb.dictionaryForm, verb.group),
}));

export const getShuffledIndices = (): number[] => {
    const indices = Array.from({ length: verbs.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
};
