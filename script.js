const verbs = [
    { masu: 'てつだいます', jisho: 'てつだう', te: 'てつだって', nai: 'てつだわない', meaning: 'ကူညီသည်' },
    { masu: 'みます', jisho: 'みる', te: 'みて', nai: 'みない', meaning: 'ကြည့်သည်။မြင်သည်။' },
    { masu: 'よやくします', jisho: 'よやくする', te: 'よやくして', nai: 'よやくしない', meaning: 'ကြိုတင်မှာသည်' },
    { masu: 'むかえます', jisho: 'むかえる', te: 'むかえて', nai: 'むかえない', meaning: 'ကြိုဆိုသည်' },
    { masu: 'よびます', jisho: 'よぶ', te: 'よんで', nai: 'よばない', meaning: 'ခေါ်သည်' },
    { masu: 'つれていきます', jisho: 'つれていく', te: 'つれていって', nai: 'つれていかない', meaning: 'ခေါ်သွားသည်' },
    { masu: 'つれてきます', jisho: 'つれてくる', te: 'つれてきて', nai: 'つれてこない', meaning: 'ခေါ်လာသည်' },
    { masu: 'かします', jisho: 'かす', te: 'かして', nai: 'かさない', meaning: 'ချေးငှားသည်' },
    { masu: 'かります', jisho: 'かりる', te: 'かりて', nai: 'かりない', meaning: 'ချေးယူသည်' },
    { masu: 'まがります', jisho: 'まがる', te: 'まがって', nai: 'まがらない', meaning: 'ချိုးကွေ့သည်' },
    { masu: 'はなします', jisho: 'はなす', te: 'はなして', nai: 'はなさない', meaning: 'စကားပြောသည်' },
    { masu: 'はじめます', jisho: 'はじめる', te: 'はじめて', nai: 'はじめない', meaning: 'စတင်သည်' },
    { masu: 'かんがえます', jisho: 'かんがえる', te: 'かんがえて', nai: 'かんがえない', meaning: 'စဉ်းစားသည်' },
    { masu: 'あつめます', jisho: 'あつめる', te: 'あつめて', nai: 'あつめない', meaning: 'စုဆောင်းသည်' },
    { masu: 'まちます', jisho: 'まつ', te: 'まって', nai: 'またない', meaning: 'စောင့်သည်' },
    { masu: 'たべます', jisho: 'たべる', te: 'たべて', nai: 'たべない', meaning: 'စားသည်' },
    { masu: 'あらいます', jisho: 'あらう', te: 'あらって', nai: 'あらわない', meaning: 'ဆေးကြောသည်' },
    { masu: 'すいます', jisho: 'すう', te: 'すって', nai: 'すわない', meaning: 'ဆေးလိပ်သောက်သည်' },
    { masu: 'つきます', jisho: 'つく', te: 'ついて', nai: 'つかない', meaning: 'ဆိုက်ရောက်သည်' },
    { masu: 'かぶります', jisho: 'かぶる', te: 'かぶって', nai: 'かぶらない', meaning: 'ဆောင်းသည်။(ဦးထုပ်ကို)' },
    { masu: 'かいものします', jisho: 'かいものする', te: 'かいものして', nai: 'かいものしない', meaning: 'ဈေးဝယ်သည်' },
    { masu: 'とります', jisho: 'とる', te: 'とって', nai: 'とらない', meaning: 'ဓာတ်ပုံရိုက်သည်' },
    { masu: 'のぼります', jisho: 'のぼる', te: 'のぼって', nai: 'のぼらない', meaning: 'တက်သည်' },
    { masu: 'かけます', jisho: 'かける', te: 'かけて', nai: 'かけない', meaning: 'တပ်သည်၊ချိတ်သည်(မျက်မှန်ကို)' },
    { masu: 'とめます', jisho: 'とめる', te: 'とめて', nai: 'とめない', meaning: 'တားသည်။ရပ်သည်။' },
    { masu: 'ひきます', jisho: 'ひく', te: 'ひいて', nai: 'ひかない', meaning: 'တီးခတ်သည်' },
    { masu: 'とまります', jisho: 'とまる', te: 'とまって', nai: 'とまらない', meaning: 'တည်းခိုသည်' },
    { masu: 'あいます', jisho: 'あう', te: 'あって', nai: 'あわない', meaning: 'တွေ့သည်' },
    { masu: 'しょくじします', jisho: 'しょくじする', te: 'しょくじして', nai: 'しょくじしない', meaning: 'ထမင်းစားသည်' },
    { masu: 'おきます', jisho: 'おく', te: 'おいて', nai: 'おかない', meaning: 'ထားသည်' },
    { masu: 'でます', jisho: 'でる', te: 'でて', nai: 'でない', meaning: 'ထွက်သည်' },
    { masu: 'すわります', jisho: 'すわる', te: 'すわって', nai: 'すわらない', meaning: 'ထိုင်သည်' },
    { masu: 'おもいます', jisho: 'おもう', te: 'おもって', nai: 'おもわない', meaning: 'ထင်မြင်သည်။ယူဆသည်။တွေးတောသည်။' },
    { masu: 'おしえます', jisho: 'おしえる', te: 'おしえて', nai: 'おしえない', meaning: 'သင်ပေးသည်' },
    { masu: 'ならいます', jisho: 'ならう', te: 'ならって', nai: 'ならわない', meaning: 'သင်ယူသည်' },
    { masu: 'そうじします', jisho: 'そうじする', te: 'そうじして', nai: 'そうじしない', meaning: 'သန့်ရှင်းရေးလုပ်သည်' },
    { masu: 'きをつけます', jisho: 'きをつける', te: 'きをつけて', nai: 'きをつけない', meaning: 'သတိထားသည်' },
    { masu: 'いきます', jisho: 'いく', te: 'いって', nai: 'いかない', meaning: 'သွားသည်' },
    { masu: 'のみます', jisho: 'のむ', te: 'のんで', nai: 'のまない', meaning: 'သောက်သည်' },
    { masu: 'しります', jisho: 'しる', te: 'しって', nai: 'しらない', meaning: 'သိသည်' },
    { masu: 'うたいます', jisho: 'うたう', te: 'うたって', nai: 'うたわない', meaning: 'သီချင်းဆိုသည်' },
    { masu: 'いれます', jisho: 'いれる', te: 'いれて', nai: 'いれない', meaning: 'သွင်းသည်' },
    { masu: 'けんきゅうします', jisho: 'けんきゅうする', te: 'けんきゅうして', nai: 'けんきゅうしない', meaning: 'သုတေသနပြုလုပ်သည်' },
    { masu: 'つかれます', jisho: 'つかれる', te: 'つかれて', nai: 'つかれない', meaning: 'ပင်ပန်းသည်' },
    { masu: 'おくります', jisho: 'おくる', te: 'おくって', nai: 'おくらない', meaning: 'ပို့သည်' },
    { masu: 'もちます', jisho: 'もつ', te: 'もって', nai: 'もたない', meaning: 'ပိုင်ဆိုင်သည်။သယ်သည်။ကိုင်ထားသည်။' },
    { masu: 'だします', jisho: 'だす', te: 'だして', nai: 'ださない', meaning: 'ပစ္စည်းထုတ်သည်။အစီရင်ခံစာတင်သည်။' },
    { masu: 'あげます', jisho: 'あげる', te: 'あげて', nai: 'あげない', meaning: 'ပေးသည်' },
    { masu: 'くれます', jisho: 'くれる', te: 'くれて', nai: 'くれない', meaning: 'ပေးသည် (မိမိအားပေးသည်)' },
    { masu: 'はらいます', jisho: 'はらう', te: 'はらって', nai: 'はらわない', meaning: 'ပေးချေသည်' },
    { masu: 'おわります', jisho: 'おわる', te: 'おわって', nai: 'おわらない', meaning: 'ပြီးဆုံးသည်' },
    { masu: 'かえります', jisho: 'かえる', te: 'かえって', nai: 'かえらない', meaning: 'ပြန်သည်' },
    { masu: 'かえします', jisho: 'かえす', te: 'かえして', nai: 'かえさない', meaning: 'ပြန်ပေးသည်' },
    { masu: 'のりかえます', jisho: 'のりかえる', te: 'のりかえて', nai: 'のりかえない', meaning: 'ပြောင်းစီးသည်' },
    { masu: 'します', jisho: 'する', te: 'して', nai: 'しない', meaning: 'ပြုလုပ်သည်' },
    { masu: 'つくります', jisho: 'つくる', te: 'つくって', nai: 'つくらない', meaning: 'ပြုလုပ်သည်။တည်ဆောက်သည်။' },
    { masu: 'しゅうりします', jisho: 'しゅうりする', te: 'しゅうりして', nai: 'しゅうりしない', meaning: 'ပြုပြင်သည်။ပြင်ဆင်သည်။' },
    { masu: 'いいます', jisho: 'いう', te: 'いって', nai: 'いわない', meaning: 'ပြောသည်' },
    { masu: 'きります', jisho: 'きる', te: 'きって', nai: 'きらない', meaning: 'ဖြတ်သည်။ညှပ်သည်။' },
    { masu: 'わたります', jisho: 'わたる', te: 'わたって', nai: 'わたらない', meaning: 'ဖြတ်ကူးသည်' },
    { masu: 'なります', jisho: 'なる', te: 'なって', nai: 'ならない', meaning: 'ဖြစ်သည်။ဖြစ်လာသည်။ကျရောက်သည်။' },
    { masu: 'よみます', jisho: 'よむ', te: 'よんで', nai: 'よまない', meaning: 'ဖတ်သည်။' },
    { masu: 'わすれます', jisho: 'わすれる', te: 'わすれて', nai: 'わすれない', meaning: 'မေ့သည်' },
    { masu: 'たちます', jisho: 'たつ', te: 'たって', nai: 'たたない', meaning: 'မတ်တပ်ရပ်သည်' },
    { masu: 'うんてんします', jisho: 'うんてんする', te: 'うんてんして', nai: 'うんてんしない', meaning: 'မောင်းနှင်သည်' },
    { masu: 'けします', jisho: 'けす', te: 'けして', nai: 'けさない', meaning: 'မီးပိတ်သည်' },
    { masu: 'つけます', jisho: 'つける', te: 'つけて', nai: 'つけない', meaning: 'မီးဖွင့်သည်' },
    { masu: 'しょうかいします', jisho: 'しょうかいする', te: 'しょうかいして', nai: 'しょうかいしない', meaning: 'မိတ်ဆက်သည်' },
    { masu: 'こぴーします', jisho: 'こぴーする', te: 'こぴーして', nai: 'こぴーしない', meaning: 'မိတ္တူကူးသည်' },
    { masu: 'うまれます', jisho: 'うまれる', te: 'うまれて', nai: 'うまれない', meaning: 'မွေးဖွားလာသည်' },
    { masu: 'おぼえます', jisho: 'おぼえる', te: 'おぼえて', nai: 'おぼえない', meaning: 'မှတ်မိသည်။မှတ်သည်။' },
    { masu: 'とります', jisho: 'とる', te: 'とって', nai: 'とらない', meaning: 'ယူသည်' },
    { masu: 'もっていきます', jisho: 'もっていく', te: 'もっていって', nai: 'もっていかない', meaning: 'ယူသွားသည်(သက်မဲ့ပစ္စည်း)' },
    { masu: 'もってきます', jisho: 'もってくる', te: 'もってきて', nai: 'もってこない', meaning: 'ယူလာသည်(သက်မဲ့ပစ္စည်း)' },
    { masu: 'とります', jisho: 'とる', te: 'とって', nai: 'とらない', meaning: 'ရသည်။ယူသည်။' },
    { masu: 'およぎます', jisho: 'およぐ', te: 'およいで', nai: 'およがない', meaning: 'ရေကူးသည်' },
    { masu: 'あびます', jisho: 'あびる', te: 'あびて', nai: 'あびない', meaning: 'ရေချိုးသည်' },
    { masu: 'かきます', jisho: 'かく', te: 'かいて', nai: 'かかない', meaning: 'ရေးသည်' },
    { masu: 'うります', jisho: 'うる', te: 'うって', nai: 'うらない', meaning: 'ရောင်းသည်' },
    { masu: 'のります', jisho: 'のる', te: 'のって', nai: 'のらない', meaning: 'ရထားကို စီးသည်' },
    { masu: 'おります', jisho: 'おりる', te: 'おりて', nai: 'おりない', meaning: 'ရထားပေါ်မှဆင်းသည်' },
    { masu: 'ふります', jisho: 'ふる', te: 'ふって', nai: 'ふらない', meaning: 'ရွာသည်' },
    { masu: 'しらべます', jisho: 'しらべる', te: 'しらべて', nai: 'しらべない', meaning: 'ရှာဖွေသည်။စစ်ဆေးသည်။' },
    { masu: 'あります', jisho: 'ある', te: 'あって', nai: 'ない', meaning: 'ရှိသည် (သက်မဲ့)' },
    { masu: 'います', jisho: 'いる', te: 'いて', nai: 'いない', meaning: 'ရှိသည် (သက်ရှိ)' },
    { masu: 'まけます', jisho: 'まける', te: 'まけて', nai: 'まけない', meaning: 'ရှုံးနိမ့်သည်' },
    { masu: 'あるきます', jisho: 'あるく', te: 'あるいて', nai: 'あるかない', meaning: 'လမ်းလျှောက်သည်။' },
    { masu: 'きます', jisho: 'くる', te: 'きて', nai: 'こない', meaning: 'လာသည်' },
    { masu: 'いります', jisho: 'いる', te: 'いって', nai: 'いらない', meaning: 'လိုအပ်သည်' },
    { masu: 'あんないします', jisho: 'あんないする', te: 'あんないして', nai: 'あんないしない', meaning: 'လိုက်လံရှင်းပြသည်' },
    { masu: 'かえます', jisho: 'かえる', te: 'かえて', nai: 'かえない', meaning: 'လဲလှယ်သည်။ဖလှယ်သည်။' },
    { masu: 'べんきょうします', jisho: 'べんきょうする', te: 'べんきょうして', nai: 'べんきょうしない', meaning: 'လေ့လာသည်' },
    { masu: 'いそぎます', jisho: 'いそぐ', te: 'いそいで', nai: 'いそがない', meaning: 'လောသည်။အလျင်စလိုလုပ်သည်။' },
    { masu: 'すてます', jisho: 'すてる', te: 'すてて', nai: 'すてない', meaning: 'လွှင့်ပစ်သည်' },
    { masu: 'かいます', jisho: 'かう', te: 'かって', nai: 'かわない', meaning: 'ဝယ်သည်' },
    { masu: 'はいります', jisho: 'はいる', te: 'はいって', nai: 'はいらない', meaning: 'ဝင်သည်' },
    { masu: 'きます', jisho: 'きる', te: 'きて', nai: 'きない', meaning: 'ဝတ်ဆင်သည်(ခါးအထက်ပိုင်း)' },
    { masu: 'はきます', jisho: 'はく', te: 'はいて', nai: 'はかない', meaning: 'ဝတ်ဆင်သည်(ခါးအောက်ပိုင်း)' },
    { masu: 'やすみます', jisho: 'やすむ', te: 'やすんで', nai: 'やすまない', meaning: 'အနားယူသည်' },
    { masu: 'ざんぎょうします', jisho: 'ざんぎょうする', te: 'ざんぎょうして', nai: 'ざんぎょうしない', meaning: 'အလုပ်အချိန်ပိုဆင်းသည်' },
    { masu: 'はたらきます', jisho: 'はたらく', te: 'はたらいて', nai: 'はたらかない', meaning: 'အလုပ်လုပ်သည်' },
    { masu: 'つかいます', jisho: 'つかう', te: 'つかって', nai: 'つかわない', meaning: 'အသုံးပြုသည်' },
    { masu: 'でかけます', jisho: 'でかける', te: 'でかけて', nai: 'でかけない', meaning: 'အပြင်ထွက်သည်' },
    { masu: 'せんたくします', jisho: 'せんたくする', te: 'せんたくして', nai: 'せんたくしない', meaning: 'အဝတ်လျှော်သည်' },
    { masu: 'ねます', jisho: 'ねる', te: 'ねて', nai: 'ねない', meaning: 'အိပ်သည်' },
    { masu: 'おきます', jisho: 'おきる', te: 'おきて', nai: 'おきない', meaning: 'အိပ်ရာထသည်' }
];

