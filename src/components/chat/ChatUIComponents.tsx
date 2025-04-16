import { useEffect, useState } from "react";
import { Mic, Send } from "lucide-react";
import { motion } from "framer-motion";

type Message = {
  type: "bot" | "user";
  text: string;
};

const cleanBotResponse = (message: string): string => {
  const index = message.indexOf("\n\n");
  const cleaned = index !== -1 ? message.slice(index + 2) : message;
  return cleaned
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
    .replace(/\n/g, "<br/>");
};

export default function ChatUIComponents() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [recording, setRecording] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const formData = localStorage.getItem("formData");
    if (formData) {
      const parsed = JSON.parse(formData);
      const userText = `Yosh: ${parsed.age}\nJinsi: ${parsed.gender}\nSimptomlar: ${parsed.symptoms}\nTashqi belgilar: ${parsed.signs}\nDavomiyligi: ${parsed.duration}\nDorilar: ${parsed.medications}`;
      const userMessage: Message = { type: "user", text: userText };

      setMessages([
        { type: "bot", text: "Salom! Ma'lumotlaringiz asosida tahlil qilinmoqda..." },
        userMessage,
      ]);

      fetch(`/api/chatgpt/api?message=${encodeURIComponent(userText)}`)
        .then((res) => res.json())
        .then((data) => {
          const cleanedText = cleanBotResponse(data.message);
          const botMessage: Message = { type: "bot", text: cleanedText };
          setMessages((prev) => [...prev, botMessage]);
        })
        .catch(() => {
          setMessages((prev) => [
            ...prev,
            { type: "bot", text: "Kechirasiz, tizimda xatolik yuz berdi." },
          ]);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setMessages([{ type: "bot", text: "Salom! Qanday muammo bilan murojaat qilmoqchisiz?" }]);
      setLoading(false);
    }
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage: Message = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch(`/api/chatgpt/api?message=${encodeURIComponent(input)}`);
      const data = await res.json();
      const cleanedText = cleanBotResponse(data.message);
      const botMessage: Message = { type: "bot", text: cleanedText };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Kechirasiz, tizimda xatolik yuz berdi." },
      ]);
    }
  };

  const handleVoiceClick = () => {
    setRecording(!recording);
    // optional: voice yozish funktsiyasi
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="flex-1 overflow-y-auto p-4 pb-32 space-y-4">
        {loading ? (
          <div className="text-center text-blue-600 mt-10 animate-pulse">Yuklanmoqda...</div>
        ) : (
          messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-start ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.type === "bot" && (
                <div className="w-8 h-8 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center text-xs font-bold mr-2 shadow">
                  🤖
                </div>
              )}
              <div
                className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm shadow ${
                  msg.type === "bot"
                    ? "bg-white text-gray-800"
                    : "bg-blue-600 text-white"
                }`}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />
              {msg.type === "user" && (
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold ml-2 shadow">
                  🧑
                </div>
              )}
            </motion.div>
          ))
        )}
      </div>

      {/* Fixed input panel pastda */}
      <div className="p-4 border-t bg-white flex items-center gap-2 fixed bottom-0 left-0 right-0 shadow-md">
        <button
          onClick={handleVoiceClick}
          className={`p-2 rounded-full border border-blue-300 ${
            recording ? "bg-blue-200 animate-pulse" : "hover:bg-blue-100"
          } transition`}
        >
          <Mic className="w-5 h-5 text-blue-600" />
        </button>

        <input
          type="text"
          placeholder="Savolingizni yozing..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 px-4 py-2 rounded-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <button
          onClick={handleSend}
          className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
