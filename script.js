// Traduções da interface
const translations = {
  pt: {
    title: '🍼 Tradutor de Fala de Bebê',
    langLabel: 'Selecione o idioma:',
    inputLabel: 'Digite uma frase:',
    textLangLabel: 'Idioma do texto:',
    radioPt: 'Português',
    radioEn: 'Inglês',
    btnTranslate: 'DECIFRAR',
    btnReset: 'RETORNAR',
    resultTitle: '📊 Resultado da Tradução',
    placeholder: 'Digite seu texto aqui...',
    // Traduções para os passos do resultado
    originalText: 'Texto Original',
    originalTextDesc: 'Entrada fornecida pelo usuário antes de qualquer transformação.',
    step: 'Passo',
    onomatopoeia: 'Substituição por Onomatopeias e Palavras de Bebê',
    onomatopoeiaDesc: 'Substituição de palavras por sons e termos que bebês realmente usam no dia a dia.',
    simplification: 'Simplificação Fonética',
    simplificationDesc: 'Substituição de sons difíceis por equivalentes mais fáceis de pronunciar.',
    before: 'Antes',
    after: 'Depois',
    substitutions: 'Substituições realizadas',
    rulesApplied: 'Regras aplicadas',
    finalTranslation: 'Tradução Final em Fala de Bebê'
  },
  en: {
    title: '🍼 Baby Talk Translator',
    langLabel: 'Select language:',
    inputLabel: 'Enter a sentence:',
    textLangLabel: 'Text language:',
    radioPt: 'Portuguese',
    radioEn: 'English',
    btnTranslate: 'DECIPHER',
    btnReset: 'RETURN',
    resultTitle: '📊 Translation Result',
    placeholder: 'Type your text here...',
    // Translations for result steps
    originalText: 'Original Text',
    originalTextDesc: 'User input before any transformation.',
    step: 'Step',
    onomatopoeia: 'Onomatopoeia and Baby Words Substitution',
    onomatopoeiaDesc: 'Replacing words with sounds and terms that babies actually use in everyday life.',
    simplification: 'Phonetic Simplification',
    simplificationDesc: 'Replacing difficult sounds with easier-to-pronounce equivalents.',
    before: 'Before',
    after: 'After',
    substitutions: 'Substitutions made',
    rulesApplied: 'Rules applied',
    finalTranslation: 'Final Baby Talk Translation'
  }
};

// Elementos DOM
const elements = {
  languageSelect: document.getElementById('languageSelect'),
  inputText: document.getElementById('inputText'),
  translateBtn: document.getElementById('translateBtn'),
  resetBtn: document.getElementById('resetBtn'),
  resultSection: document.getElementById('resultSection'),
  resultContent: document.getElementById('resultContent'),
  mainTitle: document.getElementById('mainTitle'),
  langLabel: document.getElementById('langLabel'),
  inputLabel: document.getElementById('inputLabel'),
  textLangLabel: document.getElementById('textLangLabel'),
  radioPt: document.getElementById('radioPt'),
  radioEn: document.getElementById('radioEn'),
  btnTranslate: document.getElementById('btnTranslate'),
  btnReset: document.getElementById('btnReset'),
  resultTitle: document.getElementById('resultTitle')
};

// Atualizar idioma da interface
function updateInterfaceLanguage() {
  const lang = elements.languageSelect.value;
  const t = translations[lang];

  elements.mainTitle.textContent = t.title;
  elements.langLabel.textContent = t.langLabel;
  elements.inputLabel.textContent = t.inputLabel;
  elements.textLangLabel.textContent = t.textLangLabel;
  elements.radioPt.textContent = t.radioPt;
  elements.radioEn.textContent = t.radioEn;
  elements.btnTranslate.textContent = t.btnTranslate;
  elements.btnReset.textContent = t.btnReset;
  elements.resultTitle.textContent = t.resultTitle;
  elements.inputText.placeholder = t.placeholder;
}

// Dicionário de substituições para Português (onomatopeias e palavras comuns de bebê)
const portugueseSubstitutions = {
  cachorro: 'au au',
  cachorros: 'au au',
  cachorrinho: 'au au',
  cão: 'au au',
  gato: 'miau',
  gatos: 'miau',
  gatinho: 'miau',
  vaca: 'mu',
  vacas: 'mu',
  boi: 'mu',
  pato: 'quá quá',
  patos: 'quá quá',
  patinho: 'quá quá',
  galinha: 'có có',
  galinhas: 'có có',
  passarinho: 'piu piu',
  pássaro: 'piu piu',
  passarinhos: 'piu piu',
  água: 'ága',
  leite: 'tetê',
  mamãe: 'mamã',
  mãe: 'mamã',
  papai: 'papá',
  pai: 'papá',
  vovó: 'vóvó',
  vovô: 'vôvô',
  comer: 'papá',
  comida: 'papá',
  dormir: 'ninã',
  sono: 'ninã',
  brinquedo: 'doidô',
  carro: 'vum vum',
  carros: 'vum vum',
  carrinho: 'vum vum'
};

