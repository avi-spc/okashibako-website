import { useState, createContext } from 'react';

export const SocialContext = createContext();

const SocialContextProvider = (props) => {
	const [socials] = useState([
		{ name: 'instagram', url: 'https://www.instagram.com/creativekonami/' },
		{ name: 'youtube', url: 'https://www.youtube.com/channel/UCaDESR8aYy8C9nykJ6GZMYg' },
		{ name: 'behance', url: 'https://www.behance.net/creativekonami' },
		{ name: 'deviantart', url: 'https://www.deviantart.com/creativekonami' },
		{ name: 'dribbble', url: 'https://dribbble.com/creativekonami' }
	]);

	return <SocialContext.Provider value={{ socials }}>{props.children}</SocialContext.Provider>;
};

export default SocialContextProvider;
