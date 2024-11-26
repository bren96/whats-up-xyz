'use client';

import { FormEventHandler } from 'react';
import { postEmail } from '../api-client/post-email';

export function EmailPage() {
  const handleOnSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const rawText = formData.get('emailContent') as string;

    try {
      const response = await postEmail({ rawText });
      console.log('Email submitted successfully:', response);
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  return (
    <div>
      <span>Email Page</span>
      <div className="border rounded p-2 h-full">
        <form className="flex flex-col" onSubmit={handleOnSubmit}>
          <button>Submit</button>
          <textarea name="emailContent" />
        </form>
      </div>
    </div>
  );
}
