import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Minimize2,
  User,
  Bot,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: number;
  text: string;
  sender: "user" | "support";
  timestamp: Date;
}

const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help you with any questions about your stay or booking. How can I assist you today?",
      sender: "support",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: message,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
    setIsTyping(true);

    // Simulate support response
    setTimeout(() => {
      const supportResponse: Message = {
        id: messages.length + 2,
        text: getSupportResponse(message),
        sender: "support",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, supportResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getSupportResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    if (msg.includes("booking") || msg.includes("reservation")) {
      return "I can help you with your booking! You can view your reservation details, modify dates, or cancel if needed. Would you like me to look up your specific booking?";
    }

    if (msg.includes("payment") || msg.includes("charge")) {
      return "For payment-related questions, I can help explain charges, process refunds, or update payment methods. What specifically would you like to know about your payment?";
    }

    if (
      msg.includes("check") ||
      msg.includes("location") ||
      msg.includes("address")
    ) {
      return "Check-in is typically after 3:00 PM and check-out before 11:00 AM. The exact address will be provided 24 hours before your stay. Need any other details about your arrival?";
    }

    if (msg.includes("cancel")) {
      return "I can help you with cancellation. Based on the property's cancellation policy, you may be eligible for a full or partial refund. Would you like me to check your specific booking?";
    }

    if (msg.includes("host") || msg.includes("contact")) {
      return "You can contact your host directly through the Airbnb messaging system. I can also help facilitate communication if needed. What would you like to discuss with them?";
    }

    return "Thank you for reaching out! I'm here to help with any questions about your booking, the property, or general Airbnb policies. Can you tell me more about what you need assistance with?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-airbnb-primary hover:bg-airbnb-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </Button>
        <div className="absolute -top-2 -right-2">
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card
        className={`w-80 shadow-2xl border-0 transition-all duration-300 ${isMinimized ? "h-16" : "h-96"}`}
      >
        {/* Header */}
        <CardHeader className="p-4 bg-airbnb-primary text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg" />
                <AvatarFallback className="bg-white text-airbnb-primary">
                  <Bot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-airbnb-semibold text-sm">Airbnb Support</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-xs text-white/90">Online now</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8 p-0 text-white hover:bg-white/20"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            {/* Messages */}
            <CardContent className="p-0 h-64 overflow-y-auto bg-gray-50">
              <div className="p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                        msg.sender === "user"
                          ? "bg-airbnb-primary text-white"
                          : "bg-white text-airbnb-text-primary shadow-sm"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === "user"
                            ? "text-white/80"
                            : "text-gray-500"
                        }`}
                      >
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-airbnb-text-primary shadow-sm rounded-2xl px-3 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>

            {/* Quick Actions */}
            <div className="px-4 py-2 bg-white border-t border-gray-100">
              <div className="flex gap-2 mb-3">
                <Badge
                  variant="outline"
                  className="text-xs cursor-pointer hover:bg-gray-100"
                >
                  Booking Help
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs cursor-pointer hover:bg-gray-100"
                >
                  Payment Issue
                </Badge>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100 rounded-b-lg">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  size="sm"
                  className="bg-airbnb-primary hover:bg-airbnb-primary/90 text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {/* Contact Options */}
              <div className="flex justify-center gap-4 mt-3 pt-3 border-t border-gray-100">
                <button className="flex items-center gap-1 text-xs text-airbnb-text-secondary hover:text-airbnb-primary">
                  <Phone className="h-3 w-3" />
                  Call
                </button>
                <button className="flex items-center gap-1 text-xs text-airbnb-text-secondary hover:text-airbnb-primary">
                  <Mail className="h-3 w-3" />
                  Email
                </button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default SupportChat;
