import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

export const VacancyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const ref = useRef<HTMLDivElement | null>(null);
  const getHtml = async () => {
    const resp = await fetch(
      new URL(
        `${window.location.origin}/data/vacancies/${id}.html`,
        import.meta.url
      ).href
    );
    const text = await resp.text();
    const clean = DOMPurify.sanitize(text);
    if (ref.current !== null) ref.current.innerHTML = clean;
  };
  useEffect(() => {
    getHtml();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="font-sans text-secondaryCol1" ref={ref} />
    </div>
  );
};
