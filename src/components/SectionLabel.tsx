export function SectionLabel({
  index,
  children,
  ruled = true,
  className = '',
}: {
  index?: string;
  children: React.ReactNode;
  ruled?: boolean;
  className?: string;
}) {
  return (
    <p className={`label${ruled ? ' label--ruled' : ''}${className ? ` ${className}` : ''}`}>
      {index ? <span className="label__index">{index}</span> : null}
      <span>{children}</span>
    </p>
  );
}
