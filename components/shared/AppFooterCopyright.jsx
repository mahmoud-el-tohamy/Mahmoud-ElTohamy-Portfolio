function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/mahmoud-el-tohamy/portfolio"
					target="__blank"
					className="hover:underline hover:text-emerald-600 dark:hover:text-emerald-400 ml-1 duration-500"
				>
					Portfolio by Mahmoud El-Tohamy
				</a>
				.{' '}
			</div>
		</div>
	);
}

export default AppFooterCopyright;