// Dicionário de substituições para Inglês
const englishSubstitutions = {
  dog: 'woof woof',
  dogs: 'woof woof',
  doggy: 'woof woof',
  puppy: 'woof woof',
  cat: 'meow',
  cats: 'meow',
  kitty: 'meow',
  cow: 'moo',
  cows: 'moo',
  duck: 'quack quack',
  ducks: 'quack quack',
  bird: 'tweet tweet',
  birds: 'tweet tweet',
  chicken: 'cluck cluck',
  water: 'wawa',
  milk: 'moo moo',
  bottle: 'baba',
  mother: 'mama',
  mom: 'mama',
  mommy: 'mama',
  father: 'dada',
  dad: 'dada',
  daddy: 'dada',
  food: 'num num',
  eat: 'num num',
  sleep: 'nighty night',
  car: 'vroom vroom',
  cars: 'vroom vroom',
  toy: 'toy toy'
};

// Regras de simplificação para Português (aplicadas DEPOIS das substituições)
const portugueseSimplificationRules = [
  // Simplificação de dígrafos e sons complexos
  {
    pattern: /lh/gi,
    replacement: 'i',
    descriptionPt: 'Simplificação do dígrafo "lh" para "i"',
    descriptionEn: 'Simplification of digraph "lh" to "i"'
  },
  {
    pattern: /nh/gi,
    replacement: 'ni',
    descriptionPt: 'Simplificação do dígrafo "nh" para "ni"',
    descriptionEn: 'Simplification of digraph "nh" to "ni"'
  },
  {
    pattern: /ch/gi,
    replacement: 'x',
    descriptionPt: 'Simplificação do dígrafo "ch" para "x"',
    descriptionEn: 'Simplification of digraph "ch" to "x"'
  },
  {
    pattern: /rr/gi,
    replacement: 'h',
    descriptionPt: 'Simplificação de "rr" para "h"',
    descriptionEn: 'Simplification of "rr" to "h"'
  },
  {
    pattern: /r(?=[aeiouáéíóú])/gi,
    replacement: 'h',
    descriptionPt: 'Simplificação de "r" antes de vogal para "h"',
    descriptionEn: 'Simplification of "r" before vowel to "h"'
  },
  {
    pattern: /r\b/gi,
    replacement: '',
    descriptionPt: 'Remoção de "r" no final das palavras',
    descriptionEn: 'Removal of "r" at word endings'
  },
  {
    pattern: /l\b/gi,
    replacement: '',
    descriptionPt: 'Remoção de "l" no final das palavras',
    descriptionEn: 'Removal of "l" at word endings'
  },
  {
    pattern: /s\b/gi,
    replacement: '',
    descriptionPt: 'Remoção de "s" no final das palavras (simplificação de plural)',
    descriptionEn: 'Removal of "s" at word endings (plural simplification)'
  }
];

// Regras de simplificação para Inglês
const englishSimplificationRules = [
  {
    pattern: /th/gi,
    replacement: 'd',
    descriptionPt: 'Substituição de "th" por "d"',
    descriptionEn: 'Substitution of "th" with "d"'
  },
  {
    pattern: /r(?=[aeiou])/gi,
    replacement: 'w',
    descriptionPt: 'Substituição de "r" antes de vogal por "w"',
    descriptionEn: 'Substitution of "r" before vowel with "w"'
  },
  {
    pattern: /l(?=[aeiou])/gi,
    replacement: 'w',
    descriptionPt: 'Substituição de "l" antes de vogal por "w"',
    descriptionEn: 'Substitution of "l" before vowel with "w"'
  },
  {
    pattern: /ing\b/gi,
    replacement: 'in',
    descriptionPt: 'Simplificação de terminação "-ing" para "-in"',
    descriptionEn: 'Simplification of "-ing" ending to "-in"'
  },
  {
    pattern: /er\b/gi,
    replacement: 'a',
    descriptionPt: 'Simplificação de terminação "-er" para "-a"',
    descriptionEn: 'Simplification of "-er" ending to "-a"'
  },
  {
    pattern: /ck/gi,
    replacement: 'k',
    descriptionPt: 'Simplificação de "ck" para "k"',
    descriptionEn: 'Simplification of "ck" to "k"'
  }
];

// Aplicar substituições de dicionário
function applyDictionarySubstitutions(text, dictionary, steps) {
  let result = text;
  const changes = [];

  // Criar regex para cada palavra do dicionário (word boundary)
  for (const [original, replacement] of Object.entries(dictionary)) {
    const regex = new RegExp(`\\b${original}\\b`, 'gi');
    const matches = result.match(regex);

    if (matches) {
      changes.push({ original, replacement, count: matches.length });
      result = result.replace(regex, replacement);
    }
  }

  if (changes.length > 0) {
    steps.push({
      step: steps.length,
      title: 'Substituição por Onomatopeias e Palavras de Bebê',
      description: 'Substituição de palavras por sons e termos que bebês realmente usam no dia a dia.',
      before: text,
      after: result,
      changes: changes
    });
  }

  return result;
}

