# 🍼 Tradutor de Fala de Bebê

## 📋 Sobre o Desafio

Este projeto foi desenvolvido como resposta ao **Code Challenge #1** do Stack Overflow, que propôs a criação de um tradutor de texto para "fala de bebê" (baby talk).

**Link do desafio original:** https://stackoverflow.com/beta/challenges/79640866/complete-code-challenge-1-implement-a-text-to-baby-talk-translator

### O que é "Fala de Bebê"?

A "fala de bebê" é um padrão de linguagem usado quando adultos falam com bebês e crianças pequenas. Ela é caracterizada por:
- Simplificação de sons complexos
- Uso de onomatopeias
- Reduplicação de sílabas
- Substituição de palavras por sons que imitam objetos/animais
- Remoção ou alteração de consoantes difíceis

Este padrão existe em praticamente todas as línguas e culturas, com regras fonológicas específicas para cada idioma.

---

## 🎯 Objetivo do Projeto

Criar um tradutor web interativo que:
- Receba texto normal como entrada
- Transforme o texto em "fala de bebê" seguindo regras linguísticas
- Mostre o processo de transformação passo a passo
- Suporte **Português Brasileiro** e **Inglês**
- Tenha interface bilíngue (PT/EN)

---

## 🚀 Funcionalidades Implementadas

### ✅ Interface Moderna e Responsiva
- Design com tema infantil/bebê
- Container transparente com backdrop-filter
- Vídeo de fundo em full HD (1920x1080)
- Layout responsivo para mobile e desktop
- Botões animados com efeito "shiny"
- Scrollbar customizada

### ✅ Sistema Bilíngue Completo
- Seletor de idioma da interface (Português/Inglês)
- Seletor de idioma do texto de entrada (Português/Inglês)
- Todas as mensagens, títulos e descrições traduzidas dinamicamente
- Descrições das regras de transformação em ambos os idiomas

### ✅ Transformações Linguísticas

#### **Português Brasileiro:**

**1. Substituições por Onomatopeias:**
- cachorro → au au
- gato → miau
- passarinho → piu piu
- vaca/boi → mu
- pato → quá quá
- galinha → có có
- carro → vum vum

**2. Palavras Comuns de Bebê:**
- água → ága
- leite → tetê
- mamãe → mamã
- papai → papá
- comida → papá
- dormir → ninã

**3. Simplificação Fonética:**
- lh → i (olho → oio)
- nh → ni (ninho → nininho)
- ch → x (chato → xato)
- rr → h (carro → caho) *aplicado após onomatopeias
- r final removido (comer → come)
- l final removido (papel → pape)

#### **Inglês:**

**1. Substituições por Onomatopeias:**
- dog/puppy → woof woof
- cat/kitty → meow
- bird → tweet tweet
- cow → moo
- duck → quack quack
- car → vroom vroom

**2. Palavras Comuns de Bebê:**
- water → wawa
- milk → moo moo
- bottle → baba
- mother/mom → mama
- father/dad → dada
- food/eat → num num

**3. Simplificação Fonética:**
- th → d (the → de)
- r antes de vogal → w (run → wun)
- l antes de vogal → w (look → wook)
- -ing → -in (playing → playin)
- -er → -a (better → betta)
- ck → k (back → bak)

### ✅ Visualização Detalhada do Processo
- Exibição do texto original
- Passo a passo de cada transformação
- Destacamento de palavras modificadas
- Contagem de substituições realizadas
- Resultado final com destaque visual

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com Flexbox/Grid
- **JavaScript (Vanilla)** - Lógica de transformação e interatividade
- **Google Fonts** - Tipografia (Cormorant Garamond e Lato)
- **Regex** - Padrões de busca e substituição

---

## 📂 Estrutura de Arquivos

```
/projeto
  ├── index.html          # Estrutura HTML principal
  ├── styles.css          # Estilos e responsividade
  ├── script.js           # Lógica de tradução e interface
  ├── favicon.ico         # Ícone do site
  └── /assets
      └── background.mp4  # Vídeo de fundo (1920x1080)
```

---

## 🔧 Problemas Enfrentados e Soluções

### 1️⃣ **Problema: Cacofonia Excessiva**

**Descrição:** A primeira versão gerava reduplicações excessivas como:
- "cachorro bonito" → "cacachorro bobonito"
- Criava efeito de gagueira artificial

**Solução:** 
- Removemos a reduplicação automática de sílabas
- Implementamos dicionário de onomatopeias realistas
- Pesquisamos como bebês brasileiros realmente falam (YouTube de vídeos infantis)
- Resultado: "cachorro bonito" → "au au bonito" ✅

### 2️⃣ **Problema: Falta de Realismo**

