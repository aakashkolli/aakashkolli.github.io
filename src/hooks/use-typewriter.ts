import { useEffect, useState } from "react";

export function useTypewriter(text: string, opts?: { speed?: number; startDelay?: number }) {
  const speed = opts?.speed ?? 55;
  const startDelay = opts?.startDelay ?? 850;
  const [started, setStarted] = useState(false);
  const [typed, setTyped] = useState("");
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started || typed.length >= text.length) return;
    const t = setTimeout(() => setTyped(text.slice(0, typed.length + 1)), speed);
    return () => clearTimeout(t);
  }, [started, typed, text, speed]);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  return { typed, cursorOn, started };
}
