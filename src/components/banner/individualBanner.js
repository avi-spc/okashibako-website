const IndividualBanner = ({ bannerUrl }) => {
	return (
		<section className="hero-section">
			<div className="hero-container">
				<img src={bannerUrl} alt="" className="banner-img" />
			</div>
		</section>
	);
};

export default IndividualBanner;
