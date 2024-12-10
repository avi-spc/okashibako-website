const BannerContent = () => {
	return (
		<section className="hero-section">
			<div className="hero-container-banner">
				<video muted autoplay="autoplay" loop width={'100%'}>
					<source src="/images/background.mp4" type="video/mp4" />
					Sorry, your browser doesn't support embedded videos.
				</video>
				<div className="brand-name">
					<div className="brand-name-main"><img src="/images/textual_logo.png" className="text-logo-img"></img></div>
					<div className="brand-name-traits">ux designer ꞏ animator ꞏ storyteller</div>
				</div>
			</div>
		</section>
	);
};

export default BannerContent;
