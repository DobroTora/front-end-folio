import React from 'react';
import Link from 'gatsby-link';
import './Header.css';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hasScrolled: false
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll = (event) => {
		const scrollTop = window.pageYOffset;

		if (scrollTop > 50) {
			this.setState({ hasScrolled: true });
		} else {
			this.setState({ hasScrolled: false });
		}
	};

	render() {
		return (
			<div className="Header" className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
				<div className="HeaderGroup">
					<Link to="/">
						<img width="30" src={require('../assets/Twitter.svg')} />
					</Link>
					<Link to="/about">About</Link>
					<Link to="/blog">Blog</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/contact">
						<button>Contact</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Header;