let currentQuestionIndex = 0;
let score = 0;
let currentVerb;
let currentQuestionType;
let shuffledVerbs = [];
let currentUser = { name: '', level: '' };

// UI Elements
const userFormPanel = document.getElementById('user-form-panel');
const mainGameContainer = document.getElementById('main-game-container');
const userNameInput = document.getElementById('user-name-input');
const levelInput = document.getElementById('level-input');
const startGameBtn = document.getElementById('start-game-btn');

const scoreEl = document.getElementById('score');
const questionCountEl = document.getElementById('question-count');
const verbStartEl = document.getElementById('verb-start');
const formTypeEl = document.getElementById('form-type');
const verbMeaningEl = document.getElementById('verb-meaning');
const flashcardOptionsEl = document.getElementById('flashcard-options');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const quizMainView = document.getElementById('quiz-main-view');
const endGameScreen = document.getElementById('end-game-screen');
const finalScoreEl = document.getElementById('final-score');
const scorePercentageEl = document.getElementById('score-percentage');
const restartBtn = document.getElementById('restart-btn');
const congratsMessageEl = document.getElementById('congrats-message');
const trophyIconEl = document.getElementById('trophy-icon');
const tabQuiz = document.getElementById('tab-quiz');
const tabGuide = document.getElementById('tab-guide');
const panelQuiz = document.getElementById('panel-quiz');
const panelGuide = document.getElementById('panel-guide');

