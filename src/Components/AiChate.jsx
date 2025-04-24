import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { MessageCircle, Send, X } from "lucide-react";
import { cn } from "../lib/utils";

function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi there! I'm WebNest's AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Thanks for your message! A WebNest representative will get back to you soon.",
        "I'd be happy to help with your website needs. Would you like to schedule a consultation?",
        "WebNest specializes in custom website development. Can you tell me more about your project?",
        "Our team can help with that! Would you like to see some examples of our previous work?",
        "We offer services like business websites, landing pages, portfolios, and more. What do you need?",
        "Every project is unique! Could you share your goals or what you have in mind?",
        "Yes, we can build mobile-friendly and responsive designs tailored to your brand.",
        "Want to check out our pricing packages?",
        "Let’s build something great for your brand. Ready to get started?",
        "You can always reach us via WhatsApp or Instagram @webnest.dev.",
        "We typically respond within a few hours. Thanks for your patience!",
        "We’d love to work with you! Just tell us a bit about your idea or business.",
        "Looking for a one-page site or a full business website?",
        "We also offer updates, redesigns, and monthly maintenance. Interested?",
        "Feel free to drop links or reference styles you like — we’re all ears!",
      ];
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: randomResponse },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1,
        }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 lg:right-20 md:right-12 rounded-full w-14 h-14 shadow-lg z-50 bg-blue-600"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white" />
          <span className="sr-only">Open AI Chat</span>
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-4 px-4 md:px-0 right-0 lg:right-20 md:right-12 w-full   md:max-w-[400px] z-50 "
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <Card className="shadow-xl border-slate-200 bg-white">
              <CardHeader className="border-b p-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">
                    WebNest Assistant
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
              </CardHeader>
              {/* Add WhatsApp notice at the top */}
              <div className="bg-green-50 p-3 border-b border-green-100">
                <p className="text-sm text-slate-700 mb-2">
                  <span className="font-semibold">Note:</span> We're not
                  actively monitoring this chat. For faster response:
                </p>
                <a
                  href="https://wa.me/2348166498440"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a7.29.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  Contact on WhatsApp
                </a>
              </div>
              <CardContent className="p-4 h-[300px] overflow-y-auto flex flex-col gap-3">
                <AnimatePresence initial={false}>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "max-w-[80%] rounded-lg p-3",
                        message.role === "user"
                          ? "bg-blue-600 text-white self-end"
                          : "bg-slate-100 text-slate-800 self-start"
                      )}
                    >
                      {message.content}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-100 text-slate-800 self-start max-w-[80%] rounded-lg p-3"
                  >
                    <div className="flex gap-1">
                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 1,
                        }}
                      >
                        ●
                      </motion.span>
                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 1,
                          delay: 0.2,
                        }}
                      >
                        ●
                      </motion.span>
                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 1,
                          delay: 0.4,
                        }}
                      >
                        ●
                      </motion.span>
                    </div>
                  </motion.div>
                )}
              </CardContent>
              <CardFooter className="border-t p-3">
                <form onSubmit={handleSend} className="flex w-full gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 text-lg"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      size="icon"
                      disabled={isLoading}
                      className="bg-blue-600"
                    >
                      <Send className="h-4 w-4 text-white" />
                      <span className="sr-only ">Send</span>
                    </Button>
                  </motion.div>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AiChat;
