import Image from 'next/image';
import { FiClock, FiTag, FiGithub, FiExternalLink } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../data/projectsData';

function ProjectSingle(props) {
	const coverImage = props.project.ProjectImages[0];
	const galleryImages = props.project.ProjectImages.slice(1);
	const links = props.project.ProjectInfo?.CompanyInfo || [];
	return (
		<div className="container mx-auto">
			<PagesMetaHead title={props.project.title} />

			{/* Stylish Cover Photo */}
			{coverImage && (
				<div className="group relative max-w-3xl mx-auto rounded-3xl mb-10 overflow-hidden mt-10 shadow-lg transition-shadow hover:shadow-2xl">
					<Image
						src={coverImage.img}
						alt={coverImage.title}
						layout="responsive"
						width={1200}
						height={320}
						className="object-cover h-40 sm:h-64 w-full"
					/>
					{/* Overlay (only on hover) */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					{/* Title and tags (only on hover) */}
					<div className="absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-12 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
						<h1 className="text-white text-2xl sm:text-4xl font-bold drop-shadow-2xl text-center mb-2">
							{props.project.ProjectHeader.title}
						</h1>
						<div className="flex flex-wrap gap-2 justify-center">
							{props.project.ProjectHeader.tags && props.project.ProjectHeader.tags.split(',').map((tag, idx) => (
								<span key={idx} className="bg-white/20 text-white text-xs sm:text-sm px-3 py-1 rounded-full font-medium shadow">
									{tag.trim()}
								</span>
							))}
						</div>
					</div>
				</div>
			)}

			{/* Project Links */}
			{links.length > 0 && (
				<div className="flex flex-wrap justify-center gap-3 mb-8">
					{links.map((link) => (
						<a
							href={link.details}
							target="_blank"
							rel="noopener noreferrer"
							key={link.id}
							className="inline-flex items-center gap-1 px-4 py-2 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 hover:bg-indigo-200 dark:hover:bg-indigo-800 text-base font-medium transition"
						>
							{link.title === 'GitHub' && <FiGithub className="inline" />}
							{link.title === 'Live Site' && <FiExternalLink className="inline" />}
							<span>{link.title}</span>
						</a>
					))}
				</div>
			)}

			{/* Header (now only date) */}
			<div className="mt-8">
				<div className="flex">
					<div className="flex items-center mr-10">
						<FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{props.project.ProjectHeader.publishDate}
						</span>
					</div>
				</div>
			</div>

			{/* Gallery (excluding cover) */}
			{galleryImages.length > 0 && (
				<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
					{galleryImages.map((project) => {
						return (
							<div className="mb-10 sm:mb-0" key={project.id}>
								<Image
									src={project.img}
									className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
									alt={project.title}
									key={project.id}
									layout="responsive"
									width={100}
									height={90}
								/>
							</div>
						);
					})}
				</div>
			)}

			{/* Info */}
			<div className="block sm:flex gap-0 sm:gap-10 mt-14">
				<div className="w-full sm:w-1/3 text-left">
					{/* Single project objectives */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{props.project.ProjectInfo.ObjectivesHeading}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{props.project.ProjectInfo.ObjectivesDetails}
						</p>
					</div>

					{/* Single project technologies */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{props.project.ProjectInfo.Technologies[0].title}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{props.project.ProjectInfo.Technologies[0].techs.join(
								', '
							)}
						</p>
					</div>

					{/* Single project social sharing */}
					<div>
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{props.project.ProjectInfo.SocialSharingHeading}
						</p>
						{/* <div className="flex items-center gap-3 mt-5">
							{props.project.ProjectInfo.SocialSharing.map(
								(social, index) => {
									<Link
										key={index}
										href={social.url}
										target="__blank"
										passHref={true}
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</Link>;
								}
							)}
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps({ query }) {
	const { id } = query;
	return {
		props: {
			project: projectsData.filter(
				(project) => project.id === parseInt(id)
			)[0],
		},
	};
}

export default ProjectSingle;
