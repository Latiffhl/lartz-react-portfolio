'use client';

import React, { useState } from 'react';

import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'; // Ikon Chat

import { SiGooglegemini } from 'react-icons/si'; // Ikon Gemini atau Logo Anda

import { GoogleGenAI } from '@google/genai';

// Ikon Eksternal diganti dengan SVG Inline untuk menghindari error resolusi paket.

// PENTING: Untuk lingkungan produksi, API Key harus disimpan di variabel lingkungan dan digunakan di sisi server (Next.js API Route) untuk keamanan.
// Kita akan menggunakan implementasi fetch API biasa agar kode dapat dikompilasi tanpa paket @google/genai
const API_KEYS = ['AIzaSyDD4m4Wmjuu1UYRKJygbF4y7MzV-jwqXJA', 'AIzaSyAJd7sB-j0ICtjPUDQd4xmXEHXNmIfsvoY', 'AIzaSyAdLvYZ9XOhthm2qAs01_VgcOEubxvXE_g'];
const GEMINI_API_KEY = API_KEYS[0];
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent';
const MODEL = 'gemini-2.5-flash-preview-09-2025';

// --- Interface Data Chat ---
interface Message {
  text: string;
  sender: 'user' | 'bot';
}

// Komponen ChatbotMini
const ChatbotMini: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Halo! Saya adalah AI mini yang dibuat untuk menjawab pertanyaan sederhana Anda tentang Latif Palikal Isbah. Tanyakan tentang proyek atau studinya!',
      sender: 'bot',
    },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  // Fungsi utilitas untuk Exponential Backoff (MANDATORY)
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  // --- FUNGSI PENGIRIMAN PESAN ---
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim() === '' || isLoading) return;

    const userMessage = userInput.trim();
    setMessages((prev) => [...prev, { text: userMessage, sender: 'user' }]);
    setUserInput('');
    setIsLoading(true);

    const systemInstruction =
      'Anda adalah asisten AI yang ramah dan fokus untuk menjawab pertanyaan tentang Latif Palikal Isbah, seorang mahasiswa software engineering. Jawab dengan singkat, padat, dan profesional. Jika pertanyaan tidak relevan, minta pengguna untuk bertanya tentang Latif.ketika memberikan jawaban, gunakan bahasa Indonesia yang gaul dan asik. batasi pertanyaan jika bertanya soal tanggal lahir tempat tinggal dan jumlah semester yang di tempuh. berikan emoji lucu pada setiap akhir kalimat jawaban. hindari penggunakan asterisk atau tanda baca lain yang tidak perlu terkeculi seperti kutip,titik,koma ';

    const payload = {
      contents: [{ parts: [{ text: userMessage }] }],
      systemInstruction: {
        parts: [{ text: systemInstruction }],
      },
    };

    const maxRetries = 3;
    let botResponseText = '';

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const response = await fetch(`${API_URL}?key=${GEMINI_API_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          // Jika respons HTTP tidak OK, lemparkan error untuk retry
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const candidate = result.candidates?.[0];

        if (candidate && candidate.content?.parts?.[0]?.text) {
          botResponseText = candidate.content.parts[0].text;
          break;
        } else {
          throw new Error('Invalid or empty response structure from API.');
        }
      } catch (error) {
        console.error(`Attempt ${attempt + 1} failed:`, error);
        if (attempt < maxRetries - 1) {
          const waitTime = Math.pow(2, attempt) * 1000;
          await delay(waitTime);
        } else {
          // Setelah semua retry gagal
          botResponseText = 'Maaf, terjadi kesalahan serius saat menghubungi AI setelah beberapa kali percobaan. Periksa konsol untuk detail error.';
          break;
        }
      }
    }

    if (botResponseText) {
      setMessages((prev) => [...prev, { text: botResponseText, sender: 'bot' }]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          text: 'Maaf, AI gagal memberikan respons yang valid. Coba pertanyaan lain.',
          sender: 'bot',
        },
      ]);
    }

    setIsLoading(false);
  };

  const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8">
      <path
        d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.3 468.4 2.3 468.4c-6.8 6.4-8.8 15.6-5.4 24.2c3.3 8.7 11.2 14.5 20.3 14.5c.3 0 .6 0 .9 0h176.7c36.1 27.5 78.4 42.9 123.2 42.9c141.4 0 256-93.1 256-208S397.4 32 256 32zM336 264c0 4.4-3.6 8-8 8h-48v48c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-48h-48c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h48v-48c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v48h48c4.4 0 8 3.6 8 8v32z"
        fill="#fff"
      />
      <path
        d="M256 64c114.9 0 208 77.2 208 172.1S370.9 408 256 408c-44.1 0-86.4-15.4-123.2-42.9h-176.7c-.3 0-.6 0-.9 0c-9.1 0-17-5.8-20.3-14.5c-3.4-8.6-1.4-17.8 5.4-24.2c0 0 42.2-47.3 57-130.7C21.4 135 0 89.6 0 40c0-49.6 114.6-142.7 256-142.7zM336 264c0 4.4-3.6 8-8 8h-48v48c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-48h-48c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h48v-48c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v48h48c4.4 0 8 3.6 8 8v32z"
        fill="#d00f0f"
      />
    </svg>
  );
  return (
    <div className="fixed bottom-28 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="bg-white shadow-2xl rounded-xl w-72 h-96 mb-3 flex flex-col transition-all duration-300 transform scale-100 origin-bottom-right">
          <div className="p-3 bg-[#d00f0f] text-white font-bold rounded-t-xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src="/assets/logo/rotate-img.png" className="w-5 " />
              Lartz AI mini chat
            </div>
            <button onClick={toggleChat} className="text-white text-3xl leading-none font-light hover:text-gray-200">
              &times;
            </button>
          </div>

          <div className="flex-grow p-3 overflow-y-auto space-y-3 text-sm">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-2 max-w-[85%] rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>{msg.text}</div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-600 p-2 rounded-lg max-w-[85%]">AI sedang mengetik...</div>
              </div>
            )}
          </div>

          {/* Input Teks */}
          <form onSubmit={sendMessage} className="p-3 border-t">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Tanyakan sesuatu..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d00f0f] text-gray-800"
              disabled={isLoading}
            />
          </form>
        </div>
      )}

      <button
        onClick={toggleChat}
        className={`

          w-16 h-16 rounded-full text-white shadow-xl

          flex items-center justify-center text-3xl

          transition-all duration-300 transform

          ${isOpen ? 'bg-gray-500 hover:bg-gray-600 rotate-45' : 'bg-[#d00f0f] hover:bg-[#b00d0d]'}

        `}
        title={isOpen ? 'Tutup Chat' : 'Buka Chat'}
      >
        {isOpen ? <span className="text-4xl font-light leading-none">+</span> : <IoChatbubbleEllipsesOutline />}
      </button>
    </div>
  );
};

export default ChatbotMini;
