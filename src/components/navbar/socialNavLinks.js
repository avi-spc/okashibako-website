import { useContext } from 'react';

import { SocialContext } from '../../contexts/socialContext';

const SocialNavLinks = ({ classType, colorMode }) => {
	const { socials } = useContext(SocialContext);

	return (
		<div className={classType}>
			<ul>
				{socials.map((social) => (
					<li key={social.name}>
						<a href={social.url} className={`${classType}-links`} target="_blank">
							<img
								src={
									colorMode === 'light'
										? `/images/socials/white/${social.name}.png`
										: `/images/socials/${social.name}.png`
								}
								alt=""
							/>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialNavLinks;
