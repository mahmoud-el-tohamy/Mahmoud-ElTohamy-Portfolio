import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';

function AboutMeBio() {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex justify-center items-start">
				<Image
					src="/images/profile.jpeg"
					width={200}
					height={200}
					className="rounded-lg shadow-md"
					alt="Profile Image"
				/>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left bg-primary-light dark:bg-secondary-dark rounded-xl p-8 shadow transition-colors duration-200">
				<h2 className="text-2xl sm:text-3xl font-semibold text-primary-dark dark:text-primary-light mb-4">About Me</h2>
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-secondary-dark dark:text-secondary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
}

export default AboutMeBio;
