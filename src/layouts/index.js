import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Card from '../components/Card';
import Header from '../components/header';
import './index.css';
import { ParallaxProvider } from 'react-scroll-parallax';

const Layout = ({ children, data }) => (
	<div>
		<ParallaxProvider>
			<Header />
			<Helmet
				title={data.site.siteMetadata.title}
				meta={[
					{ name: 'description', content: 'Sample' },
					{ name: 'keywords', content: 'sample, something' }
				]}
			/>

			{children()}

			<div className="CardGroup">
				<Card title="UX/UI Prototypes" text="10 sections" image={require('../assets/background6.jpg')} />
				<Card title="Web Development" text="11 sections" image={require('../assets/background6.jpg')} />
				<Card title="3D Graphics" text="5 sections" image={require('../assets/background6.jpg')} />
				<Card title="Side Projects" text="10 sections" image={require('../assets/background6.jpg')} />
				<Card title="Data Engineering" text="10 sections" image={require('../assets/background6.jpg')} />
				<Card title="Data Engineering" text="10 sections" image={require('../assets/background6.jpg')} />
			</div>

			<div className="Logos">
				<img src={require('../assets/GooglePlus.svg')} width="35" />
				<img src={require('../assets/Twitter.svg')} width="35" />
				<img src={require('../assets/LinkedIn.svg')} width="35" />
				<img src={require('../assets/Instagram.svg')} width="35" />
				<img src={require('../assets/YouTube.svg')} width="35" />
			</div>
		</ParallaxProvider>
	</div>
);

Layout.propTypes = {
	children: PropTypes.func
};

export default Layout;

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
