import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const Chatwidget = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const toggleChat = () => setIsOpen(!isOpen);
//   const APIKEY = process.env.API_KEY;


 
  useEffect(() => {
    if (messages[messages.length - 1]?.sender === "user") {
      handleSend(); // Call the send function when the message is added
    }
  }, [messages]);

  const handleSend = async () => {
    if (!userMsg.trim()) return;
    if (cooldown) return; 

    setCooldown(true);
    setTimeout(() => setCooldown(false), 5000); 

    const newMessages = [...messages, { sender: "user", text: userMsg }];
    setMessages(newMessages); 
    setUserMsg("");
    setLoading(true);
    setErrorMessage(""); 

    try {
      
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant for software license resale." },
            ...newMessages.map((msg) => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text,
            })),
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${APIKEY}`, 
          },
        }
      );

      const aiText = response.data.choices[0].message.content;
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: aiText },
      ]);
    } catch (error) {
      if (error.response && error.response.status === 429) {
       
        setErrorMessage("Too many requests. Please wait 5 minutes and try again.");
      } else {
        console.error("Error calling API:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Sorry, I'm having trouble responding. Please try again later." },
        ]);
      }
    }
    setLoading(false);
  };

  const exampleQuestions = [
    "How do I sell my license?",
    "How long does it take to get paid?",
    "Is there a fee involved?",
  ];

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50">
        {isOpen ? (
          <div className="w-80 h-96 bg-white rounded-xl shadow-xl flex flex-col overflow-hidden border border-gray-300">
            <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
              <span>💬 Ask Softsell AI</span>
              <FaTimes onClick={toggleChat} className="cursor-pointer" />
            </div>
            <div className="flex-1 p-3 overflow-y-auto text-sm space-y-3">
              {messages.map((msg, idx) => (
                <div key={idx} className={`text-${msg.sender === "user" ? "right" : "left"}`}>
                  <div
                    className={`inline-block p-2 rounded-md ${msg.sender === "user" ? "bg-blue-100" : "bg-gray-100"}`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && <div className="text-gray-400">Softsell AI is typing...</div>}
              {errorMessage && <div className="text-red-500">{errorMessage}</div>} {/* Display error message */}
            </div>
            <div className="p-2 border-t flex">
              <input
                type="text"
                className="flex-1 border border-gray-300 p-2 rounded-l-md outline-none text-sm"
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                placeholder="Type a message..."
              />
              <button
                onClick={() => setMessages((prev) => [...prev, { sender: "user", text: userMsg }])}
                className="bg-blue-600 p-2 text-white rounded-r-md hover:bg-blue-700"
              >
                <FaPaperPlane />
              </button>
            </div>
            <div className="p-2 text-xs text-gray-600">
              <span>Try:</span>
              {exampleQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => setUserMsg(q)}
                  className="block mt-1 hover:underline text-blue-500"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <button onClick={toggleChat} className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700">
            <FaRobot size={24} />
          </button>
        )}
      </div>
    </>
  );
};

export default Chatwidget;





