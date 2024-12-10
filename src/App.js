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
import Games from './components/work/games/games';
import Graphics from './components/work/graphics/graphics';
import IndividualSeries from './components/work/series/individualSeries';
import IndividualComics from './components/work/comics/individualComics';
import IndividualGame from './components/work/games/individualGame';
import IndividualGraphics from './components/work/graphics/individualGraphics';
import Reel from './components/work/reel/reel';
import Loader from './components/work/loader';

function App() {
	return (
		<BrowserRouter>
			<WorkContextProvider>
				<SocialContextProvider>
					<div className="App">
						<Loader />
						<Routes>
							<Route path="/" element={((<Home />), (<Reel />))} />
							<Route path="/compositions" element={<Compositions />} />
							<Route path="/series" element={<Series />} />
							<Route path="/series/:seriesTitle" element={<IndividualSeries />} />
							<Route path="/comics" element={<Comics />} />
							<Route path="/comics/:comicsTitle" element={<IndividualComics />} />
							{/* <Route path="/games" element={<Games />} />
							<Route path="/games/:gameTitle" element={<IndividualGame />} /> */}
							<Route path="/graphics" element={<Graphics />} />
							<Route path="/graphics/:graphicsTitle" element={<IndividualGraphics />} />
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
