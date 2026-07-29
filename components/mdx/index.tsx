import { ReactNode } from 'react';

interface PreProps {
  children: ReactNode;
}

export function Pre({ children, ...props }: PreProps & Record<string, unknown>) {
  return <pre {...props} className="mb-4 overflow-x-auto">{children}</pre>;
}

interface CodeProps {
  className?: string;
  children: string;
}

export function Code({ className, children, ...props }: CodeProps) {
  const match = /language-(\w+)/.exec(className || '');
  const isInline = !match && !className;

  if (isInline) {
    return (
      <code
        className="px-1.5 py-0.5 rounded bg-[#16213e] text-sm font-mono text-[#e94560]"
        {...props}
      >
        {children}
      </code>
    );
  }

  return (
    <pre className="mb-4 p-4 rounded-lg bg-[#16213e] overflow-x-auto border border-[#2d2d44]">
      <code {...props}>{children}</code>
    </pre>
  );
}

interface TableProps {
  children: ReactNode;
}

export function Table({ children }: TableProps) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse rounded-lg overflow-hidden border border-[#2d2d44]">
        {children}
      </table>
    </div>
  );
}

interface THeadProps {
  children: ReactNode;
}

export function THead({ children }: THeadProps) {
  return <thead className="bg-[#16213e]">{children}</thead>;
}

interface THProps {
  children: ReactNode;
}

export function TH({ children }: THProps) {
  return (
    <th className="px-4 py-2 text-left font-medium border-b border-[#2d2d44] text-white">
      {children}
    </th>
  );
}

interface TDProps {
  children: ReactNode;
}

export function TD({ children }: TDProps) {
  return (
    <td className="px-4 py-2 border-b border-[#2d2d44] text-[#9ca3af]">
      {children}
    </td>
  );
}

interface BlockquoteProps {
  children: ReactNode;
}

export function Blockquote({ children, ...props }: BlockquoteProps & Record<string, unknown>) {
  return (
    <blockquote className="border-l-4 border-[#e94560] pl-4 py-1 my-4 italic text-[#9ca3af] bg-[#16213e]/50 rounded-r-lg" {...props}>
      {children}
    </blockquote>
  );
}

export function HR() {
  return <hr className="my-8 border-[#2d2d44]" />;
}

interface ImgProps {
  src: string;
  alt?: string;
}

export function Img({ src, alt }: ImgProps) {
  return (
    <figure className="my-6">
      <img
        src={src}
        alt={alt || ''}
        className="rounded-lg w-full"
        loading="lazy"
      />
      {alt && (
        <figcaption className="text-center text-sm text-[#9ca3af] mt-2">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}

interface CalloutProps {
  children: ReactNode;
  title?: string;
}

export function Callout({ children, title, ...props }: CalloutProps & Record<string, unknown>) {
  return (
    <div className="rounded-xl p-4 my-6 border border-[#22c55e] bg-[#22c55e]/10" {...props}>
      <div className="flex gap-3">
        <div className="flex-shrink-0 text-2xl">💡</div>
        <div className="flex-1 text-sm text-[#22c55e]">
          {title && <div className="font-bold mb-1">{title}</div>}
          {children}
        </div>
      </div>
    </div>
  );
}

export function CalloutWarning({ children, title, ...props }: CalloutProps & Record<string, unknown>) {
  return (
    <div className="rounded-xl p-4 my-6 border border-[#f39c12] bg-[#f39c12]/10" {...props}>
      <div className="flex gap-3">
        <div className="flex-shrink-0 text-2xl">⚠️</div>
        <div className="flex-1 text-sm text-[#f39c12]">
          {title && <div className="font-bold mb-1">{title}</div>}
          {children}
        </div>
      </div>
    </div>
  );
}

export function CalloutInfo({ children, title, ...props }: CalloutProps & Record<string, unknown>) {
  return (
    <div className="rounded-xl p-4 my-6 border border-[#00d9ff] bg-[#00d9ff]/10" {...props}>
      <div className="flex gap-3">
        <div className="flex-shrink-0 text-2xl">📚</div>
        <div className="flex-1 text-sm text-[#00d9ff]">
          {title && <div className="font-bold mb-1">{title}</div>}
          {children}
        </div>
      </div>
    </div>
  );
}

export function CalloutSuccess({ children, title, ...props }: CalloutProps & Record<string, unknown>) {
  return (
    <div className="rounded-xl p-4 my-6 border border-[#a855f7] bg-[#a855f7]/10" {...props}>
      <div className="flex gap-3">
        <div className="flex-shrink-0 text-2xl">🎉</div>
        <div className="flex-1 text-sm text-[#a855f7]">
          {title && <div className="font-bold mb-1">{title}</div>}
          {children}
        </div>
      </div>
    </div>
  );
}

interface InfoBoxProps {
  children: ReactNode;
  title?: string;
}

export function InfoBox({ children, title, ...props }: InfoBoxProps & Record<string, unknown>) {
  return (
    <div className="rounded-xl my-6 border border-[#2d2d44] bg-[#0f0f23] overflow-hidden" {...props}>
      <div className="px-4 py-2 bg-[#16213e] border-b border-[#2d2d44] font-medium text-sm flex items-center gap-2 text-white">
        📋 {title || 'Info'}
      </div>
      <div className="p-4">
        <div className="text-sm leading-relaxed text-[#9ca3af]">
          {children}
        </div>
      </div>
    </div>
  );
}

interface ChecklistProps {
  children: ReactNode;
}

export function Checklist({ children, ...props }: ChecklistProps & Record<string, unknown>) {
  return (
    <div className="rounded-xl my-6 border border-[#2d2d44] bg-[#0f0f23] overflow-hidden" {...props}>
      <div className="px-4 py-2 bg-[#16213e] border-b border-[#2d2d44] font-medium text-sm text-white">
        ✅ Checklist
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}

interface ChecklistItemProps {
  children: ReactNode;
  done?: boolean;
}

export function ChecklistItem({ children, done, ...props }: ChecklistItemProps & Record<string, unknown>) {
  return (
    <div className="flex items-start gap-2 mb-2 last:mb-0" {...props}>
      <span className="text-[#9ca3af]">{done ? '✅' : '⬜'}</span>
      <span className={done ? 'line-through text-[#9ca3af]' : ''}>{children}</span>
    </div>
  );
}

export const mdxComponents = {
  pre: Pre,
  code: Code,
  table: Table,
  thead: THead,
  th: TH,
  td: TD,
  blockquote: Blockquote,
  hr: HR,
  img: Img,
  Callout,
  CalloutWarning,
  CalloutInfo,
  CalloutSuccess,
  InfoBox,
  Checklist,
  ChecklistItem,
};
