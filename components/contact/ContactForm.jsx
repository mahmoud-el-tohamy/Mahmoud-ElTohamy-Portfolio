import React, { useRef, useState } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import emailjs from 'emailjs-com';

function ContactForm() {
	const form = useRef();
	const [sent, setSent] = useState(false);
	const [error, setError] = useState(null);

	const sendEmail = (e) => {
		e.preventDefault();
		setError(null);
		emailjs
			.sendForm(
				'service_gyj836y', // EmailJS service ID
				'template_gkwudon', // EmailJS template ID
				form.current,
				'E1nkngYfW0WYPw1_5' // TODO: Replace with your EmailJS public key
			)
			.then(
				(result) => {
					setSent(true);
				},
				(error) => {
					setError('Failed to send. Please try again.');
				}
			);
	};

	if (sent) return <p className="text-emerald-600">Message sent! Thank you.</p>;

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					ref={form}
					onSubmit={sendEmail}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>

					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="mt-6">
						<span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
							<Button
								title="Send Message"
								type="submit"
								aria-label="Send Message"
							/>
						</span>
					</div>
					{error && <p className="text-red-500 mt-4">{error}</p>}
				</form>
			</div>
		</div>
	);
}

export default ContactForm;