const questionTypes = [
    { start: 'masu', ask: 'te', ask_name: 'て形' },
    { start: 'masu', ask: 'nai', ask_name: 'ない形' },
    { start: 'masu', ask: 'jisho', ask_name: '辞書形' },
    { start: 'jisho', ask: 'te', ask_name: 'て形' },
    { start: 'jisho', ask: 'nai', ask_name: 'ない形' },
    { start: 'jisho', ask: 'masu', ask_name: 'ます形' }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initializeGame() {
    currentUser.name = userNameInput.value.trim() || 'အမည်မသိ';
    currentUser.level = levelInput.value.trim();

    userFormPanel.classList.add('hidden');
    mainGameContainer.classList.remove('hidden');

    startGame();
}

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    shuffledVerbs = shuffleArray([...verbs]);
    scoreEl.textContent = score;
    questionCountEl.textContent = `0 / ${verbs.length}`;

    endGameScreen.classList.add('hidden');
    quizMainView.classList.remove('hidden');

    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= verbs.length) {
        endGame();
        return;
    }

    currentVerb = shuffledVerbs[currentQuestionIndex];
    currentQuestionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

    verbStartEl.textContent = currentVerb[currentQuestionType.start];
    formTypeEl.textContent = currentQuestionType.ask_name;
    verbMeaningEl.textContent = `(${currentVerb.meaning})`;

    questionCountEl.textContent = `${currentQuestionIndex + 1} / ${verbs.length}`;

    feedbackEl.textContent = '';
    nextBtn.classList.add('hidden');

    generateFlashcardOptions();
}

