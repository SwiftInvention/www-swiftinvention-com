import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { getVacancyNameById } from './CareersMainPage';
import { DefaultPage } from '../default/DefaultPage';
import servicesBg from '~/assets/images/services-bg.png';

export const VacancyPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const id = params.id as string;
  const [innerHtml, setInnerHtml] = useState('');
  const getHtml = async () => {
    const resp = await fetch(
      new URL(
        `${window.location.origin}/data/vacancies/${id}.html`,
        import.meta.url
      ).href
    );
    const text = await resp.text();
    setInnerHtml(text);
  };
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(innerHtml),
  });
  useEffect(() => {
    getHtml();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const vacancyName = getVacancyNameById(id);

  return (
    <DefaultPage>
      <div className="relative min-h-screen h-full">
        <div className="hidden sm:block sm:absolute sm:inset-0 mx-auto max-w-8xl">
          <img
            className="h-full w-full object-cover object-left-top"
            src={servicesBg.src}
            alt="services page background"
          />
        </div>
        <div className="relative">
          <div className="px-10 md:px-24 pt-16 lg:pt-32">
            <div>
              <div
                className="font-sans text-secondaryCol1"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={sanitizedData()}
              />
              <div className="flex flex-col items-center mt-12 pb-12">
                <a
                  href={`mailto:job@swiftinvention.com?subject=<Your name> - resume for ${vacancyName} position&body=Dear Hiring Manager,`}
                >
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center border rounded-md border-primaryCol3 text-primaryCol3 hover:text-primaryCol1 hover:bg-primaryCol3 h-12 w-37 font-sans font-medium text-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryCol3"
                  >
                    Apply Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultPage>
  );
};
