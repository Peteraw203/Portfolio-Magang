'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Icon } from '@iconify/react'
import ReactMarkdown from 'react-markdown'

interface Message {
    role: 'user' | 'bot'
    text: string
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'bot',
            text: 'Halo! Saya MARIN, asisten virtual Peter. Ada yang bisa saya bantu terkait portfolio atau pengalaman Peter?',
        },
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isOpen])

    const handleSendMessage = async (e?: React.FormEvent) => {
        if (e) e.preventDefault()
        if (!input.trim()) return

        const userMessage = input.trim()
        setInput('')
        setMessages((prev) => [...prev, { role: 'user', text: userMessage }])
        setIsLoading(true)

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            })

            // Check for non-OK response first
            if (!response.ok) {
                const errorText = await response.text();
                // If it's HTML (common in Next.js errors), don't log the whole thing excessively
                const isHtml = errorText.trim().startsWith('<');
                console.error('API Error:', response.status, isHtml ? 'HTMLError' : errorText);
                throw new Error(`Server Error: ${response.status} ${isHtml ? '(Check Server Logs)' : ''}`);
            }

            const data = await response.json()
            setMessages((prev) => [...prev, { role: 'bot', text: data.reply }])

        } catch (error) {
            console.error('Error sending message:', error)
            let errorMessage = 'Maaf, saya sedang mengalami gangguan koneksi.';

            if (error instanceof Error && error.message.includes('Server Error')) {
                errorMessage = 'Maaf, terjadi kesalahan pada server (500). Mohon cek terminal server.';
            }

            setMessages((prev) => [
                ...prev,
                {
                    role: 'bot',
                    text: errorMessage,
                },
            ])
        } finally {
            setIsLoading(false)
        }
    }

    // Auto-resize textarea logic could be added here, but input is simple for now

    return (
        <div className='fixed bottom-24 right-4 md:bottom-28 md:right-10 z-[999] flex flex-col items-end gap-4 font-sans'>
            {/* Chat Window */}
            <div
                className={`transition-all duration-300 transform origin-bottom-right ${isOpen
                    ? 'scale-100 opacity-100 translate-y-0'
                    : 'scale-95 opacity-0 translate-y-4 pointer-events-none'
                    } bg-white dark:bg-darklight border border-gray-200 dark:border-gray-700 shadow-2xl rounded-2xl w-[calc(100vw-2rem)] sm:w-[380px] h-[500px] max-h-[80vh] flex flex-col overflow-hidden`}>
                {/* Header */}
                <div className='bg-primary p-4 flex items-center justify-between shrink-0'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center'>
                            <Icon icon='fluent:bot-24-filled' className='text-white text-2xl' />
                        </div>
                        <div>
                            <h3 className='text-white font-bold text-lg'>MARIN</h3>
                            <p className='text-white/80 text-xs'>Virtual Assistant</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className='text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10'>
                        <Icon icon='ic:round-close' className='text-2xl' />
                    </button>
                </div>

                {/* Messages Area */}
                <div className='flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-gray-50 dark:bg-darkmode/50'>
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'
                                }`}>
                            <div
                                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === 'user'
                                    ? 'bg-primary text-white rounded-br-none'
                                    : 'bg-white dark:bg-darklight text-midnight_text dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-700 rounded-bl-none'
                                    }`}>
                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className='flex justify-start'>
                            <div className='bg-white dark:bg-darklight text-midnight_text dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-700 rounded-2xl rounded-bl-none px-4 py-3'>
                                <div className="flex gap-1.5 items-center h-5">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form
                    onSubmit={handleSendMessage}
                    className='p-3 bg-white dark:bg-darklight border-t border-gray-200 dark:border-gray-700 flex items-center gap-2 shrink-0'>
                    <input
                        type='text'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Tanya sesuatu...'
                        className='flex-1 bg-gray-100 dark:bg-darkmode text-midnight_text dark:text-white px-4 py-2.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow'
                    />
                    <button
                        type='submit'
                        disabled={!input.trim() || isLoading}
                        className='p-2.5 bg-primary text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0 flex items-center justify-center'>
                        <Icon icon='ic:round-send' className='text-xl' />
                    </button>
                </form>
            </div>

            {/* Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className='w-14 h-14 md:w-auto md:h-14 md:px-6 bg-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-bounce-slow group relative gap-2'>
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <Icon icon='fluent:chat-20-filled' className='text-3xl' />
                    <span className='hidden md:block font-semibold whitespace-nowrap'>Ask MARIN AI</span>
                </button>
            )}
        </div>
    )
}

export default Chatbot
