import React, { useState } from 'react';
import { backendQuestions } from './data/questions';
import { CheckCircle2, XCircle, Code2, Play, FileJson, FolderOpen, RefreshCcw, Terminal, Info, Shuffle, Moon, Sun, ListTodo, Keyboard } from 'lucide-react';

const STORAGE_KEY = 'backend_test_questions_v3';

const getInitialQuestions = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {}
  
  const shuffled = [...backendQuestions].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 10);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
  return selected;
};

function App() {
  const [questions, setQuestions] = useState(getInitialQuestions);

  const [score, setScore] = useState(() => {
    return parseInt(localStorage.getItem('backend_test_score') || '0', 10);
  });
  const [idealScore, setIdealScore] = useState(() => {
    return parseInt(localStorage.getItem('backend_test_ideal_score') || '0', 10);
  });
  
  // Persist user test data states
  const [answers, setAnswers] = useState(() => {
    try {
      const saved = localStorage.getItem('backend_test_answers');
      return saved ? JSON.parse(saved) : {};
    } catch (e) { return {}; }
  });
  const [results, setResults] = useState(() => {
    try {
      const saved = localStorage.getItem('backend_test_results');
      return saved ? JSON.parse(saved) : {};
    } catch (e) { return {}; }
  });
  const [showResult, setShowResult] = useState(() => {
    return localStorage.getItem('backend_test_show_result') === 'true';
  });

  // Retrieve states from localStorage if available
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('backend_test_theme') || 'abyss';
  });
  
  const [testMode, setTestMode] = useState(() => {
    return localStorage.getItem('backend_test_mode') || 'text';
  });

  // Update the wrappers to also persist changes
  const toggleTheme = () => {
    const nextTheme = theme === 'abyss' ? 'light' : 'abyss';
    setTheme(nextTheme);
    localStorage.setItem('backend_test_theme', nextTheme);
  };

  const toggleTestMode = () => {
    const nextMode = testMode === 'text' ? 'options' : 'text';
    setTestMode(nextMode);
    localStorage.setItem('backend_test_mode', nextMode);
  };

  const startNewTest = () => {
    const shuffled = [...backendQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
    
    // Clear data stores on reset
    localStorage.removeItem('backend_test_answers');
    localStorage.removeItem('backend_test_results');
    localStorage.setItem('backend_test_show_result', 'false');
    localStorage.setItem('backend_test_score', '0');
    localStorage.setItem('backend_test_ideal_score', '0');

    setQuestions(selected);
    setAnswers({});
    setResults({});
    setShowResult(false);
    setScore(0);
    setIdealScore(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (questionId, value) => {
    if (showResult) return;
    setAnswers((prev) => {
      const next = {
        ...prev,
        [questionId]: value,
      };
      localStorage.setItem('backend_test_answers', JSON.stringify(next));
      return next;
    });
  };

  const checkResults = () => {
    let correctCount = 0;
    let idealCount = 0;
    const newResults = {};

    questions.forEach((q) => {
      const userAnswer = answers[q.id];
      
      if (!userAnswer || (typeof userAnswer === 'string' && !userAnswer.trim())) {
        newResults[q.id] = { isCorrect: false, isIdeal: false };
        return;
      }

      let isCorrect = false;
      let isIdeal = false;

      if (testMode === 'text') {
        const cleanAnswer = userAnswer.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, " ");
        const matchedKeys = q.keys.filter((key) => cleanAnswer.includes(key.toLowerCase()));
        
        if (matchedKeys.length > 0) {
          isCorrect = true;
          // Agar kamida 2 ta kalit so'z topilsa ideal hisoblanadi (Bonus 10% = jami 20%)
          if (matchedKeys.length >= 2) {
            isIdeal = true;
          }
        }
      } else {
        // Variantli tekshirish
        isCorrect = userAnswer === q.answer;
      }

      newResults[q.id] = { isCorrect, isIdeal };
      if (isCorrect) correctCount += 1;
      if (isIdeal) idealCount += 1;
    });

    // Update persistent store with computed stats
    localStorage.setItem('backend_test_results', JSON.stringify(newResults));
    localStorage.setItem('backend_test_show_result', 'true');
    localStorage.setItem('backend_test_score', correctCount.toString());
    localStorage.setItem('backend_test_ideal_score', idealCount.toString());

    setResults(newResults);
    setScore(correctCount);
    setIdealScore(idealCount);
    setShowResult(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const calculatePercentage = () => {
    let total = (score * 10) + (idealScore * 10);
    return total > 100 ? 100 : total;
  };

  const answeredCount = Object.keys(answers).filter(k => {
    if (!answers[k]) return false;
    return typeof answers[k] === 'string' ? answers[k].trim() !== '' : true;
  }).length;

  // Theming o'zgaruvchilari
  const isLight = theme === 'light';
  
  const colors = {
    bgMain: isLight ? 'bg-white' : 'bg-[#000c18]',
    textMain: isLight ? 'text-[#333333]' : 'text-[#7794bc]',
    sidebar: isLight ? 'bg-[#f3f3f3]' : 'bg-[#001222]',
    activityBar: isLight ? 'bg-[#2c2c2c]' : 'bg-[#000814]',
    border: isLight ? 'border-[#e5e5e5]' : 'border-[#001f3f]',
    tabActive: isLight ? 'bg-white border-t-[#007fd4]' : 'bg-[#000c18] border-t-[#225588]',
    tabInactive: isLight ? 'bg-[#ececec]' : 'bg-[#001222]',
    primary: isLight ? 'text-[#007fd4]' : 'text-[#225588]',
    primaryBg: isLight ? 'bg-[#007fd4]' : 'bg-[#225588]',
    primaryHover: isLight ? 'hover:bg-[#0060a0]' : 'hover:bg-[#1a4066]',
    string: isLight ? 'text-[#a31515]' : 'text-[#99bbff]',
    keyword: isLight ? 'text-[#0000ff]' : 'text-[#225588]',
    comment: isLight ? 'text-[#008000]' : 'text-[#3b536a]',
    inputBg: isLight ? 'bg-white' : 'bg-[#001222]',
    inputBorder: isLight ? 'border-[#cccccc]' : 'border-[#001f3f]',
    success: isLight ? 'text-[#008000]' : 'text-[#22aa44]',
    successBg: isLight ? 'bg-[#e6ffe6]' : 'bg-[#001810]',
    error: isLight ? 'text-[#e51400]' : 'text-[#dd3344]',
    errorBg: isLight ? 'bg-[#ffe6e6]' : 'bg-[#220005]',
    optionHover: isLight ? 'hover:bg-[#f0f0f0]' : 'hover:bg-[#00182b]',
  };

  return (
    <div className={`min-h-screen ${colors.bgMain} ${colors.textMain} font-mono flex flex-col md:flex-row relative transition-colors duration-300`}>
      {/* Activity Bar */}
      <div className={`hidden md:flex w-12 ${colors.activityBar} flex-col items-center py-4 space-y-6 border-r ${colors.border}`}>
        <FolderOpen className="text-gray-400 hover:text-white cursor-pointer w-6 h-6 transition-colors" />
        <Code2 className="text-[#007fd4] w-6 h-6" />
        <Terminal className="text-gray-400 hover:text-white cursor-pointer w-6 h-6 transition-colors" />
      </div>

      {/* Sidebar */}
      <div className={`w-full md:w-64 ${colors.sidebar} border-r ${colors.border} flex flex-col transition-colors duration-300`}>
        <div className="p-3 text-xs font-semibold tracking-wider uppercase opacity-70">
          Explorer
        </div>
        <div className={`px-3 py-1 flex items-center space-x-2 text-sm ${isLight ? 'bg-[#e4e6f1]' : 'bg-[#001e36]'}`}>
          <FileJson className="w-4 h-4 text-[#e6b450]" />
          <span>backend_test.json</span>
        </div>
        
        <div className="mt-8 px-4 flex flex-col gap-4">
          <div>
            <div className="text-xs uppercase mb-3 opacity-70">Progress</div>
            <div className={`w-full rounded-full h-2.5 border ${colors.border} ${isLight ? 'bg-gray-200' : 'bg-[#000c18]'}`}>
              <div 
                className={`${colors.primaryBg} h-full rounded-full transition-all duration-300`} 
                style={{ width: `${(answeredCount / 10) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm mt-2 opacity-80">{answeredCount} / 10 javob berildi</p>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <button 
              onClick={toggleTestMode}
              className={`flex items-center justify-center gap-2 ${isLight ? 'bg-white hover:bg-gray-100 text-gray-800' : 'bg-[#001e36] hover:bg-[#002b4d] text-[#7794bc]'} text-sm px-3 py-2.5 rounded transition-colors w-full border ${colors.border}`}
            >
              {testMode === 'text' ? <ListTodo className="w-4 h-4" /> : <Keyboard className="w-4 h-4" />}
              <span>{testMode === 'text' ? "Variant (A,B,C) ga o'tish" : "Yozma (Input) ga o'tish"}</span>
            </button>

            <button 
              onClick={startNewTest}
              className={`flex items-center justify-center gap-2 ${isLight ? 'bg-white hover:bg-gray-100 text-gray-800' : 'bg-[#001e36] hover:bg-[#002b4d] text-[#7794bc]'} text-sm px-3 py-2.5 rounded transition-colors w-full border ${colors.border}`}
            >
              <Shuffle className="w-4 h-4" />
              <span>Boshqa savollar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col h-screen overflow-y-auto ${colors.bgMain} pb-32 transition-colors duration-300`}>
        {/* Tabs */}
        <div className={`flex text-sm items-center justify-between pr-4 border-b ${colors.tabInactive} ${colors.border}`}>
          <div className={`flex items-center space-x-2 px-4 py-2 border-t-2 ${colors.tabActive}`}>
            <FileJson className="w-4 h-4 text-[#e6b450]" />
            <span>backend_test.json</span>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={toggleTheme}
              className={`flex items-center gap-2 transition-colors text-xs px-3 py-1.5 rounded border ${colors.border} ${isLight ? 'bg-white hover:bg-gray-100' : 'bg-[#001e36] hover:bg-[#002b4d]'}`}
            >
              {isLight ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isLight ? 'Abyss Mode' : 'Light Mode'}</span>
            </button>
            <button 
              onClick={startNewTest}
              className={`flex items-center gap-2 transition-colors text-xs px-3 py-1.5 rounded border ${colors.border} ${isLight ? 'bg-white hover:bg-gray-100' : 'bg-[#001e36] hover:bg-[#002b4d]'}`}
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Savollarni yangilash</span>
            </button>
          </div>
        </div>

        {/* Editor Content */}
        <div className="p-6 md:p-10 max-w-4xl mx-auto w-full">
          <div className="mb-8 font-mono">
            <span className={colors.keyword}>const</span> <span className={colors.string}>backendTest</span> <span className={colors.textMain}>=</span> <span className={colors.keyword}>async</span> <span className={colors.textMain}>()</span> <span className={colors.keyword}>=&gt;</span> <span className={colors.textMain}>{'{'}</span>
            <br/>
            <span className={colors.comment + " ml-4"}>// Node.js va Backend bo'yicha 10 ta savol</span>
            <br/>
            <span className={colors.comment + " ml-4"}>// Hozirgi rejim: {testMode === 'text' ? "O'z so'zlaringiz bilan javob yozing" : "To'g'ri variantni tanlang"}</span>
          </div>

          <div className={`space-y-12 pl-4 border-l ${colors.border} transition-colors`}>
            {questions.map((q, index) => {
              const userAnswer = answers[q.id] || '';
              const isEvaluated = showResult;
              const { isCorrect, isIdeal } = results[q.id] || { isCorrect: false, isIdeal: false };

              let currentBorder = colors.inputBorder;
              let currentBg = colors.inputBg;
              let currentText = colors.textMain;

              if (isEvaluated) {
                if (isCorrect) {
                  currentBorder = isLight ? 'border-[#008000]' : 'border-[#22aa44]';
                  currentBg = colors.successBg;
                  currentText = colors.success;
                } else {
                  currentBorder = isLight ? 'border-[#e51400]' : 'border-[#dd3344]';
                  currentBg = colors.errorBg;
                  currentText = colors.error;
                }
              }

              return (
                <div key={q.id} className="relative group">
                  <div className={`absolute -left-10 opacity-50 text-sm hidden md:block mt-1`}>
                    {index + 1}
                  </div>

                  <h3 className={`text-lg font-semibold ${colors.string} mb-4`}>
                    <span className="text-[#e6b450]">Q{index + 1}:</span> {q.question}
                  </h3>
                  
                  {/* TEXT MODE */}
                  {testMode === 'text' && (
                    <div className="relative">
                      <textarea
                        value={userAnswer}
                        onChange={(e) => handleInputChange(q.id, e.target.value)}
                        readOnly={showResult}
                        placeholder="Javobingizni shu yerga matn shaklida yozing..."
                        className={`w-full min-h-[80px] p-4 rounded-md border outline-none resize-y transition-all ${currentBg} ${currentBorder} ${currentText} font-sans shadow-sm`}
                      />
                      {isEvaluated && isCorrect && (
                        <CheckCircle2 className={`absolute top-4 right-4 w-6 h-6 ${colors.success}`} />
                      )}
                      {isEvaluated && !isCorrect && (
                        <XCircle className={`absolute top-4 right-4 w-6 h-6 ${colors.error}`} />
                      )}
                    </div>
                  )}

                  {/* OPTIONS MODE */}
                  {testMode === 'options' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {q.options.map((option, optIdx) => {
                        const isSelected = userAnswer === option;
                        const isOptionCorrect = option === q.answer;
                        
                        let optBg = colors.inputBg;
                        let optBorder = colors.inputBorder;
                        let optText = colors.textMain;
                        let ringColor = isLight ? 'border-[#007fd4]' : 'border-[#225588]';
                        
                        if (isEvaluated) {
                          if (isOptionCorrect) {
                            optBg = colors.successBg;
                            optBorder = isLight ? 'border-[#008000]' : 'border-[#22aa44]';
                            optText = colors.success;
                          } else if (isSelected && !isOptionCorrect) {
                            optBg = colors.errorBg;
                            optBorder = isLight ? 'border-[#e51400]' : 'border-[#dd3344]';
                            optText = colors.error;
                          }
                        } else if (isSelected) {
                          optBg = isLight ? 'bg-[#e6f4ff]' : 'bg-[#002b4d]';
                          optBorder = isLight ? 'border-[#007fd4]' : 'border-[#225588]';
                          optText = isLight ? 'text-[#007fd4]' : 'text-white';
                        }

                        return (
                          <div 
                            key={optIdx}
                            onClick={() => handleInputChange(q.id, option)}
                            className={`p-3 rounded-md border cursor-pointer transition-all duration-200 ${!isEvaluated && colors.optionHover} flex items-start gap-3 ${optBg} ${optBorder}`}
                          >
                            <div className="mt-1">
                              {isEvaluated && isOptionCorrect && <CheckCircle2 className={`w-4 h-4 ${colors.success}`} />}
                              {isEvaluated && isSelected && !isOptionCorrect && <XCircle className={`w-4 h-4 ${colors.error}`} />}
                              {!isEvaluated && (
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? ringColor : 'border-gray-400'}`}>
                                  {isSelected && <div className={`w-2 h-2 rounded-full ${colors.primaryBg}`}></div>}
                                </div>
                              )}
                            </div>
                            <span className={`text-sm ${optText} font-sans`}>{option}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* IDEAL ANSWER (Ko'rsatish) */}
                  {isEvaluated && (
                    <div className={`mt-3 p-3 rounded ${isLight ? 'bg-[#f8f9fa]' : 'bg-[#000814]'} border ${colors.border} flex flex-col gap-2`}>
                      {isIdeal && (
                        <div className="flex items-center gap-2 text-yellow-500 font-bold bg-yellow-500/10 w-fit px-2 py-1 rounded">
                          🌟 Ideal Javob! (+10% Bonus)
                        </div>
                      )}
                      <div className="flex items-start gap-3">
                        <Info className={`w-5 h-5 ${colors.primary} flex-shrink-0 mt-0.5`} />
                        <div>
                          <p className={`text-sm ${colors.primary} font-bold mb-1`}>To'g'ri (ideal) javob:</p>
                          <p className={`text-sm ${colors.textMain} font-sans opacity-90`}>{q.idealAnswer}</p>
                          {!isCorrect && testMode === 'text' && (
                            <p className={`text-xs ${colors.error} mt-2 opacity-80`}>
                              * Javobingizda kutilgan asosiy kalit so'zlar qatnashmadi.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <span className={colors.textMain}>{'}'}</span><span className={colors.textMain}>;</span>
          </div>

          {/* RESULTS PANEL */}
          {showResult && (
            <div className={`mt-12 p-6 rounded-lg ${colors.sidebar} border ${colors.border} shadow-2xl relative overflow-hidden`}>
              <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: calculatePercentage() >= 70 ? (isLight ? '#008000' : '#22aa44') : (isLight ? '#e51400' : '#dd3344') }}></div>
              <h2 className={`text-2xl font-bold mb-4 ${colors.textMain}`}>Natijalar (Console Output)</h2>
              
              <div className={`${colors.activityBar} p-4 rounded border ${colors.border} font-mono text-sm space-y-2`}>
                <p className="opacity-70">&gt; npm run test:backend --mode={testMode}</p>
                <p className="text-[#e6b450]">Executing tests...</p>
                <p className={isLight ? "text-gray-200" : "text-[#7794bc]"}>Jami savollar: <span className={colors.success}>10</span></p>
                <p className={isLight ? "text-gray-200" : "text-[#7794bc]"}>Asosiy to'g'ri javoblar: <span className={colors.success}>{score} ta ({score * 10}%)</span></p>
                {idealScore > 0 && (
                  <p className="text-yellow-500">🌟 Ideal javoblar (Bonus): <span>{idealScore} ta (+{idealScore * 10}%)</span></p>
                )}
                <p className={isLight ? "text-gray-200" : "text-[#7794bc]"}>Noto'g'ri javoblar: <span className={colors.error}>{10 - score}</span></p>
                <p className={`pt-2 border-t ${colors.border} ${isLight ? "text-gray-200" : "text-[#7794bc]"}`}>
                  Jami foiz: <span className={colors.success}>{calculatePercentage()}%</span>
                </p>
                
                <div className="mt-4 pt-4">
                  {calculatePercentage() >= 70 ? (
                    <div className={`${colors.success} flex items-center gap-2 text-lg`}>
                      <CheckCircle2 /> <span>PASS: Siz {calculatePercentage()}% bilan testdan o'tdingiz! Tabriklaymiz!</span>
                    </div>
                  ) : (
                    <div className={`${colors.error} flex items-center gap-2 text-lg`}>
                      <XCircle /> <span>FAIL: Siz {calculatePercentage()}% to'pladingiz. O'tish bali 70%. Qayta urinib ko'ring.</span>
                    </div>
                  )}
                </div>
              </div>

              <button 
                onClick={startNewTest}
                className={`mt-6 flex items-center justify-center gap-2 ${colors.primaryBg} ${colors.primaryHover} text-white px-5 py-3 rounded transition-colors w-full font-bold shadow-lg`}
              >
                <RefreshCcw className="w-5 h-5" />
                <span>YANGI SAVOLLAR BILAN QAYTA BOSHLASH</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Check Button */}
      {!showResult && answeredCount > 0 && (
        <div className="fixed bottom-8 right-8 z-50">
          <button 
            onClick={checkResults}
            className={`flex items-center gap-2 ${colors.primaryBg} ${colors.primaryHover} shadow-[0_0_20px_rgba(0,0,0,0.2)] text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105`}
          >
            <Play className="w-5 h-5 fill-current" />
            TESTNI TEKSHIRISH
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