**Descrição:** As transformações eram muito técnicas e linguisticamente corretas, mas não refletiam como bebês realmente falam.

**Solução:**
- Criamos dicionários extensos de onomatopeias para PT e EN
- Adicionamos palavras que bebês realmente usam (ága, tetê, papá, mamã, etc.)
- Priorizamos naturalidade sobre precisão fonológica acadêmica

### 3️⃣ **Problema: Tradução Incompleta da Interface**

**Descrição:** Algumas partes do resultado permaneciam em português mesmo quando a interface estava em inglês:
- Títulos dos passos
- Descrições das transformações
- Descrições das regras de simplificação

**Solução:**
- Criamos sistema completo de i18n (internacionalização)
- Adicionamos traduções para todos os textos estáticos
- Implementamos tradução dinâmica das descrições das regras (`descriptionPt` e `descriptionEn`)
- Passamos o idioma da UI como parâmetro em todas as funções de renderização

### 4️⃣ **Problema: Undefined nas Descrições das Regras**

**Descrição:** As descrições das regras de simplificação apareciam como "undefined" tanto em português quanto em inglês.

**Solução:**
- Identificamos erro na assinatura da função `applySimplificationRules`
- Havia um parâmetro `language` extra que não era usado
- Isso causava desalinhamento dos parâmetros e `uiLang` não era recebido corretamente
- Removemos o parâmetro desnecessário e ajustamos as chamadas

### 5️⃣ **Problema: Layout Responsivo**

**Descrição:** Container não se adaptava bem a telas menores, causava scroll horizontal.

**Solução:**
- Implementamos media queries para tablet e mobile
- Botões em stack vertical em telas pequenas
- Container com largura adaptativa (`calc(100% - 30px)`)
- Fonte e espaçamentos proporcionais ao tamanho da tela

---

## 📖 Como Usar

1. **Clone ou baixe o projeto**
2. **Adicione o vídeo de fundo:**
   - Coloque seu vídeo MP4 (1920x1080) em `/assets/background.mp4`
3. **Adicione um favicon:**
   - Coloque seu `favicon.ico` na raiz do projeto
4. **Abra o `index.html` em um navegador**
5. **Digite uma frase no campo de texto**
6. **Selecione o idioma do texto** (Português ou Inglês)
7. **Clique em DECIFRAR** para ver a tradução
8. **Observe o processo passo a passo**
9. **Use RETORNAR** para limpar e começar novamente

---

## 💡 Exemplos de Uso

### Português:

**Entrada:** `O cachorro bonito corre no parque com a bola`  
**Saída:** `O au au bonito cohe no paque com a bola`

**Entrada:** `A mamãe dá água para o bebê dormir`  
**Saída:** `A mamã dá ága para o bebê ninã`

**Entrada:** `O passarinho canta na manhã`  
**Saída:** `O piu piu canta na maniã`

### Inglês:

**Entrada:** `The little dog is playing with the ball`  
**Saída:** `De wittwe woof woof is pwayin wid de baw`

**Entrada:** `Mother gives water to the baby`  
**Saída:** `Mama gives wawa to de baby`

**Entrada:** `The bird is singing in the tree`  
**Saída:** `De tweet tweet is singin in de twee`

---

## 🎨 Características de Design

- **Cores principais:** Rosa (#f4c3a1), gradiente suave
- **Tipografia:** Cormorant Garamond (títulos) e Lato (corpo)
- **Transparência:** Container com 85% de opacidade + backdrop-filter
- **Animações:** Efeito shiny nos botões (3s loop)
- **Sombras:** Múltiplas camadas para profundidade
- **Scrollbar:** Customizada com cores do tema

---

## 🔗 Referências

- **Desafio original:** https://stackoverflow.com/beta/challenges/79640866/complete-code-challenge-1-implement-a-text-to-baby-talk-translator
- **Wikipédia - Baby Talk:** https://en.wikipedia.org/wiki/Baby_talk
- **Linguistics Stack Exchange:** https://linguistics.stackexchange.com/
- **Pesquisa de campo:** Vídeos infantis brasileiros no YouTube

---

## 👨‍💻 Autor

Desenvolvido como solução para o Code Challenge #1 do Stack Overflow.

---

## 📄 Licença

Este projeto é de uso livre para fins educacionais e demonstração de habilidades em desenvolvimento web.

---

## 🎉 Conclusão

Este projeto demonstra:
- ✅ Manipulação avançada de strings com Regex
- ✅ Internacionalização (i18n) completa
- ✅ Design responsivo e moderno
- ✅ Transformações linguísticas realistas
- ✅ Interface interativa e educativa
- ✅ Código limpo e bem documentado

**Desafio concluído com sucesso!** 🍼✨
