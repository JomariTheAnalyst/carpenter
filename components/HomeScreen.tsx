'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface HomeScreenProps {
  onUrlSubmit: (url: string, context?: string) => void;
  onAiPromptSubmit: (prompt: string) => void;
  isVisible: boolean;
  onClose: () => void;
}

export default function HomeScreen({ onUrlSubmit, onAiPromptSubmit, isVisible, onClose }: HomeScreenProps) {
  const [activeMode, setActiveMode] = useState<'url' | 'ai' | null>(null);
  const [urlInput, setUrlInput] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');
  const [homeScreenFading, setHomeScreenFading] = useState(false);

  const handleClose = () => {
    setHomeScreenFading(true);
    setTimeout(() => {
      onClose();
      setHomeScreenFading(false);
    }, 500);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;
    onUrlSubmit(urlInput);
    handleClose();
  };

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;
    onAiPromptSubmit(aiPrompt);
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-500 ${homeScreenFading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-peach-100 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-400/20 via-orange-300/10 to-transparent rounded-full blur-[80px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-yellow-300/15 via-orange-400/10 to-transparent rounded-full blur-[40px]" />
      </div>

      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-8 right-8 text-gray-500 hover:text-gray-700 transition-all duration-300 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm hover:shadow-md z-10"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Logo and Title */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">🔥</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Open Lovable
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto"
            >
              Build React applications with AI - from websites or pure imagination
            </motion.p>
          </div>

          {/* Mode Selection */}
          {!activeMode ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              
              {/* URL/Website Option */}
              <div 
                onClick={() => setActiveMode('url')}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-orange-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Clone from Website
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Enter any website URL and watch AI analyze, understand, and recreate it as a modern React application with beautiful code.
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-orange-600 font-medium">
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                    Requires web scraping API
                  </div>
                </div>
              </div>

              {/* AI-Only Option */}
              <div 
                onClick={() => setActiveMode('ai')}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-purple-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Build with AI
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Describe your dream application in plain English and let AI bring your vision to life with clean, modern React components.
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-green-600 font-medium">
                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                    Ready to use
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Input Forms */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              
              {/* Back Button */}
              <button
                onClick={() => setActiveMode(null)}
                className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mx-auto group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to options
              </button>

              {activeMode === 'url' ? (
                /* URL Input Form */
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Clone Website</h3>
                    <p className="text-gray-600">Enter the URL of any website to recreate</p>
                  </div>
                  
                  <form onSubmit={handleUrlSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                      <input
                        type="text"
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        placeholder="https://stripe.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        disabled
                      />
                      <p className="mt-2 text-sm text-orange-600">
                        🚧 Web scraping functionality requires additional API keys (coming soon)
                      </p>
                    </div>
                    
                    <Button
                      type="submit"
                      disabled
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Start Cloning (Coming Soon)
                    </Button>
                  </form>
                </div>
              ) : (
                /* AI Prompt Input Form */
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Build with AI</h3>
                    <p className="text-gray-600">Describe your dream application and let AI create it</p>
                  </div>
                  
                  <form onSubmit={handleAiSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Describe your application</label>
                      <Textarea
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        placeholder="Create a modern landing page for a SaaS product with a hero section, features grid, testimonials, and contact form. Use a professional blue and white color scheme."
                        className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                        rows={4}
                      />
                      <p className="mt-2 text-sm text-gray-500">
                        💡 Be specific about design, features, and functionality for best results
                      </p>
                    </div>
                    
                    {/* Example Prompts */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">💫 Example prompts:</p>
                      <div className="space-y-2">
                        {[
                          "A portfolio website for a web developer with dark theme and project showcase",
                          "An e-commerce product page with image gallery and add to cart functionality",
                          "A dashboard with charts, metrics cards, and data tables for analytics"
                        ].map((example, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setAiPrompt(example)}
                            className="block w-full text-left text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded transition-colors"
                          >
                            "{example}"
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={!aiPrompt.trim()}
                      className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      🚀 Build with AI
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>
          )}

          {/* Features Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Gemini & OpenRouter AI
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                Live Code Preview
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full" />
                Modern React + Tailwind
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}