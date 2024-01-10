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
					<div className="its-me-heading">It's me</div>
					<p>
					Ävdhêsh also known as <strong>"okashibako"</strong> is an exquisite blend of <strong>illustrator, 
					animator</strong> and <strong>storyteller</strong> with a strong focus on producing impactful experiences 
					imbued with a relentless pursuit of aesthetic enlightenment. Embracing the metamorphic 
					potential inherent in storytelling, coupled with the harmonious amalgamation of art and 
					technology infused with affection, strives to craft creations  that not only linger in the 
					recesses of people's minds but also take residence in their hearts for perpetuity.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
