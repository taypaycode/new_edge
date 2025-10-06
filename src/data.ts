/**
 * Path: src/data.ts
 * Purpose: Static data sources for word of the day, math formulas, and quotes
 */

/**
 * Interface for word of the day entry
 */
export interface WordEntry {
  word: string;
  partOfSpeech: string;
  definition: string;
  example: string;
}

/**
 * Interface for math formula entry
 */
export interface MathEntry {
  title: string;
  formula: string;
  explanation: string;
}

/**
 * Interface for quote entry
 */
export interface QuoteEntry {
  text: string;
  author: string;
  source?: string;
}

/**
 * Word of the day collection
 */
export const words: WordEntry[] = [
  {
    word: "Serendipity",
    partOfSpeech: "noun",
    definition: "The occurrence of events by chance in a happy or beneficial way",
    example: "A fortunate stroke of serendipity brought the two old friends together after decades apart."
  },
  {
    word: "Ephemeral",
    partOfSpeech: "adjective",
    definition: "Lasting for a very short time",
    example: "The beauty of cherry blossoms is ephemeral, making their brief bloom all the more precious."
  },
  {
    word: "Magnanimous",
    partOfSpeech: "adjective",
    definition: "Generous or forgiving, especially toward a rival or less powerful person",
    example: "The champion was magnanimous in victory, praising his opponent's skill and determination."
  },
  {
    word: "Perspicacious",
    partOfSpeech: "adjective",
    definition: "Having a ready insight into and understanding of things",
    example: "Her perspicacious analysis of the situation helped the team avoid a costly mistake."
  },
  {
    word: "Ameliorate",
    partOfSpeech: "verb",
    definition: "To make something bad or unsatisfactory better",
    example: "The new policies were designed to ameliorate the living conditions of the urban poor."
  },
  {
    word: "Tenacious",
    partOfSpeech: "adjective",
    definition: "Holding firmly to a purpose or opinion; persistent",
    example: "Through tenacious effort and determination, she achieved her long-held dream."
  },
  {
    word: "Sagacious",
    partOfSpeech: "adjective",
    definition: "Having or showing keen mental discernment and good judgment",
    example: "The sagacious elder provided counsel that proved invaluable to the community."
  }
];

/**
 * Math formulas and rules collection
 */
export const mathFormulas: MathEntry[] = [
  {
    title: "Pythagorean Theorem",
    formula: "a² + b² = c²",
    explanation: "In a right triangle, the square of the hypotenuse (c) equals the sum of squares of the other two sides (a and b). Essential for calculating distances and solving geometric problems."
  },
  {
    title: "Quadratic Formula",
    formula: "x = (-b ± √(b² - 4ac)) / 2a",
    explanation: "Solves equations in the form ax² + bx + c = 0. The discriminant (b² - 4ac) determines the nature of the roots: positive gives two real solutions, zero gives one, negative gives complex solutions."
  },
  {
    title: "Compound Interest",
    formula: "A = P(1 + r/n)^(nt)",
    explanation: "Calculates future value (A) of principal (P) with interest rate (r) compounded n times per year for t years. Shows how money grows exponentially over time with reinvested earnings."
  },
  {
    title: "Distance Formula",
    formula: "d = √((x₂ - x₁)² + (y₂ - y₁)²)",
    explanation: "Calculates the straight-line distance between two points in a coordinate plane. Derived from the Pythagorean theorem, it's fundamental in geometry and physics."
  },
  {
    title: "Slope of a Line",
    formula: "m = (y₂ - y₁) / (x₂ - x₁)",
    explanation: "Measures the steepness and direction of a line. Rise over run: how much y changes for each unit change in x. Positive slope goes up, negative goes down, zero is horizontal."
  },
  {
    title: "Area of a Circle",
    formula: "A = πr²",
    explanation: "The area of a circle equals pi times the radius squared. Pi (≈ 3.14159) is the ratio of circumference to diameter, appearing throughout mathematics and nature."
  },
  {
    title: "Law of Cosines",
    formula: "c² = a² + b² - 2ab·cos(C)",
    explanation: "Relates the lengths of sides of a triangle to the cosine of one of its angles. Generalizes the Pythagorean theorem to non-right triangles, useful in navigation and surveying."
  }
];

/**
 * Quotes from great historical figures and the Bible
 */
export const quotes: QuoteEntry[] = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "In the beginning God created the heavens and the earth.",
    author: "Genesis 1:1",
    source: "Bible"
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison"
  },
  {
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    author: "John 3:16",
    source: "Bible"
  },
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates"
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    text: "I can do all things through Christ who strengthens me.",
    author: "Philippians 4:13",
    source: "Bible"
  },
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "Trust in the LORD with all your heart and lean not on your own understanding.",
    author: "Proverbs 3:5",
    source: "Bible"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
    author: "Matthew 7:7",
    source: "Bible"
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates"
  },
  {
    text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
    author: "Joshua 1:9",
    source: "Bible"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    text: "I am the way and the truth and the life.",
    author: "John 14:6",
    source: "Bible"
  }
];

/**
 * Get a deterministic selection based on the day of year
 * Returns: index for the current day that stays consistent throughout the day
 */
export function getDayIndex(arrayLength: number): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear % arrayLength;
}

/**
 * Get today's word of the day
 */
export function getTodaysWord(): WordEntry {
  return words[getDayIndex(words.length)];
}

/**
 * Get today's math formula
 */
export function getTodaysMath(): MathEntry {
  return mathFormulas[getDayIndex(mathFormulas.length)];
}

/**
 * Get today's quote
 */
export function getTodaysQuote(): QuoteEntry {
  return quotes[getDayIndex(quotes.length)];
}

