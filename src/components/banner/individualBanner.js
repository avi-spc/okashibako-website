const IndividualBanner = ({ bannerUrl }) => {
	return (
		<section className="hero-section curtain-margin">
			<div className="hero-container">
				<img src={bannerUrl} alt="" className="banner-img" />
			</div>
		</section>
	);
};

export default IndividualBanner;
