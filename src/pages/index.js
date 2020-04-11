import React from 'react';
import Link from 'gatsby';
import { Parallax } from 'react-scroll-parallax';

const IndexPage = () => (
	<div>
		<Parallax className="custom-class" y={[ -20, 20 ]} tagOuter="figure">
			<div>
				<div className="HeroImage" />
				<div className="Hero" />
			</div>

			<Link to="/video">Watch the video</Link>
			<Link to="/page-2/">Go to page 2</Link>
		</Parallax>
	</div>
);

export default IndexPage;