// Aplicar regras de simplificação
function applySimplificationRules(text, rules, steps, language, uiLang) {
  let result = text;
  const appliedRules = [];

  rules.forEach(rule => {
    const before = result;
    result = result.replace(rule.pattern, rule.replacement);

    if (before !== result) {
      appliedRules.push({
        description: uiLang === 'pt' ? rule.descriptionPt : rule.descriptionEn,
        before: before,
        after: result
      });
    }
  });

  if (appliedRules.length > 0) {
    steps.push({
      step: steps.length,
      title: 'Simplificação Fonética',
      description: 'Substituição de sons difíceis por equivalentes mais fáceis de pronunciar.',
      rules: appliedRules,
      before: text,
      after: result
    });
  }

  return result;
}

// Traduzir para fala de bebê
function translateToBabyTalk(text, language, uiLang) {
  const steps = [];

  steps.push({
    step: 0,
    title: 'Texto Original',
    description: 'Entrada fornecida pelo usuário antes de qualquer transformação.',
    content: text
  });

  let result = text;

  // Passo 1: Aplicar substituições de dicionário (onomatopeias)
  if (language === 'pt') {
    result = applyDictionarySubstitutions(result, portugueseSubstitutions, steps);
    result = applySimplificationRules(result, portugueseSimplificationRules, steps, language, uiLang);
  } else {
    result = applyDictionarySubstitutions(result, englishSubstitutions, steps);
    result = applySimplificationRules(result, englishSimplificationRules, steps, language, uiLang);
  }

  return { result, steps };
}

// Renderizar resultado
function renderResult(translation, uiLang) {
  const { result, steps } = translation;
  const t = translations[uiLang];

  let html = '';

  // Mostrar passos
  steps.forEach((step, index) => {
    if (step.step === 0) {
      html += `
                <div class="result-step">
                    <h3>📝 ${t.originalText}</h3>
                    <p>${t.originalTextDesc}</p>
                    <p><code>${step.content}</code></p>
                </div>
            `;
    } else if (step.changes) {
      // Passo de substituições
      html += `
                <div class="result-step">
                    <h3>🔄 ${t.step} ${step.step}: ${t.onomatopoeia}</h3>
                    <p>${t.onomatopoeiaDesc}</p>
                    <p><strong>${t.before}:</strong> <code>${step.before}</code></p>
                    <p><strong>${t.after}:</strong> <code>${step.after}</code></p>
                    <p><strong>${t.substitutions}:</strong></p>
                    <ul style="margin-left: 20px; margin-top: 5px;">
                        ${step.changes
                          .map(
                            c => `
                            <li><code>${c.original}</code> → <code>${c.replacement}</code> (${c.count}x)</li>
                        `
                          )
                          .join('')}
                    </ul>
                </div>
            `;
    } else if (step.rules) {
      // Passo de simplificação
      html += `
                <div class="result-step">
                    <h3>🔄 ${t.step} ${step.step}: ${t.simplification}</h3>
                    <p>${t.simplificationDesc}</p>
                    <p><strong>${t.before}:</strong> <code>${step.before}</code></p>
                    <p><strong>${t.after}:</strong> <code>${step.after}</code></p>
                    <p><strong>${t.rulesApplied}:</strong></p>
                    <ul style="margin-left: 20px; margin-top: 5px;">
                        ${step.rules
                          .map(
                            r => `
                            <li>${r.description || 'Regra de simplificação aplicada'}</li>
                        `
                          )
                          .join('')}
                    </ul>
                </div>
            `;
    }
  });

  // Resultado final
  html += `
        <div class="final-result">
            <h3>✨ ${t.finalTranslation}</h3>
            <div class="output">${result}</div>
        </div>
    `;

  elements.resultContent.innerHTML = html;
  elements.resultSection.style.display = 'block';

  // Scroll suave para o resultado
  setTimeout(() => {
    elements.resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

// Botão DECIFRAR
elements.translateBtn.addEventListener('click', () => {
  const text = elements.inputText.value.trim();

  if (!text) {
    alert(elements.languageSelect.value === 'pt' ? 'Por favor, digite um texto!' : 'Please enter some text!');
    return;
  }

  const textLanguage = document.querySelector('input[name="textLanguage"]:checked').value;
  const uiLanguage = elements.languageSelect.value;

  const translation = translateToBabyTalk(text, textLanguage, uiLanguage);
  renderResult(translation, uiLanguage);
});

// Botão RETORNAR
elements.resetBtn.addEventListener('click', () => {
  elements.inputText.value = '';
  elements.resultSection.style.display = 'none';
  elements.resultContent.innerHTML = '';

  // Scroll para o topo do container
  elements.inputText.focus();
  document.querySelector('.container').scrollTo({ top: 0, behavior: 'smooth' });
});

// Event listener para mudança de idioma
elements.languageSelect.addEventListener('change', updateInterfaceLanguage);

// Inicializar
updateInterfaceLanguage();
