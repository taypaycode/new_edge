# Edge Feed Enhancer

A lightweight, open-source browser extension that replaces Microsoft Edge's news feed with educational and inspirational content.

## Features

- **Word of the Day**: Expand your vocabulary with carefully selected words, definitions, and example usage
- **Math Formula**: Learn a new mathematical concept with clear explanations
- **Daily Inspiration**: Get motivated with quotes from great historical figures and the Bible
- **Light/Dark Mode Toggle**: Switch between themes with a beautiful animated toggle button

## Why This Extension?

Transform your browser's new tab from a distraction into a moment of learning. Instead of clickbait news, get:
- Educational content that refreshes daily
- Clean, modern design that's easy on the eyes
- Lightweight performance with no tracking or ads
- Dark mode support for comfortable viewing
- Complete replacement of Edge's default new tab page

## Installation

### From Source (Developer Mode)

1. **Clone the repository**
   ```bash
   git clone https://github.com/taypaycode/new_edge.git
   cd new_edge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the extension**
   ```bash
   npm run build
   ```

4. **Generate icons**
   - Open `icons/create-icons.html` in your browser
   - Click "Generate & Download Icons"
   - Move the downloaded PNG files to the `icons/` folder

5. **Load in Edge**
   - Open Edge and navigate to `edge://extensions/`
   - Enable "Developer mode" (toggle in the left sidebar)
   - Click "Load unpacked"
   - Select the `Edge_off` folder (or `new_edge` if you cloned it)
   - The extension should now be active!

6. **Open a new tab** and enjoy your educational content with the theme toggle!

## Development

### Project Structure

```
Edge_off/
├── src/
│   ├── main.ts          # Main entry point for new tab page
│   └── data.ts          # Data sources (words, formulas, quotes)
├── styles/
│   └── content.css      # Styling with light/dark mode
├── icons/               # Extension icons
├── index.html           # New tab page HTML
├── manifest.json        # Extension configuration
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md
```

### Building

```bash
# Build once
npm run build

# Watch for changes (auto-rebuild)
npm run watch
```

### Adding Content

To add more words, formulas, or quotes, edit `src/data.ts`:

- **Words**: Add to the `words` array
- **Math Formulas**: Add to the `mathFormulas` array
- **Quotes**: Add to the `quotes` array

Content rotates daily based on the day of the year, ensuring you see something new each day.

## Technical Details

- **TypeScript**: Type-safe, maintainable code
- **Manifest V3**: Modern extension API
- **Zero Dependencies**: No external libraries in production
- **Lightweight**: Minimal performance impact
- **Privacy-Focused**: No data collection, no tracking

## Browser Compatibility

This extension is designed for Microsoft Edge but should also work on:
- Google Chrome
- Brave
- Other Chromium-based browsers

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Some ideas:
- Add more words, formulas, and quotes
- Improve styling and animations
- Add user customization options
- Support for other languages
- Additional educational content categories

## License

MIT License - feel free to use, modify, and distribute as you wish.

## Support

If you find this extension helpful, please:
- Star the repository on GitHub
- Share it with others who might benefit
- Report bugs or suggest features via GitHub Issues

---

Made with focus and purpose. Replace distractions with learning.

