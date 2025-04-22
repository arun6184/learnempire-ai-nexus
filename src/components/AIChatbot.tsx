
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, X, Send, BookText, Lightbulb } from 'lucide-react';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ sender: 'user' | 'bot'; text: string; timestamp: Date }[]>([
    { 
      sender: 'bot', 
      text: 'Hello! I\'m your StudyPal AI assistant. How can I help you with your commerce studies today?', 
      timestamp: new Date() 
    }
  ]);
  const chatEndRef = useRef<null | HTMLDivElement>(null);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (message.trim()) {
      // Add user message to chat
      setChatHistory([...chatHistory, { sender: 'user', text: message, timestamp: new Date() }]);
      
      // Simulate AI response (in a real app, this would be an API call)
      setTimeout(() => {
        let response = '';
        
        if (message.toLowerCase().includes('accounting')) {
          response = 'Accounting involves recording, analyzing, and reporting financial transactions. Would you like to learn about double-entry bookkeeping or financial statements?';
        } else if (message.toLowerCase().includes('economics')) {
          response = 'Economics is the study of how societies use scarce resources. Are you interested in microeconomics, macroeconomics, or a specific economic concept?';
        } else if (message.toLowerCase().includes('business')) {
          response = 'Business studies covers various aspects of managing an organization. What specific area are you studying - marketing, management, finance, or operations?';
        } else if (message.toLowerCase().includes('help')) {
          response = 'I can help explain commerce concepts, provide study tips, help with assignments, or recommend learning resources. What do you need assistance with?';
        } else {
          response = 'I\'m here to help with your commerce studies. You can ask about specific subjects like Accounting, Economics, Business Studies, or Commerce Law. How can I assist you?';
        }
        
        setChatHistory(prev => [...prev, { sender: 'bot', text: response, timestamp: new Date() }]);
      }, 1000);
      
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    // Scroll to bottom when chat history updates
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  const suggestedQuestions = [
    "What's the difference between micro and macro economics?",
    "Explain double-entry bookkeeping",
    "Help me understand business ethics",
    "What are the principles of taxation?"
  ];

  return (
    <>
      {isOpen ? (
        <Card className="fixed bottom-4 right-4 w-80 md:w-96 h-[500px] shadow-xl z-50 flex flex-col">
          <div className="p-4 bg-rathinam-blue text-white flex justify-between items-center rounded-t-lg">
            <div className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              <h2 className="font-semibold">StudyPal AI</h2>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-rathinam-blue/90" onClick={toggleChat}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${msg.sender === 'user' ? 'ml-auto' : 'mr-auto'} max-w-[80%]`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-rathinam-blue text-white rounded-br-none'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
                <div className={`text-xs text-gray-500 mt-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          
          {chatHistory.length <= 1 && (
            <div className="p-3 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 flex items-center">
                <Lightbulb className="h-4 w-4 mr-1 text-rathinam-orange" />
                Suggested questions
              </p>
              <div className="grid grid-cols-1 gap-2">
                {suggestedQuestions.map((question, idx) => (
                  <Button 
                    key={idx} 
                    variant="outline" 
                    className="text-xs justify-start h-auto py-1 text-left"
                    onClick={() => {
                      setMessage(question);
                    }}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex">
            <Textarea
              placeholder="Ask a study question..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              className="resize-none flex-1 min-h-[40px] max-h-[120px]"
            />
            <Button
              className="ml-2 bg-rathinam-blue hover:bg-rathinam-blue/90"
              onClick={handleSend}
              disabled={!message.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      ) : (
        <Button 
          onClick={toggleChat} 
          className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-rathinam-blue hover:bg-rathinam-blue/90 flex items-center justify-center shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </>
  );
};

export default AIChatbot;