function generateFlashcardOptions() {
    flashcardOptionsEl.innerHTML = '';
    const correctAnswer = currentVerb[currentQuestionType.ask];
    let options = [correctAnswer];

    // Generate 3 distractors
    while (options.length < 4) {
        const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
        const distractor = randomVerb[currentQuestionType.ask];
        if (!options.includes(distractor) && distractor !== correctAnswer) {
            options.push(distractor);
        }
    }

    shuffleArray(options).forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('flashcard-btn', 'w-full', 'p-4', 'text-lg', 'font-semibold', 'rounded-lg', 'flex', 'items-center', 'justify-center');
        button.addEventListener('click', () => checkAnswer(option, button));
        flashcardOptionsEl.appendChild(button);
    });
}

function checkAnswer(selectedAnswer, selectedButton) {
    const correctAnswer = currentVerb[currentQuestionType.ask];

    // Disable all buttons
    const buttons = flashcardOptionsEl.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
        // Highlight the correct answer
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        }
    });

    if (selectedAnswer === correctAnswer) {
        score++;
        scoreEl.textContent = score;
        feedbackEl.innerHTML = `<span class="feedback-correct">အဖြေမှန်</span>`;
    } else {
        selectedButton.classList.add('incorrect');
        feedbackEl.innerHTML = `<span class="feedback-incorrect">အဖြေမှားသည်</span>`;
    }

    nextBtn.classList.remove('hidden');
    currentQuestionIndex++;
}

