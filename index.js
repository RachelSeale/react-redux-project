const styles = require('../style/main.scss');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar/search_bar';
import VideoList from './components/videoList/video_list';
import VideoDetail from './components/videoDetail/video_detail';

const API_KEY = 'AIzaSyBh76knt0_sWG7caVpVDURnH2u00ehf7rI';

// Create a new component. This component should produce some html

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('food');
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
				<VideoDetail video={ this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
					videos={ this.state.videos }
				/>
			</div>
		);
	}
}

// take this compontent's genereated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
