// src/pages/ChatPage.js
import React, { useEffect, useState, useRef } from "react";
import api from "../api/app"; // <-- your file is at src/api/app.js according to your message
import "./ChatPage.css";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    api
      .get("/chats/recent")
      .then((data) => {
        if (!ignore) setMessages(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.warn("Failed to load chats (demo):", err?.message ?? err);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    // scroll to bottom on new message
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  async function handleSend(e) {
    e?.preventDefault();
    if (!text.trim()) return;
    const newMsg = {
      id: Date.now(),
      text: text.trim(),
      user: "You",
      ts: new Date().toISOString(),
    };
    setMessages((m) => [...m, newMsg]);
    setText("");

    try {
      // attempt to send to backend; if backend returns saved message you may reconcile
      await api.post("/chats/send", { text: newMsg.text });
    } catch (err) {
      console.warn("Send failed (demo):", err?.message ?? err);
      // optionally mark message as unsent or retry
    }
  }

  return (
    <div className="chat-page">
      <header className="chat-header">
        <div>
          <h2>Hub Chat</h2>
          <p className="muted">Connect with community & matches</p>
        </div>
      </header>

      <main className="chat-main" ref={listRef}>
        {loading ? (
          <div className="muted center">Loading messages...</div>
        ) : messages.length === 0 ? (
          <div className="muted center">No messages yet — say hello!</div>
        ) : (
          <ul className="messages">
            {messages.map((m) => (
              <li
                key={m.id}
                className={`message ${m.user === "You" ? "mine" : "theirs"}`}
                title={new Date(m.ts).toLocaleString()}
              >
                <div className="msg-meta">
                  <strong className="msg-user">{m.user}</strong>
                  <small className="msg-ts">{new Date(m.ts).toLocaleTimeString()}</small>
                </div>
                <div className="msg-text">{m.text}</div>
              </li>
            ))}
          </ul>
        )}
      </main>

      <form className="chat-form" onSubmit={handleSend}>
        <input
          aria-label="Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a message..."
          className="chat-input"
        />
        <button type="submit" className="chat-send">
          Send
        </button>
      </form>
    </div>
  );
}
