import React, { FC, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './_style.scss';

interface ISupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  sender: 'user' | 'admin';
  text: string;
}

const index: FC<ISupportModalProps> = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const userMail = 'email kerak';
  const userPassword = 'parol kerak';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim() === '') return;
    const newMessage: Message = { sender: 'user', text: message };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    if (message.toLowerCase() === userMail.toLowerCase()) {
      setTimeout(() => {
        const adminResponse: Message = {
          sender: 'admin',
          text: 'Albatta! test@example.com',
        };
        setMessages((prevMessages) => [...prevMessages, adminResponse]);
      }, 1000);
    } else if (
      message.toLowerCase() === userPassword.toLowerCase() &&
      message === userPassword
    ) {
      setTimeout(() => {
        const adminResponse: Message = {
          sender: 'admin',
          text: 'Marxamat: password123.',
        };
        setMessages((prevMessages) => [...prevMessages, adminResponse]);
      }, 1000);
    } else {
      setTimeout(() => {
        const adminResponse: Message = {
          sender: 'admin',
          text: 'Xabaringiz yuborildi.',
        };
        setMessages((prevMessages) => [...prevMessages, adminResponse]);
      }, 1000);
    }

    setMessage('');
  };

  if (!isOpen) return null;

  return (
    <div className={`support-modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="support-modal">
        <div className="chat-header">
          <h2>Qo'llab-quvvatlash xizmati</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>

        <div className="chat-body">
          <div className="messages">
            {messages.length === 0 && (
              <div className="message admin typing-text">
                <TypeAnimation
                  sequence={[
                    'Sizga qanday yordam bera olaman ?',
                    1000,
                    'How can I help you?',
                    1000,
                    'Чем могу помочь?',
                    1000,
                  ]}
                  speed={50}
                  style={{ fontSize: '14px', fontWeight: '500' }}
                  repeat={Infinity}
                />
              </div>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === 'user' ? 'user' : 'admin'}`}
              >
                <div className="message-text">{msg.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="chat-footer">
          <form onSubmit={handleSubmit} className="chat-form">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Xabar yuborish..."
              rows={3}
              required
            ></textarea>
            <button type="submit">Yuborish</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
