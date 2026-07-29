'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface CodeBlockClientProps {
  language: string;
  children: string;
}

export function CodeBlockClient({ language, children }: CodeBlockClientProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="rounded-lg overflow-hidden mb-6 bg-secondary">
        <pre className="p-4 overflow-x-auto text-sm">
          <code>{children}</code>
        </pre>
      </div>
    );
  }

  const codeStyle = theme === 'dark' || theme === 'colorful' ? oneDark : oneLight;

  return (
    <div className="rounded-lg overflow-hidden mb-6">
      <div className="bg-secondary px-4 py-2 border-b border-border flex items-center justify-between">
        <span className="text-xs text-muted-foreground font-mono">{language}</span>
      </div>
      <SyntaxHighlighter
        style={codeStyle}
        language={language || 'text'}
        PreTag="div"
        customStyle={{
          margin: 0,
          padding: '1rem',
          fontSize: '0.875rem',
          borderRadius: 0,
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
