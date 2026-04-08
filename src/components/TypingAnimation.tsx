import { useState, useEffect } from 'react';

const PHRASES = [
  'I build the Web.',
  'Frontend Developer',
  'React Specialist',
  'JavaScript Programmer',
  'AI-Native Developer',
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

export function TypingAnimation() {
  const [displayed, setDisplayed] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIndex];

    if (!isDeleting && displayed === current) {
      const pause = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayed === '') {
      const pause = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex(i => (i + 1) % PHRASES.length);
      }, PAUSE_AFTER_DELETE);
      return () => clearTimeout(pause);
    }

    const timeout = setTimeout(() => {
      setDisplayed(isDeleting
        ? current.slice(0, displayed.length - 1)
        : current.slice(0, displayed.length + 1)
      );
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <span className="inline-flex items-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
        {displayed}
      </span>
      {displayed.length > 0 && (
        <span className="ml-0.5 inline-block w-[3px] h-[0.85em] bg-accent align-middle animate-pulse" />
      )}
    </span>
  );
}
