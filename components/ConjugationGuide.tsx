import React from 'react';

const GuideSection: React.FC<{ title: string; children: React.ReactNode; color: string }> = ({ title, children, color }) => (
  <div className="mb-8">
    <h3 className={`text-2xl font-bold text-center mb-4 ${color}`}>{title}</h3>
    <div className="bg-slate-900/70 p-4 sm:p-6 rounded-lg space-y-4">
      {children}
    </div>
  </div>
);

const ConjugationGuide: React.FC = () => {
  return (
    <div className="w-full p-1 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-2xl">
      <div className="w-full bg-slate-800 rounded-xl p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-center text-amber-300 mb-6">ကြိယာပုံစံပြောင်းနည်း အသေးစိတ်</h2>

        <GuideSection title="ဂျပန်ကြိယာ Group ၃ ခု" color="text-amber-300">
          <p>ဂျပန်ကြိယာများကို ပုံစံပြောင်းရာတွင် လွယ်ကူစေရန် Group (၃) ခုခွဲခြားထားပါသည်။ Group တစ်ခုချင်းစီတွင် ပုံစံပြောင်းလဲရန် သီးသန့်စည်းမျဉ်းများရှိပါသည်။</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><b>Group 1 (Godan / う-verbs):</b> အများဆုံးကြိယာအမျိုးအစားဖြစ်ပြီး၊ ပုံစံပြောင်းနည်းစည်းမျဉ်းများစွာရှိသည်။</li>
            <li><b>Group 2 (Ichidan / る-verbs):</b> ပုံစံပြောင်းရန် အလွယ်ကူဆုံးအမျိုးအစားဖြစ်သည်။</li>
            <li><b>Group 3 (Irregular Verbs):</b> သီးသန့်စည်းမျဉ်းမရှိဘဲ အလွတ်ကျက်မှတ်ရမည့် ကြိယာများ (၂ခုသာ) ဖြစ်သည်။</li>
          </ul>
        </GuideSection>

        <GuideSection title="Group ခွဲခြားနည်း" color="text-amber-300">
          <h4 className="text-xl font-semibold text-orange-300 mb-2">Group 2 (る-verbs) ကို အရင်ရှာပါ</h4>
          <p>Dictionary Form ၏အဆုံးသတ်စာလုံးသည် 「る」 (ru) ဖြင့်ဆုံးပြီး၊ 「る」 ၏ရှေ့စာလုံးသည် ဟီရာဂါနာ၏ <b>(い)단</b> သို့မဟုတ် <b>(え)단</b> သံဖြစ်လျှင် ၎င်းသည် Group 2 ဖြစ်သည်။</p>
          <p className="mt-2 text-gray-400">ဥပမာ: たべ<b className="text-white">る</b> (ရှေ့က べ သည် え-သံ), み<b className="text-white">る</b> (ရှေ့က み သည် い-သံ)</p>
          
          <h4 className="text-xl font-semibold text-orange-300 mt-4 mb-2">Group 3 (Irregular Verbs) ကို မှတ်ပါ</h4>
          <p>Group 3 တွင် ကြိယာ (၂)လုံးသာရှိသည်: 「する」(suru) နှင့် 「くる」(kuru)။</p>

          <h4 className="text-xl font-semibold text-orange-300 mt-4 mb-2">ကျန်ရှိသောကြိယာများမှာ Group 1 ဖြစ်သည်</h4>
          <p>အပေါ်က Group 2 နှင့် Group 3 မဟုတ်သော ကြိယာအားလုံးသည် Group 1 (う-verbs) ဖြစ်သည်။</p>
           <p className="mt-2 text-gray-400">ဥပမာ: か<b className="text-white">く</b>, の<b className="text-white">む</b>, あ<b className="text-white">う</b>, はし<b className="text-white">る</b> (ခြွင်းချက်)</p>
           <p className="mt-2 text-sm text-red-400"><b>*ခြွင်းချက်:*</b> 「る」ဖြင့်ဆုံးပြီး ရှေ့တွင် い/え သံရှိသော်လည်း Group 1 တွင်ပါဝင်သော ကြိယာအချို့ရှိသည်။ ဥပမာ: かえ<b>る</b> (ပြန်သည်), はい<b>る</b> (ဝင်သည်), き<b>る</b> (ဖြတ်သည်)။</p>
        </GuideSection>
        
        {/* Conjugation Rules */}
        <div className="mt-10">
            <h2 className="text-3xl font-bold text-center text-amber-300 mb-6">ပုံစံပြောင်းနည်း စည်းမျဉ်းများ</h2>
            
            {/* Group 1 */}
            <GuideSection title="Group 1 (う-verbs) ပုံစံပြောင်းနည်း" color="text-green-300">
                <p>Dictionary Form ၏အဆုံးသတ် ဟီရာဂါနာ (う-သံ) ကိုပြောင်းလဲရပါမည်။</p>
                <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left bg-slate-900 rounded-lg">
                        <thead className="bg-slate-700">
                            <tr>
                                <th className="p-3">Form</th>
                                <th className="p-3">စည်းမျဉ်း</th>
                                <th className="p-3">ဥပမာ (かく → ရေးသည်)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-800">
                                <td className="p-3 font-bold">Masu Form</td>
                                <td className="p-3">အဆုံးသတ် う-သံကို い-သံသို့ပြောင်းပြီး 「ます」 ပေါင်းပါ။</td>
                                <td className="p-3">か<span className="text-red-400">く</span> → か<span className="text-green-400">き</span>ます</td>
                            </tr>
                            <tr className="border-b border-slate-800">
                                <td className="p-3 font-bold">Nai Form</td>
                                <td className="p-3">အဆုံးသတ် う-သံကို あ-သံသို့ပြောင်းပြီး 「ない」 ပေါင်းပါ။ <br/>(う ဖြင့်ဆုံးလျှင် わ သို့ပြောင်းပါ)</td>
                                <td className="p-3">か<span className="text-red-400">く</span> → か<span className="text-green-400">か</span>ない<br/>あ<span className="text-red-400">う</span> → あ<span className="text-green-400">わ</span>ない</td>
                            </tr>
                             <tr className="border-b border-slate-800">
                                <td className="p-3 font-bold">Te Form</td>
                                <td className="p-3" colSpan={2}>
                                    <p className="mb-2">အဆုံးသတ်စာလုံးပေါ်မူတည်၍ ပြောင်းလဲမှုများစွာရှိသည်။</p>
                                    <table className="w-full text-sm">
                                        <thead className="bg-slate-800">
                                            <tr><th className="px-2 py-1">Ending</th><th className="px-2 py-1">New Ending</th><th className="px-2 py-1">Example</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr><td>う, つ, る</td><td>って</td><td>かう → かって</td></tr>
                                            <tr><td>む, ぶ, ぬ</td><td>んで</td><td>のむ → のんで</td></tr>
                                            <tr><td>く</td><td>いて</td><td>かく → かいて</td></tr>
                                            <tr><td>ぐ</td><td>いで</td><td>いそぐ → いそいで</td></tr>
                                            <tr><td>す</td><td>して</td><td>はなす → はなして</td></tr>
                                            <tr><td colSpan={3} className="pt-2 text-red-400">*ခြွင်းချက်: いく → いって</td></tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </GuideSection>

            {/* Group 2 */}
            <GuideSection title="Group 2 (る-verbs) ပုံစံပြောင်းနည်း" color="text-cyan-300">
                 <p>အလွန်လွယ်ကူပါသည်။ Dictionary Form ၏အဆုံးသတ် 「る」 ကိုဖြုတ်ပြီး လိုအပ်သောပုံစံကိုပေါင်းထည့်ပါ။</p>
                <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left bg-slate-900 rounded-lg">
                        <thead className="bg-slate-700">
                            <tr>
                                <th className="p-3">Form</th>
                                <th className="p-3">စည်းမျဉ်း</th>
                                <th className="p-3">ဥပမာ (たべる → စားသည်)</th>
                            </tr>
                        </thead>
                        <tbody>
                             <tr className="border-b border-slate-800">
                                <td className="p-3 font-bold">Masu Form</td>
                                <td className="p-3">「る」 ဖြုတ်ပြီး 「ます」 ပေါင်းပါ။</td>
                                <td className="p-3">たべ<span className="text-red-400">る</span> → たべ<span className="text-green-400">ます</span></td>
                            </tr>
                             <tr className="border-b border-slate-800">
                                <td className="p-3 font-bold">Nai Form</td>
                                <td className="p-3">「る」 ဖြုတ်ပြီး 「ない」 ပေါင်းပါ။</td>
                                <td className="p-3">たべ<span className="text-red-400">る</span> → たべ<span className="text-green-400">ない</span></td>
                            </tr>
                             <tr className="border-b border-slate-800">
                                <td className="p-3 font-bold">Te Form</td>
                                <td className="p-3">「る」 ဖြုတ်ပြီး 「て」 ပေါင်းပါ။</td>
                                <td className="p-3">たべ<span className="text-red-400">る</span> → たべ<span className="text-green-400">て</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </GuideSection>

             {/* Group 3 */}
            <GuideSection title="Group 3 (Irregular Verbs) ပုံစံပြောင်းနည်း" color="text-purple-300">
                 <p>ဤကြိယာ (၂) လုံးကို အလွတ်ကျက်မှတ်ရပါမည်။</p>
                <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left bg-slate-900 rounded-lg">
                        <thead className="bg-slate-700">
                            <tr>
                                <th className="p-3">Dictionary</th>
                                <th className="p-3">Masu Form</th>
                                <th className="p-3">Nai Form</th>
                                <th className="p-3">Te Form</th>
                            </tr>
                        </thead>
                        <tbody>
                             <tr className="border-b border-slate-800">
                                <td className="p-3 font-bold">する</td>
                                <td className="p-3 text-green-400">します</td>
                                <td className="p-3 text-green-400">しない</td>
                                <td className="p-3 text-green-400">して</td>
                            </tr>
                             <tr className="border-b border-slate-800">
                                <td className="p-3 font-bold">くる</td>
                                <td className="p-3 text-green-400">きます</td>
                                <td className="p-3 text-green-400">こない</td>
                                <td className="p-3 text-green-400">きて</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </GuideSection>
        </div>
      </div>
    </div>
  );
};

export default ConjugationGuide;
