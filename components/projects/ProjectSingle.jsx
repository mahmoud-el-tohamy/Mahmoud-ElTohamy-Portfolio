import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const imageStyle = { maxWidth: '100%', height: 'auto' };

const ProjectSingle = (props) => {
	const links = props.ProjectInfo?.CompanyInfo || [];
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link
				href="/projects/[id]"
				as={'/projects/' + props.id}
				aria-label="Single Project"
				passHref
			>
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<Image
							src={props.img}
							className="rounded-t-xl border-none"
							alt="Single Project"
							layout="responsive"
							width={100}
							height={90}
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
							{props.title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{props.category}
						</span>
						{/* Project Links */}
						{links.length > 0 && (
							<div className="flex flex-wrap justify-center gap-3 mt-4">
								{links.map((link) => (
									<a
										href={link.details}
										target="_blank"
										rel="noopener noreferrer"
										key={link.id}
										className="inline-flex items-center gap-1 px-3 py-1 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 hover:bg-indigo-200 dark:hover:bg-indigo-800 text-sm font-medium transition"
									>
										{link.title === 'GitHub' && <FiGithub className="inline" />}
										{link.title === 'Live Site' && <FiExternalLink className="inline" />}
										<span>{link.title}</span>
									</a>
								))}
							</div>
						)}
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