function endGame() {
    quizMainView.classList.add('hidden');

    const percentage = Math.round((score / verbs.length) * 100);

    finalScoreEl.textContent = `${score} / ${verbs.length}`;
    scorePercentageEl.textContent = `( ${percentage}% )`;

    congratsMessageEl.textContent = `ဂုဏ်ယူပါတယ်, ${currentUser.name}!`;

    if (percentage >= 80) {
        trophyIconEl.textContent = '🏆';
    } else if (percentage >= 50) {
        trophyIconEl.textContent = '👍';
    } else {
        trophyIconEl.textContent = '💪';
    }

    endGameScreen.classList.remove('hidden');

    // Trigger confetti
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });
    }
}

function resetToTitleScreen() {
    mainGameContainer.classList.add('hidden');
    userFormPanel.classList.remove('hidden');
    userNameInput.value = '';
    levelInput.value = '';
}

// Tab switching logic
tabQuiz.addEventListener('click', () => {
    tabQuiz.classList.add('active');
    tabGuide.classList.remove('active');
    panelQuiz.classList.remove('hidden');
    panelGuide.classList.add('hidden');
});

tabGuide.addEventListener('click', () => {
    tabGuide.classList.add('active');
    tabQuiz.classList.remove('active');
    panelGuide.classList.remove('hidden');
    panelQuiz.classList.add('hidden');
});

// Event Listeners
startGameBtn.addEventListener('click', initializeGame);
nextBtn.addEventListener('click', loadQuestion);
restartBtn.addEventListener('click', resetToTitleScreen);