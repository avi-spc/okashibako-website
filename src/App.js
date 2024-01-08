import { BrowserRouter, Route, Routes } from 'react-router-dom';

import WorkContextProvider from './contexts/workContext';
import SocialContextProvider from './contexts/socialContext';

import Navbar from './components/navbar/navbar';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import MobileNavbar from './components/navbar/mobileNavbar';
import Footer from './components/footer/footer';
import Compositions from './components/work/compositions/compositions';
import Series from './components/work/series/series';
import Comics from './components/work/comics/comics';
import IndividualSeries from './components/work/series/individualSeries';
import IndividualComics from './components/work/comics/individualComics';
import Reel from './components/work/reel/reel';

function App() {
	return (
		<BrowserRouter>
			<WorkContextProvider>
				<SocialContextProvider>
					<div className="App">
						<Routes>
							<Route path="/" element={((<Home />), (<Reel />))} />
							<Route path="/compositions" element={<Compositions />} />
							<Route path="/series" element={<Series />} />
							<Route path="/series/:seriesTitle" element={<IndividualSeries />} />
							<Route path="/comics" element={<Comics />} />
							<Route path="/comics/:comicsTitle" element={<IndividualComics />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
						<Navbar />
						<Footer />
					</div>
				</SocialContextProvider>
			</WorkContextProvider>
		</BrowserRouter>
	);
}

export default App;
