import { useId, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { safeDestination } from './navigation.mjs';
export { safeDestination } from './navigation.mjs';

export interface Brand {
  name: string;
  logo?: ReactNode;
  /** Override the documented --mk-* CSS variables for the receiving brand. */
  style?: CSSProperties;
}

export function MarketingShell({ brand, children, footer }: {
  brand: Brand;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return <div className="mk-kit" style={brand.style}>
    <header className="mk-header">{brand.logo}<span>{brand.name}</span></header>
    <main>{children}</main>
    {footer && <footer className="mk-footer">{footer}</footer>}
  </div>;
}

export interface ActionLinkProps {
  destination?: string;
  allowedDestinations?: readonly string[];
  children: ReactNode;
  newTab?: boolean;
}

export function ActionLink({ destination, allowedDestinations = [], children, newTab = false }: ActionLinkProps) {
  const href = safeDestination(destination, allowedDestinations);
  if (!href) return <span>{children}</span>;
  return <a className="mk-button" href={href} target={newTab ? '_blank' : undefined}
    rel={newTab ? 'noopener noreferrer' : undefined}>{children}</a>;
}

export function MarketingHero({ title, description, action, preview }: {
  title: string;
  description: string;
  action?: ReactNode;
  preview?: ReactNode;
}) {
  const headingId = useId();
  return <section className="mk-hero" aria-labelledby={headingId}>
    <div><h1 id={headingId}>{title}</h1><p>{description}</p>{action}</div>
    {preview && <div className="mk-preview">{preview}</div>}
  </section>;
}

export interface AudiencePath {
  id: string;
  title: string;
  description: string;
}

export function AudiencePaths({ title, paths, selectedId, onSelect }: {
  title: string;
  paths: readonly AudiencePath[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const headingId = useId();
  return <section aria-labelledby={headingId}><h2 id={headingId}>{title}</h2>
    <div className="mk-grid">{paths.map(path => <button className="mk-card" type="button" key={path.id}
      aria-pressed={path.id === selectedId} onClick={() => onSelect(path.id)}>
      <strong>{path.title}</strong><span>{path.description}</span>
    </button>)}</div>
  </section>;
}

export interface Offer {
  title: string;
  description: string;
  price: string;
  eligibility: string;
  action?: ReactNode;
}

export function ContextualOffer({ offer }: { offer: Offer }) {
  const headingId = useId();
  return <aside className="mk-card" aria-labelledby={headingId}>
    <h2 id={headingId}>{offer.title}</h2><p>{offer.description}</p>
    <dl><dt>Price</dt><dd>{offer.price}</dd><dt>Eligibility</dt><dd>{offer.eligibility}</dd></dl>
    {offer.action}
  </aside>;
}

export function FAQ({ title, items }: {
  title: string;
  items: readonly { question: string; answer: ReactNode }[];
}) {
  const headingId = useId();
  return <section aria-labelledby={headingId}><h2 id={headingId}>{title}</h2>
    {items.map((item, index) => <details key={index}><summary>{item.question}</summary>{item.answer}</details>)}
  </section>;
}

export interface JourneyChapterData {
  id: string;
  title: string;
  summary: string;
  steps: readonly string[];
  result: string;
  recovery: string;
  prerequisites?: readonly string[];
  cost?: string;
  availability?: string;
  preview?: ReactNode;
}

export interface JourneyLabels {
  title: string;
  navigation: string;
  back: string;
  next: string;
  restart: string;
  steps: string;
  result: string;
  recovery: string;
  prerequisites: string;
  cost: string;
  end: string;
  empty: string;
}

const defaultLabels: JourneyLabels = {
  title: 'Product walkthrough', navigation: 'Walkthrough chapters',
  back: 'Back', next: 'Next', restart: 'Restart',
  steps: 'Steps', result: 'Result', recovery: 'If something goes wrong',
  prerequisites: 'Before you start', cost: 'Cost', end: 'Walkthrough complete',
  empty: 'Add walkthrough chapters to begin.',
};

export interface JourneyEvent {
  name: 'chapter_open' | 'tutorial_restart';
  chapterId: string;
}

export function JourneyPlayer({ chapters, initialChapterId, labels: labelOverrides, onEvent }: {
  chapters: readonly JourneyChapterData[];
  initialChapterId?: string;
  labels?: Partial<JourneyLabels>;
  onEvent?: (event: JourneyEvent) => void;
}) {
  const labels = { ...defaultLabels, ...labelOverrides };
  const [currentId, setCurrentId] = useState(initialChapterId ?? chapters[0]?.id ?? '');
  const [announcement, setAnnouncement] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  const headingId = useId();
  const current = chapters.find(chapter => chapter.id === currentId) ?? chapters[0];
  const index = current ? chapters.indexOf(current) : -1;

  function open(id: string, name: JourneyEvent['name'] = 'chapter_open') {
    const chapter = chapters.find(item => item.id === id);
    if (!chapter) return;
    setCurrentId(chapter.id);
    setAnnouncement(chapter.title);
    heading.current?.focus();
    try {
      onEvent?.({ name, chapterId: chapter.id });
    } catch {
      // A host analytics callback must not prevent navigation.
    }
  }

  if (!current) return <p>{labels.empty}</p>;
  return <section className="mk-journey" aria-label={labels.title}>
    <div className="mk-journey-top"><h2>{labels.title}</h2>
      <button type="button" onClick={() => chapters[0] && open(chapters[0].id, 'tutorial_restart')}>{labels.restart}</button>
    </div>
    <p className="mk-sr" role="status" aria-live="polite">{announcement}</p>
    <div className="mk-journey-grid">
      <nav aria-label={labels.navigation}><ol>{chapters.map(chapter => <li key={chapter.id}>
        <button type="button" aria-current={chapter.id === current.id ? 'step' : undefined}
          onClick={() => open(chapter.id)}>{chapter.title}</button>
      </li>)}</ol></nav>
      <article aria-labelledby={headingId}>
        <h3 id={headingId} ref={heading} tabIndex={-1}>{current.title}</h3>
        <p>{current.summary}</p>
        {current.availability && <p>{current.availability}</p>}
        {!!current.prerequisites?.length && <><h4>{labels.prerequisites}</h4>
          <ul>{current.prerequisites.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}</ul></>}
        <h4>{labels.steps}</h4><ol>{current.steps.map((step, stepIndex) => <li key={stepIndex}>{step}</li>)}</ol>
        <h4>{labels.result}</h4><p>{current.result}</p>
        <h4>{labels.recovery}</h4><p>{current.recovery}</p>
        {current.cost && <><h4>{labels.cost}</h4><p>{current.cost}</p></>}
        {current.preview}
        <div className="mk-controls">
          <button type="button" disabled={index <= 0} onClick={() => open(chapters[index - 1].id)}>{labels.back}</button>
          {index < chapters.length - 1
            ? <button type="button" onClick={() => open(chapters[index + 1].id)}>{labels.next}</button>
            : <p role="status">{labels.end}</p>}
        </div>
      </article>
    </div>
  </section>;
}

