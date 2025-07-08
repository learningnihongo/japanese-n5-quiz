import React from 'react';

const hiragana = [
  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' },
  { a: 'か', i: 'き', u: 'く', e: 'け', o: 'こ' },
  { a: 'さ', i: 'し', u: 'す', e: 'せ', o: 'そ' },
  { a: 'た', i: 'ち', u: 'つ', e: 'て', o: 'と' },
  { a: 'な', i: 'に', u: 'ぬ', e: 'ね', o: 'の' },
  { a: 'は', i: 'ひ', u: 'ふ', e: 'へ', o: 'ほ' },
  { a: 'ま', i: 'み', u: 'む', e: 'め', o: 'も' },
  { a: 'や', i: '', u: 'ゆ', e: '', o: 'よ' },
  { a: 'ら', i: 'り', u: 'る', e: 'れ', o: 'ろ' },
  { a: 'ざ', i: 'じ', u: 'ず', e: 'ぜ', o: 'ぞ' },
  { a: 'が', i: 'ぎ', u: 'ぐ', e: 'げ', o: 'ご' },
  { a: 'ざ', i: 'じ', u: 'ず', e: 'ぜ', o: 'ぞ' },
  { a: 'だ', i: 'ぢ', u: 'づ', e: 'で', o: 'ど' },
  { a: 'ば', i: 'び', u: 'ぶ', e: 'べ', o: 'ぼ' },
  { a: 'ぱ', i: 'ぴ', u: 'ぷ', e: 'ぺ', o: 'ぽ' },
];

const VowelHeader = () => (
    <div className="grid grid-cols-5 text-center font-bold text-gray-500">
        <span>a</span>
        <span>i</span>
        <span>u</span>
        <span>e</span>
        <span>o</span>
    </div>
);

const HiraganaChart = () => {
    return (
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
           <VowelHeader />
           <div className="mt-2 space-y-2 text-gray-800">
                {hiragana.map((row, index) => (
                    <div key={index} className="grid grid-cols-5 text-center text-xl font-bold h-12">
                        <div className="bg-red-100 text-red-800 rounded-l-lg flex items-center justify-center">{row.a}</div>
                        <div className="bg-green-100 text-green-800 flex items-center justify-center">{row.i}</div>
                        <div className="bg-yellow-100 text-yellow-800 flex items-center justify-center">{row.u}</div>
                        <div className="bg-blue-100 text-blue-800 flex items-center justify-center">{row.e}</div>
                        <div className="bg-purple-100 text-purple-800 rounded-r-lg flex items-center justify-center">{row.o}</div>
                    </div>
                ))}
           </div>
           <div className="grid grid-cols-1 text-center text-xl font-bold h-12 mt-2 text-gray-800">
                <div className="bg-gray-200 rounded-lg flex items-center justify-center">ん</div>
           </div>
        </div>
    );
};

export default HiraganaChart;