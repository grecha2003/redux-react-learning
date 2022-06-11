import './App.css';
import Comments from './Component/Comments';
import Likes from './Component/Likes';
import Title from './Component/Title';

function App() {
	return (
		<div className="App">
			<div className="wrap">
				<div className="card">
					<div className="card-image">
						<img
							src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
							alt="card"
						/>
						<Title />
						<Likes />
					</div>
					<Comments />
				</div>
			</div>
		</div>
	);
}

export default App;
