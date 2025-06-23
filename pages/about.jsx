import { motion } from 'framer-motion';
// import AboutClients from '../components/about/AboutClients';
import AboutCounter from '../components/about/AboutCounter';
import AboutMeBio from '../components/about/AboutMeBio';
import Education from '../components/about/Education';
import Skills from '../components/about/Skills';
import Experience from '../components/about/Experience';
import Leadership from '../components/about/Leadership';
import Languages from '../components/about/Languages';
import PagesMetaHead from '../components/PagesMetaHead';

function about() {
	return (
		<div>
			<PagesMetaHead title="About Me" />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
				<Education />
				<Skills />
				<Experience />
				<Leadership />
				<Languages />
			</motion.div>

			{/** Counter without paddings */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div>

			{/* Removed AboutClients section */}
		</div>
	);
}

export default about;
