import React, { useState } from 'react';
import { backendQuestions } from './data/questions';
import { CheckCircle2, XCircle, Code2, Play, FileJson, FolderOpen, RefreshCcw, Terminal, Info, Shuffle } from 'lucide-react';

const getInitialQuestions = () => {
  try {
    const saved = localStorage.getItem('backend_test_questions');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {}
  
  const shuffled = [...backendQuestions].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 10);
  localStorage.setItem('backend_test_questions', JSON.stringify(selected));
  return selected;
};

function App() {
  const [questions, setQuestions] = useState(getInitialQuestions);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const startNewTest = () => {
    const shuffled = [...backendQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    localStorage.setItem('backend_test_questions', JSON.stringify(selected));
    
    setQuestions(selected);
    setAnswers({});
    setResults({});
    setShowResult(false);
    setScore(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (questionId, value) => {
    if (showResult) return;
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const checkResults = () => {
    let correctCount = 0;
    const newResults = {};

    questions.forEach((q) => {
      const userAnswer = (answers[q.id] || '').trim().toLowerCase();
      
      if (!userAnswer) {
        newResults[q.id] = false;
        return;
      }

      const cleanAnswer = userAnswer.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, " ");

      const isCorrect = q.keys.some((key) => {
        return cleanAnswer.includes(key.toLowerCase());
      });

      newResults[q.id] = isCorrect;
      if (isCorrect) correctCount += 1;
    });

    setResults(newResults);
    setScore(correctCount);
    setShowResult(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const calculatePercentage = () => {
    return (score / 10) * 100;
  };

  const answeredCount = Object.keys(answers).filter(k => answers[k].trim() !== '').length;

  return (
    <div className="min-h-screen bg-[#000c18] text-[#6688cc] font-mono flex flex-col md:flex-row relative">
      {/* VS Code Abyss Activity Bar */}
      <div className="hidden md:flex w-12 bg-[#000814] flex-col items-center py-4 space-y-6 border-r border-[#001f3f]">
        <FolderOpen className="text-[#3b536a] hover:text-[#7794bc] cursor-pointer w-6 h-6 transition-colors" />
        <Code2 className="text-[#225588] w-6 h-6" />
        <Terminal className="text-[#3b536a] hover:text-[#7794bc] cursor-pointer w-6 h-6 transition-colors" />
      </div>

      {/* VS Code Abyss Sidebar */}
      <div className="w-full md:w-64 bg-[#001222] border-r border-[#001f3f] flex flex-col">
        <div className="p-3 text-xs font-semibold tracking-wider text-[#3b536a] uppercase">
          Explorer
        </div>
        <div className="px-3 py-1 flex items-center space-x-2 bg-[#001e36] text-[#7794bc] text-sm">
          <FileJson className="w-4 h-4 text-[#e6b450]" />
          <span>backend_test.json</span>
        </div>
        
        <div className="mt-8 px-4 flex flex-col gap-4">
          <div>
            <div className="text-xs text-[#3b536a] uppercase mb-3">Progress</div>
            <div className="w-full bg-[#000c18] rounded-full h-2.5 border border-[#001f3f]">
              <div 
                className="bg-[#225588] h-full rounded-full transition-all duration-300" 
                style={{ width: `${(answeredCount / 10) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm mt-2 text-[#4a6b8c]">{answeredCount} / 10 javob yozildi</p>
          </div>

          <button 
            onClick={startNewTest}
            className="flex items-center justify-center gap-2 bg-[#001e36] hover:bg-[#002b4d] text-[#7794bc] text-sm px-3 py-2.5 rounded transition-colors mt-4 w-full border border-[#002b4d]"
          >
            <Shuffle className="w-4 h-4" />
            <span>Boshqa savollar</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#000c18] pb-32">
        {/* Tabs */}
        <div className="flex bg-[#001222] text-sm items-center justify-between pr-4 border-b border-[#001f3f]">
          <div className="flex items-center space-x-2 px-4 py-2 bg-[#000c18] text-[#7794bc] border-t border-[#225588]">
            <FileJson className="w-4 h-4 text-[#e6b450]" />
            <span>backend_test.json</span>
          </div>

          {/* Topbar Yangilash */}
          <button 
            onClick={startNewTest}
            className="flex items-center gap-2 text-[#4a6b8c] hover:text-[#7794bc] transition-colors text-xs bg-[#001e36] hover:bg-[#002b4d] px-3 py-1.5 rounded"
          >
            <RefreshCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Savollarni yangilash</span>
          </button>
        </div>

        {/* Editor Content */}
        <div className="p-6 md:p-10 max-w-4xl mx-auto w-full">
          <div className="mb-8 font-mono">
            <span className="text-[#225588]">const</span> <span className="text-[#99bbff]">backendTest</span> <span className="text-[#6688cc]">=</span> <span className="text-[#225588]">async</span> <span className="text-[#6688cc]">()</span> <span className="text-[#225588]">=&gt;</span> <span className="text-[#6688cc]">{'{'}</span>
            <br/>
            <span className="text-[#3b536a] ml-4">// Node.js va Backend bo'yicha 10 ta savol</span>
            <br/>
            <span className="text-[#3b536a] ml-4">// O'z so'zlaringiz bilan javob yozing (Katta-kichik harflar ahamiyatsiz)</span>
          </div>

          <div className="space-y-12 pl-4 border-l border-[#001f3f] hover:border-[#225588] transition-colors">
            {questions.map((q, index) => {
              const userAnswer = answers[q.id] || '';
              const isEvaluated = showResult;
              const isCorrect = results[q.id];

              let inputBorder = "border-[#001f3f] focus:border-[#225588]";
              let inputBg = "bg-[#001222]";
              let textClass = "text-[#7794bc]";

              if (isEvaluated) {
                if (isCorrect) {
                  inputBorder = "border-[#22aa44]";
                  inputBg = "bg-[#001810]";
                  textClass = "text-[#44cc66]";
                } else {
                  inputBorder = "border-[#dd3344]";
                  inputBg = "bg-[#220005]";
                  textClass = "text-[#ff5566]";
                }
              }

              return (
                <div key={q.id} className="relative group">
                  <div className="absolute -left-10 text-[#3b536a] text-sm hidden md:block mt-1">
                    {index + 1}
                  </div>

                  <h3 className="text-lg font-semibold text-[#99bbff] mb-4">
                    <span className="text-[#e6b450]">Q{index + 1}:</span> {q.question}
                  </h3>
                  
                  <div className="relative">
                    <textarea
                      value={userAnswer}
                      onChange={(e) => handleInputChange(q.id, e.target.value)}
                      readOnly={showResult}
                      placeholder="Javobingizni shu yerga matn shaklida yozing..."
                      className={`w-full min-h-[80px] p-4 rounded-md border outline-none resize-y transition-all ${inputBg} ${inputBorder} ${textClass} font-sans shadow-inner`}
                    />
                    {isEvaluated && isCorrect && (
                      <CheckCircle2 className="absolute top-4 right-4 w-6 h-6 text-[#22aa44]" />
                    )}
                    {isEvaluated && !isCorrect && (
                      <XCircle className="absolute top-4 right-4 w-6 h-6 text-[#dd3344]" />
                    )}
                  </div>

                  {isEvaluated && (
                    <div className="mt-3 p-3 rounded bg-[#000814] border border-[#001f3f] flex items-start gap-3">
                      <Info className="w-5 h-5 text-[#225588] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-[#225588] font-bold mb-1">To'g'ri (ideal) javob:</p>
                        <p className="text-sm text-[#7794bc] font-sans">{q.idealAnswer}</p>
                        {!isCorrect && (
                          <p className="text-xs text-[#dd3344] mt-2 opacity-80">
                            * Javobingizda kutilgan asosiy kalit so'zlar qatnashmadi.
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <span className="text-[#6688cc]">{'}'}</span><span className="text-[#6688cc]">;</span>
          </div>

          {/* Natijalar paneli */}
          {showResult && (
            <div className="mt-12 p-6 rounded-lg bg-[#001222] border border-[#001f3f] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: calculatePercentage() >= 70 ? '#22aa44' : '#dd3344' }}></div>
              <h2 className="text-2xl font-bold mb-4 text-[#99bbff]">Natijalar (Console Output)</h2>
              
              <div className="bg-[#000814] p-4 rounded border border-[#001f3f] font-mono text-sm space-y-2">
                <p className="text-[#3b536a]">&gt; npm run test:backend --analyze-keywords</p>
                <p className="text-[#e6b450]">Executing AI Keyword Match tests...</p>
                <p className="text-[#7794bc]">Jami savollar: <span className="text-[#22aa44]">10</span></p>
                <p className="text-[#7794bc]">To'g'ri javoblar: <span className="text-[#22aa44]">{score}</span></p>
                <p className="text-[#7794bc]">Noto'g'ri javoblar: <span className="text-[#dd3344]">{10 - score}</span></p>
                <p className="pt-2 border-t border-[#001f3f] text-[#7794bc]">
                  Foiz: <span className="text-[#22aa44]">{calculatePercentage()}%</span>
                </p>
                
                <div className="mt-4 pt-4">
                  {calculatePercentage() >= 70 ? (
                    <div className="text-[#22aa44] flex items-center gap-2 text-lg">
                      <CheckCircle2 /> <span>PASS: Siz {calculatePercentage()}% bilan testdan o'tdingiz! Tabriklaymiz!</span>
                    </div>
                  ) : (
                    <div className="text-[#dd3344] flex items-center gap-2 text-lg">
                      <XCircle /> <span>FAIL: Siz {calculatePercentage()}% to'pladingiz. O'tish bali 70%. Qayta urinib ko'ring.</span>
                    </div>
                  )}
                </div>
              </div>

              <button 
                onClick={startNewTest}
                className="mt-6 flex items-center justify-center gap-2 bg-[#225588] hover:bg-[#1a4066] text-white px-5 py-3 rounded transition-colors w-full font-bold shadow-lg"
              >
                <RefreshCcw className="w-5 h-5" />
                <span>YANGI SAVOLLAR BILAN QAYTA BOSHLASH</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Tekshirish Button Floating */}
      {!showResult && answeredCount > 0 && (
        <div className="fixed bottom-8 right-8 z-50">
          <button 
            onClick={checkResults}
            className="flex items-center gap-2 bg-[#225588] hover:bg-[#1a4066] shadow-[0_0_20px_rgba(34,85,136,0.5)] text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105"
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
