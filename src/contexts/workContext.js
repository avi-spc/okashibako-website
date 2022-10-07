import { useState, createContext } from 'react';

import dataStore from '../store/dataStore';

export const WorkContext = createContext();

const WorkContextProvider = (props) => {
	const [store] = useState(dataStore);

	return <WorkContext.Provider value={store}>{props.children}</WorkContext.Provider>;
};

export default WorkContextProvider;
