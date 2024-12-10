import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About = () => {
	const aboutPage = useRef();

	useEffect(() => {
		gsap.to(aboutPage.current, {
			opacity: '100%',
			duration: 0.3,
			ease: 'Power2.easeOut'
		});
	});

	return (
		<section className="about-section curtain-margin" ref={aboutPage}>
			<div className="about-container">
				<div className="about-img">
					<img
						src="/images/about.jpg"
						alt=""
					/>
				</div>
				<div className="about-content">
					<div className="its-me-heading">it's me</div>
					<p>
						Ävdhêsh also known as <strong>"okashibako"</strong> is an exquisite blend of <strong>ux designer,
							animator</strong> and <strong>storyteller</strong> dedicated to creating deeply impactful
						experiences driven by an unwavering quest for aesthetic brilliance. Harnessing the transformative
						power of storytelling and seamlessly blending art with technology infused with heartfelt passion,
						Ävdhêsh aspires to craft works that not only resonate in the depths of people’s minds but also find
						a permanent place in their hearts.

						<div className="speciality-tools">
							<div className='speciality-section'>
								<div className="speciality-heading">
									Safe hands with
								</div>
								<ul className="specialities">
									<li>UX Design</li>
									<li>Motion Design</li>
									<li>Game Development</li>
								</ul>
							</div>
							<div className='tools-section'>
								<div className="tools-heading">
									Tools
								</div>
								<ul className="tools">
									<li>Figma</li>
									<li>Cinema4D</li>
									<li>Adobe Illustrator</li>
									<li>Adobe AfterEffects</li>
									<li>Adobe Animate</li>
									<li>Autodesk Maya</li>
									<li>Procreate</li>
									<li>Redshift</li>
									<li>Unity</li>
								</ul>
							</div>
						</div>
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
