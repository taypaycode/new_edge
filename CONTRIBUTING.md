# Contributing to Edge Feed Enhancer

Thank you for your interest in contributing! This project aims to provide meaningful, educational content as an alternative to news feeds.

## How to Contribute

### Adding Content

The easiest way to contribute is by adding more educational content:

#### Words
Edit `src/data.ts` and add entries to the `words` array:
```typescript
{
  word: "Eloquent",
  partOfSpeech: "adjective",
  definition: "Fluent or persuasive in speaking or writing",
  example: "The speaker's eloquent presentation moved the entire audience."
}
```

#### Math Formulas
Add entries to the `mathFormulas` array:
```typescript
{
  title: "Volume of a Sphere",
  formula: "V = (4/3)πr³",
  explanation: "Calculates the volume of a sphere given its radius..."
}
```

#### Quotes
Add entries to the `quotes` array:
```typescript
{
  text: "The journey of a thousand miles begins with one step.",
  author: "Lao Tzu"
}
```

### Code Contributions

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit with clear messages (`git commit -m 'Add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow existing code formatting
- Add JSDoc comments for functions
- Keep functions small and focused
- Maintain the KISS principle

### Testing

Before submitting:
1. Build the extension: `npm run build`
2. Load in Edge browser (Developer mode)
3. Test on a new tab page
4. Verify all three cards display correctly
5. Check both light and dark modes
6. Test responsive design (resize browser)

## Content Guidelines

### Words
- Use clear, standard definitions
- Provide practical examples
- Include part of speech
- Avoid obscure or offensive terms

### Math Formulas
- Explain practical applications
- Use clear notation
- Keep explanations accessible
- Cover various difficulty levels

### Quotes
- Attribute correctly
- Use verified sources
- Keep inspirational and educational
- Respect diverse perspectives

## Feature Requests

Have an idea? Open an issue with:
- Clear description of the feature
- Why it would be valuable
- How it fits the project's goals
- Any implementation suggestions

## Bug Reports

Found a bug? Open an issue with:
- Browser and version
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable

## Questions?

Feel free to open an issue for any questions about contributing.

Thank you for helping make learning more accessible!

