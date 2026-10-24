import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Tag } from './Tag';
import { faq } from '../content/site';

const EASE_OUT = [0.22, 0.61, 0.36, 1] as const;

function FaqItem({
  question,
  answer,
  index,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const baseId = useId();
  const buttonId = `${baseId}-trigger-${index}`;
  const panelId = `${baseId}-panel-${index}`;
  const reduced = useReducedMotion();

  return (
    <div className="faq__item">
      <h3 className="faq__heading">
        <button
          type="button"
          className="faq__trigger"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="faq__question">{question}</span>
          <span className="faq__icon" aria-hidden="true" />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            className="faq__panel"
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduced ? false : { height: 0 }}
            animate={{ height: 'auto' }}
            exit={reduced ? {} : { height: 0 }}
            transition={{ duration: reduced ? 0 : 0.38, ease: EASE_OUT }}
          >
            <p className="faq__answer">{answer}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/** The questions that follow the standard — kept inside section 08, as in the reference. */
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq" id="faq" aria-label="Frequently asked questions">
      <Tag as="div" className="faq__list">
        {faq.map((item, index) => (
          <FaqItem
            key={item.q}
            index={index}
            question={item.q}
            answer={item.a}
            open={openIndex === index}
            onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
          />
        ))}
      </Tag>
    </section>
  );
}
