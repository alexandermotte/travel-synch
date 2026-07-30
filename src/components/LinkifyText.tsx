import React from "react";

/**
 * Auto-detects URLs (http/https/www), email addresses, and the exec-pass.com
 * domain inside a plain string and renders them as clickable <a> links.
 */
const LinkifyText: React.FC<{ text: string }> = ({ text }) => {
  const regex = /https?:\/\/[^\s]+|www\.[^\s]+|[\w.-]+@[\w.-]+\.\w+|exec-pass\.com/gi;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(regex)) {
    const matchStart = match.index!;
    const matchText = match[0];

    if (matchStart > lastIndex) {
      elements.push(<span key={`t${lastIndex}`}>{text.slice(lastIndex, matchStart)}</span>);
    }

    if (/^https?:\/\//i.test(matchText)) {
      const href = matchText.replace(/[.,;:!?]+$/, "");
      const trailing = matchText.slice(href.length);
      elements.push(
        <a key={`l${matchStart}`} href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          {href}
        </a>
      );
      if (trailing) elements.push(<span key={`p${matchStart}`}>{trailing}</span>);
    } else if (/^www\./i.test(matchText)) {
      const clean = matchText.replace(/[.,;:!?]+$/, "");
      const trailing = matchText.slice(clean.length);
      elements.push(
        <a key={`l${matchStart}`} href={`https://${clean}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          {clean}
        </a>
      );
      if (trailing) elements.push(<span key={`p${matchStart}`}>{trailing}</span>);
    } else if (/^[\w.-]+@[\w.-]+\.\w+$/i.test(matchText)) {
      elements.push(
        <a key={`l${matchStart}`} href={`mailto:${matchText}`} className="text-primary hover:underline">
          {matchText}
        </a>
      );
    } else if (/^exec-pass\.com$/i.test(matchText)) {
      elements.push(
        <a key={`l${matchStart}`} href="https://exec-pass.com" className="text-primary hover:underline">
          {matchText}
        </a>
      );
    }

    lastIndex = matchStart + matchText.length;
  }

  if (lastIndex < text.length) {
    elements.push(<span key={`t${lastIndex}`}>{text.slice(lastIndex)}</span>);
  }

  if (elements.length === 0) return <>{text}</>;
  return <>{elements}</>;
};

export default LinkifyText;
