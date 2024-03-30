import { useState, createContext } from 'react';

export const SocialContext = createContext();

const SocialContextProvider = (props) => {
	const [socials] = useState([
		{ name: 'instagram', url: 'https://www.instagram.com/3d.artstation.okashi/' },
		{ name: 'youtube', url: 'https://www.youtube.com/channel/UCKjfxwT4o_LEjMELV3EUlLw' },
		{ name: 'behance', url: 'https://www.behance.net/okashibako' },
		{ name: 'giphy', url: 'https://giphy.com/okashibako' },
		{ name: 'dribbble', url: 'https://dribbble.com/okashibako' }
	]);

	return <SocialContext.Provider value={{ socials }}>{props.children}</SocialContext.Provider>;
};

export default SocialContextProvider;
