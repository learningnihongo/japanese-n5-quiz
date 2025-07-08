
import React, { useState, useMemo } from 'react';
import { verbs } from '../data/verbs';

const VerbGuide: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVerbs = useMemo(() => {
    if (!searchTerm) {
      return verbs;
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    return verbs.filter(
      (verb) =>
        verb.dictionary.toLowerCase().includes(lowercasedTerm) ||
        verb.burmese.toLowerCase().includes(lowercasedTerm) ||
        verb.masu.toLowerCase().includes(lowercasedTerm) ||
        verb.te.toLowerCase().includes(lowercasedTerm) ||
        verb.nai.toLowerCase().includes(lowercasedTerm)
    );
  }, [searchTerm]);

  return (
    <div className="w-full p-1 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-2xl">
      <div className="w-full bg-slate-800 rounded-xl p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-center text-green-300 mb-4">ကြိယာပုံစံပြောင်းနည်း လမ်းညွှန်</h2>
        <div className="mb-6">
          <input
            type="text"
            placeholder="ရှာဖွေရန် (ဥပမာ: たべる or စားသည်)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border-2 border-slate-600 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
          />
        </div>

        {/* Desktop View: Table */}
        <div className="hidden md:block">
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full text-left bg-slate-900">
              <thead className="bg-slate-700">
                <tr>
                  <th className="p-3 text-sm font-semibold text-gray-300 tracking-wider">Dictionary</th>
                  <th className="p-3 text-sm font-semibold text-gray-300 tracking-wider">Masu</th>
                  <th className="p-3 text-sm font-semibold text-gray-300 tracking-wider">Te</th>
                  <th className="p-3 text-sm font-semibold text-gray-300 tracking-wider">Nai</th>
                  <th className="p-3 text-sm font-semibold text-gray-300 tracking-wider">မြန်မာအဓိပ္ပာယ်</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredVerbs.map((verb) => (
                  <tr key={verb.id} className="hover:bg-slate-800">
                    <td className="p-3 text-teal-300">{verb.dictionary}</td>
                    <td className="p-3">{verb.masu}</td>
                    <td className="p-3">{verb.te}</td>
                    <td className="p-3">{verb.nai}</td>
                    <td className="p-3 text-gray-400">{verb.burmese}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View: Cards */}
        <div className="md:hidden space-y-4">
          {filteredVerbs.map((verb) => (
            <div key={verb.id} className="p-4 bg-slate-900 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-300 mb-2">{verb.dictionary}</h3>
              <p className="text-gray-400 mb-3">{verb.burmese}</p>
              <div className="text-sm space-y-1 text-gray-300">
                  <p><span className="font-semibold w-16 inline-block text-gray-400">Masu:</span> {verb.masu}</p>
                  <p><span className="font-semibold w-16 inline-block text-gray-400">Te:</span> {verb.te}</p>
                  <p><span className="font-semibold w-16 inline-block text-gray-400">Nai:</span> {verb.nai}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerbGuide;
