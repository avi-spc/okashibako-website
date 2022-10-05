const BannerContent = () => {
	return (
		<section className="hero-section">
			<div className="hero-container">
				<video muted autoplay="autoplay" loop width={'100%'}>
					<source src="/images/hero-banner.mp4" type="video/mp4" />
					Sorry, your browser doesn't support embedded videos.
				</video>
			</div>
		</section>
	);
};

export default BannerContent;
