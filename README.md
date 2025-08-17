# Open Lovable - AI-Powered React App Builder

> **Build React applications through natural language conversations with AI**

Open Lovable is a sophisticated AI-powered development platform that transforms your ideas into fully functional React applications. Simply describe what you want to build, and watch as advanced AI models generate clean, modern code with professional styling and best practices.

![Open Lovable Demo](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZtaHFleGRsMTNlaWNydGdianI4NGQ4dHhyZjB0d2VkcjRyeXBucCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZFVLWMa6dVskQX0qu1/giphy.gif)

## ✨ Features

### 🤖 Multi-Model AI Support
- **GPT-5**: OpenAI's latest reasoning model for complex applications
- **Gemini 2.5 Pro**: Google's advanced model for creative and technical tasks
- **Claude Sonnet 4**: Anthropic's model for precise, thoughtful code generation
- **Kimi K2 Instruct**: High-speed inference through Groq

### 🚀 Live Development Environment
- **E2B Sandboxes**: Isolated development containers with 15-minute sessions
- **Vite Integration**: Lightning-fast development with hot module replacement
- **Real-time Preview**: See your application come to life instantly
- **Automatic Packages**: Smart detection and installation of npm dependencies

### 🎨 Modern Development Stack
- **Next.js 15** with React 19 for cutting-edge performance
- **Tailwind CSS** for beautiful, responsive styling
- **TypeScript** support for type-safe development
- **Component Architecture** following React best practices

### ⚡ Intelligent Code Management
- **Surgical Editing**: Make precise changes without full regeneration
- **Context Awareness**: Maintains conversation history and project state
- **File Intelligence**: Smart component organization and imports
- **Version Tracking**: Monitor project evolution and changes

## 🛠 Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn
- API keys for your preferred LLM providers
- E2B API key for sandbox environments

### 1. Clone and Install
```bash
git clone https://github.com/your-repo/open-lovable.git
cd open-lovable
npm install
```

### 2. Environment Configuration
Create a `.env.local` file in the root directory:

```env
# E2B Sandbox (Required)
E2B_API_KEY=your_e2b_api_key_here

# LLM Providers (Choose at least one)
GEMINI_API_KEY=your_gemini_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
GROQ_API_KEY=your_groq_api_key_here

# OpenRouter (Alternative to individual providers)
OPENROUTER_API_KEY=your_openrouter_api_key_here

# Authentication (Optional)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Application Settings
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. API Key Setup Guide

#### E2B API Key (Required)
1. Visit [e2b.dev](https://e2b.dev)
2. Sign up for a free account
3. Navigate to your dashboard
4. Copy your API key

#### Gemini API Key
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Copy the generated key

#### OpenRouter API Key  
1. Visit [OpenRouter](https://openrouter.ai)
2. Sign up and navigate to API Keys
3. Generate a new API key
4. Provides access to multiple models through one API

#### Clerk Authentication (Optional)
1. Create account at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy both publishable and secret keys from dashboard

### 4. Run the Application
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Getting Started

### Your First Application
1. **Start a Conversation**: Type what you want to build
   ```
   "Create a landing page for a SaaS product with hero section, features, and contact form"
   ```

2. **Watch the Magic**: AI generates complete React components with:
   - Professional Tailwind CSS styling
   - Responsive design patterns
   - Clean component architecture
   - Modern React patterns

3. **Iterate and Improve**: Make changes with natural language:
   ```
   "Change the hero background to blue"
   "Add a testimonials section"
   "Make the buttons more modern"
   ```

### Example Conversations

#### Building a Portfolio Website
```
User: "Create a developer portfolio with dark theme, projects section, and contact form"
AI: [Generates complete portfolio with Header, Hero, Projects, Contact components]

User: "Add a skills section with programming languages"
AI: [Creates Skills component and integrates it seamlessly]

User: "Change the color scheme to purple and pink gradient"
AI: [Updates styling across all components]
```

#### Creating a Dashboard
```
User: "Build a dashboard with sidebar navigation, stats cards, and data table"
AI: [Generates Dashboard, Sidebar, StatsCard, DataTable components]

User: "Add charts to visualize the data"
AI: [Integrates chart library and creates Chart components]
```

## 📖 Advanced Usage

### Model Selection
Switch between AI models based on your needs:
- **GPT-5**: Best for complex business logic and architecture decisions
- **Gemini 2.5 Pro**: Excellent for creative designs and user interfaces  
- **Claude Sonnet 4**: Perfect for clean, maintainable code
- **Kimi K2**: Fastest generation for quick iterations

### Editing Modes
1. **Surgical Edits**: "Change the button color to green"
2. **Component Updates**: "Add a new feature to the header"
3. **Architecture Changes**: "Restructure the layout to use grid instead of flexbox"

### Best Practices
- Be specific about what you want to change
- Reference existing components when making edits
- Describe the desired user experience
- Mention responsive design requirements

## 🏗 Architecture

### Frontend (Next.js + React)
```
/app
├── api/              # API routes for LLM integration
├── components/       # React components and UI
├── lib/              # Utilities and helpers
├── types/            # TypeScript type definitions
└── config/           # Application configuration
```

### Backend Services
- **LLM Providers**: Direct integration with AI models
- **E2B Sandboxes**: Containerized development environments
- **File Management**: Smart code generation and editing
- **Package Detection**: Automatic dependency resolution

### Development Flow
1. **User Input** → Natural language description
2. **AI Processing** → Code generation with selected model
3. **Sandbox Creation** → Isolated environment with Vite
4. **Real-time Preview** → Live application preview
5. **Iterative Editing** → Precise modifications and improvements

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Development Setup
```bash
# Fork and clone the repository
git clone https://github.com/your-username/open-lovable.git
cd open-lovable

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your API keys

# Start development server
npm run dev
```

### Contribution Guidelines
- **Code Quality**: Follow TypeScript best practices
- **Testing**: Add tests for new features
- **Documentation**: Update README and comments
- **Commits**: Use conventional commit messages

### Areas for Contribution
- 🤖 New LLM provider integrations
- 🎨 UI/UX improvements
- ⚡ Performance optimizations  
- 📚 Documentation and examples
- 🧪 Testing and quality assurance

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **E2B Team** for the amazing sandbox infrastructure
- **Firecrawl** for web scraping capabilities
- **Vercel** for Next.js and deployment platform
- **Open Source Community** for the incredible tools and libraries

## 📞 Support & Community

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/your-repo/open-lovable/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/your-repo/open-lovable/discussions)
- 📧 **Contact**: [your-email@domain.com](mailto:your-email@domain.com)
- 🐦 **Twitter**: [@OpenLovable](https://twitter.com/OpenLovable)

---

**Built with ❤️ by the Open Lovable team**

*Transform your ideas into reality with the power of AI*