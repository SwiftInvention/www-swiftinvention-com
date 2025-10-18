import React from 'react';
import { useForm } from 'react-hook-form';
import { DefaultPage } from '../default/DefaultPage';
import styles from './FeedbackPage.module.css';

export interface FeedbackPageProps {}

type FeedbackFormData = {
  name?: string;
  email: string;
  phone?: string;
  message?: string;
};

export const FeedbackPage: React.FC<FeedbackPageProps> = () => {
  const { register, handleSubmit } = useForm<FeedbackFormData>();
  const onSubmit = handleSubmit(({ name, email, phone, message }) => {
    const subject = 'Swift Invention Feedback';
    const n = name ? `Name: ${name}\n` : '';
    const e = email ? `Reply-To: ${email}\n` : '';
    const p = phone ? `Phone: ${phone}\n` : '';
    const m = message ? `Message:\n${message}\n` : '';
    const body = encodeURIComponent(n + e + p + m);
    const mailto = `mailto:contact@swiftinvention.com?subject=${subject}&body=${body}`;
    window.open(mailto, '_blank');
  });

  const nameInput = 'name';
  const emailInput = 'email';
  const phoneInput = 'phone';
  const messageInput = 'message';

  return (
    <DefaultPage>
      <div className="bg-pageBg bg-cover bg-no-repeat bg-center font-inter">
        <div className="py-16 px-5 lg:py-32 flex justify-center items-center ">
          <div className="lg:w-660 flex flex-col justify-center items-center bg-secondaryCol4 rounded-xl shadow-card p-16 bg-gradient-to-br from-primaryCol3WithOpacity to-transparent">
            <div className="text-secondaryCol1">
              <div className="text-5xl font-bold mb-5">Let's talk</div>
              <div className="text-xl leading-7 mb-8 text-secondaryCol1/85">
                Get in touch about your project or to learn more about Swift by
                by filling out our contact form for a response within 48 hours.
              </div>
            </div>
            <form
              className="w-full flex flex-col justify-center items-center"
              onSubmit={onSubmit}
            >
              <div className="space-y-5 w-full">
                <div className={styles.inputContainer}>
                  <label htmlFor={nameInput}>
                    <span className="sr-only">Name</span>
                    <input
                      id={nameInput}
                      type="text"
                      className={styles.inputElem}
                      placeholder="Name"
                      {...register(nameInput)}
                    />
                  </label>
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor={emailInput}>
                    <span className="sr-only">Email</span>
                    <input
                      id={emailInput}
                      type="email"
                      autoComplete="email"
                      required
                      className={styles.inputElem}
                      placeholder="Email Address"
                      {...register(emailInput)}
                    />
                  </label>
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor={phoneInput}>
                    <span className="sr-only">Name</span>
                    <input
                      id={phoneInput}
                      type="text"
                      className={styles.inputElem}
                      placeholder="Phone Number"
                      {...register(phoneInput)}
                    />
                  </label>
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor={messageInput}>
                    <span className="sr-only">Name</span>
                    <textarea
                      id={messageInput}
                      rows={6}
                      className={styles.areaElem}
                      placeholder="Message"
                      {...register(messageInput)}
                    />
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-primaryCol3 rounded-md hover:text-primaryCol1 hover:bg-primaryCol3 py-3.5 my-5 font-medium text-base uppercase focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryCol3"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </DefaultPage>
  );
};
