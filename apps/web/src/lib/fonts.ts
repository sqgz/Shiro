// Google Fonts blocked in China, use system fonts with CSS fallback chains defined in tailwindcss.css
// next/font/local requires actual font files, so we provide noop font objects
// The --font-sans and --font-serif chains in tailwindcss.css have robust CJK fallbacks

const createNoopFont = (variableName: string) => ({
  variable: variableName,
})

const sansFont = createNoopFont('__variable_font-sans')
const serifFont = createNoopFont('__variable_font-serif')

export { sansFont, serifFont }
