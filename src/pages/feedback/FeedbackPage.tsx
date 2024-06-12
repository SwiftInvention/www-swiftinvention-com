import React from 'react';
import { useForm } from 'react-hook-form';
import { DefaultPage } from '../default/DefaultPage';
import servicesBg from '~/assets/images/services-bg.png';
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
      <div className="relative min-h-screen h-full">
        <div className="hidden sm:block sm:absolute sm:inset-0 mx-auto max-w-8xl">
          <img
            className="h-full w-full object-cover object-left-top"
            src={servicesBg}
            alt="page background"
          />
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 px-4 sm:px-8 sm:pl-16 md:pl-30 pt-16 lg:pt-32">
            <div className="max-w-md font-sans text-secondaryCol1">
              <div className="text-4xl font-medium mb-5">Contact Us</div>
              <div className="text-lg font-normal leading-6">
                Have a project? Want to learn more about Swift? Want to work
                with us? Fill out our contact form here and we’ll get back to
                you within 48 hours
              </div>
            </div>
            <form
              onSubmit={onSubmit}
              className="max-w-xl flex flex-col justify-center items-center bg-secondaryCol4 rounded-xl shadow-card  py-50"
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
                className="inline-flex items-center justify-center border-2 border-primaryCol3 text-primaryCol3 hover:text-primaryCol1 hover:bg-primaryCol3 h-8 w-22 mt-10 font-sans font-medium text-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryCol3"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </DefaultPage>
  );
};
