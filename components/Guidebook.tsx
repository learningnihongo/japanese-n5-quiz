import React from 'react';
import HiraganaChart from './HiraganaChart';

const GuideSection: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <section className="mb-8 p-6 bg-white rounded-2xl card-shadow">
        <h2 className="text-3xl font-extrabold text-pink-600 border-b-2 border-gray-100 pb-3 mb-4">{title}</h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-noto-sans-myanmar">{children}</div>
    </section>
);

const Guidebook = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 animate-pop-in text-gray-800">
        <GuideSection title="ဂျပန် Verb အုပ်စုများ">
            <p>ဂျပန်ဘာသာစကားတွင် Verb များကို အုပ်စု (၃) စု ခွဲခြားထားပါသည်။ Verb တစ်ခုသည် မည်သည့်အုပ်စုတွင် ပါဝင်သည်ကို သိရှိခြင်းသည် ၎င်း၏ပုံစံများကို ပြောင်းလဲရန် ပထမဆုံးခြေလှမ်း ဖြစ်သည်။</p>
            
            <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">အုပ်စု ၁ (Godan Verbs / う-verbs)</h3>
            <p>ဤ Verb များသည် သူတို့၏ Dictionary Form (မူရင်းပုံစံ) တွင် 「える」(eru) သို့မဟုတ် 「いる」(iru) ဖြင့် မဆုံးသတ်ပါ။ ၎င်းတို့၏ အဆုံးသံသည် ဟိရာဂါနဇယား၏ 'u' သရတန်းမှ ဖြစ်သည်။ ဤ Verb များ၏ ပင်စည် (stem) သည် ပုံစံပြောင်းသောအခါ ပြောင်းလဲသွားသည်။</p>
            <p className="p-3 bg-gray-50 rounded-lg border border-gray-200">ဥပမာ: <b className="text-xl text-gray-900">かう</b> (kau), <b className="text-xl text-gray-900">かく</b> (kaku), <b className="text-xl text-gray-900">はなす</b> (hanasu), <b className="text-xl text-gray-900">まつ</b> (matsu)</p>
            <p className="text-yellow-800 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400"><b>ခြွင်းချက်:</b> အချို့ Verb များသည် 「える」 သို့မဟုတ် 「いる」 ဖြင့် ဆုံးသတ်သော်လည်း အုပ်စု ၁ တွင် ပါဝင်နေဆဲဖြစ်သည်။ ၎င်းတို့ကို အလွတ်ကျက်မှတ်ရန် လိုအပ်ပါသည်။ <br/>ဥပမာ: <b className="text-xl text-gray-900">かえる</b> (kaeru - ပြန်သည်), <b className="text-xl text-gray-900">はいる</b> (hairu - ဝင်သည်), <b className="text-xl text-gray-900">きる</b> (kiru - ဖြတ်သည်), <b className="text-xl text-gray-900">しる</b> (shiru - သိသည်)</p>
            
            <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">အုပ်စု ၂ (Ichidan Verbs / る-verbs)</h3>
            <p>Dictionary Form တွင် 「える」(eru) သို့မဟုတ် 「いる」(iru) ဖြင့် ဆုံးသတ်သော Verb အများစုသည် ဤအုပ်စုတွင် ပါဝင်သည်။ ၎င်းတို့၏ ပင်စည် (stem) သည် ပုံစံပြောင်းသည့်အခါ မပြောင်းလဲပါ။ အဆုံးမှ 「る」 ကို ဖြုတ်ပြီး ပုံစံသစ်၏အဆက်ကို ပေါင်းထည့်လိုက်ရုံသာ ဖြစ်သည်။</p>
            <p className="p-3 bg-gray-50 rounded-lg border border-gray-200">ဥပမာ: <b className="text-xl text-gray-900">たべる</b> (taberu), <b className="text-xl text-gray-900">みる</b> (miru), <b className="text-xl text-gray-900">おきる</b> (okiru), <b className="text-xl text-gray-900">ねる</b> (neru)</p>
            
            <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">အုပ်စု ၃ (Irregular Verbs)</h3>
            <p>ခေတ်သစ်ဂျပန်ဘာသာစကားတွင် ပုံစံမမှန်သော Verb (၂) ခုသာ ရှိသည်။ ၎င်းတို့၏ ပုံစံပြောင်းလဲပုံများသည် ထူးခြားပြီး အလွတ်ကျက်မှတ်ရန် လိုအပ်သည်။</p>
            <p className="p-3 bg-gray-50 rounded-lg border border-gray-200">ထို Verb နှစ်ခုမှာ: <b className="text-xl text-gray-900">する</b> (suru - ပြုလုပ်သည်) နှင့် <b className="text-xl text-gray-900">くる</b> (kuru - လာသည်) တို့ဖြစ်သည်။</p>
        </GuideSection>

        <GuideSection title="Dictionary Form မှ ပုံစံပြောင်းခြင်း">
            <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">ます (Masu) Form (ယဉ်ကျေးသောပုံစံ) သို့ ပြောင်းခြင်း</h3>
            <ul className="list-disc pl-6 space-y-2">
                <li><b>အုပ်စု ၁:</b> အဆုံးမှ 'u' သရသံကို 'i' သရသံသို့ ပြောင်းပြီး ます ပေါင်းပါ။ (ဥပမာ၊ か<b className="text-red-500">う</b> → か<b className="text-green-500">い</b>ます, の<b className="text-red-500">む</b> → の<b className="text-green-500">み</b>ます)</li>
                <li><b>အုပ်စု ၂:</b> အဆုံးမှ る ကို ဖြုတ်ပြီး ます ပေါင်းပါ။ (ဥပမာ၊ たべ<b className="text-red-500">る</b> → たべます)</li>
                <li><b>အုပ်စု ၃:</b> する → <b className="text-green-500">します</b>, くる → <b className="text-green-500">きます</b></li>
            </ul>

             <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">ない (Nai) Form (အငြင်းပုံစံ) သို့ ပြောင်းခြင်း</h3>
            <ul className="list-disc pl-6 space-y-2">
                <li><b>အုပ်စု ၁:</b> အဆုံးမှ 'u' သရသံကို 'a' သရသံသို့ ပြောင်းပြီး ない ပေါင်းပါ။ (ဥပမာ၊ か<b className="text-red-500">く</b> → か<b className="text-green-500">か</b>ない, よ<b className="text-red-500">ぶ</b> → よ<b className="text-green-500">ば</b>ない)</li>
                <li className="text-yellow-800 p-2 bg-yellow-50 rounded-md">ခြွင်းချက်: Verb သည် う ဖြင့် ဆုံးသတ်ပါက၊ あ အစား わ သို့ ပြောင်းပါ။ (ဥပမာ၊ か<b className="text-red-500">う</b> → か<b className="text-green-500">わ</b>ない)</li>
                <li><b>အုပ်စု ၂:</b> အဆုံးမှ る ကို ဖြုတ်ပြီး ない ပေါင်းပါ။ (ဥပမာ၊ み<b className="text-red-500">る</b> → みない)</li>
                <li><b>အုပ်စု ၃:</b> する → <b className="text-green-500">しない</b>, くる → <b className="text-green-500">こない</b></li>
                <li className="text-yellow-800 p-2 bg-yellow-50 rounded-md">အထူးခြွင်းချက်: ある (ရှိသည်) ၏ အငြင်းပုံစံမှာ ない ဖြစ်သည်။</li>
            </ul>

             <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">て (Te) Form သို့ ပြောင်းခြင်း</h3>
            <p>Te-form သည် အထူးသဖြင့် အုပ်စု ၁ Verb များအတွက် ရှုပ်ထွေးပါသည်။</p>
            <ul className="list-disc pl-6 space-y-2">
                 <li><b>အုပ်စု ၁ ၏ အဆုံးသတ်အလိုက်:</b>
                    <ul className="list-decimal pl-8 mt-2 space-y-1">
                        <li>う, つ, る → <b className="text-green-500">って</b> (ဥပမာ၊ かう → かって)</li>
                        <li>む, ぶ, ぬ → <b className="text-green-500">んで</b> (ဥပမာ၊ よむ → よんで)</li>
                        <li>く → <b className="text-green-500">いて</b> (ဥပမာ၊ きく → きいて) --- ခြွင်းချက်: いく → いって</li>
                        <li>ぐ → <b className="text-green-500">いで</b> (ဥပမာ၊ いそぐ → いそいで)</li>
                        <li>す → <b className="text-green-500">して</b> (ဥပမာ၊ はなす → はなして)</li>
                    </ul>
                 </li>
                <li><b>အုပ်စု ၂:</b> အဆုံးမှ る ကို ဖြုတ်ပြီး て ပေါင်းပါ။ (ဥပမာ၊ たべ<b className="text-red-500">る</b> → たべて)</li>
                <li><b>အုပ်စု ၃:</b> する → <b className="text-green-500">して</b>, くる → <b className="text-green-500">きて</b></li>
            </ul>

        </GuideSection>

        <GuideSection title="ဟိရာဂါန သရ ဇယား">
            <p>ဤဇယားသည် အုပ်စု ၁ ၏ ပုံစံပြောင်းလဲပုံများကို နားလည်ရန် အဓိကသော့ချက်ဖြစ်သည်။ <b>Nai form</b> ပြုလုပ်ရန်၊ <span className="p-1 bg-yellow-100 text-yellow-800 rounded-md font-bold">u-တိုင်</span> မှ <span className="p-1 bg-red-100 text-red-800 rounded-md font-bold">a-တိုင်</span> သို့ ရွှေ့ပါ။ <b>Masu form</b> ပြုလုပ်ရန်၊ <span className="p-1 bg-yellow-100 text-yellow-800 rounded-md font-bold">u-တိုင်</span> မှ <span className="p-1 bg-green-100 text-green-800 rounded-md font-bold">i-တိုင်</span> သို့ ရွှေ့ပါ။</p>
            <div className="mt-4">
                <HiraganaChart />
            </div>
        </GuideSection>
    </div>
  );
};

export default Guidebook;