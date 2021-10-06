import React from 'react';
import styled from 'styled-components';

import * as S from '../../../../styles/banner';

const BlogBanner = ({ subtitle }) => {
	return (
		<S.BlogBanner className="blogBanner">
			<div className="blogBanner__wrapper container--center">
				<span className="blogBanner__subtitle subtitle--style">BLOG</span>
				<h2 className="blogBanner__title title--style">
					Fique por dentro do universo de telecom
				</h2>
				<p>{subtitle}</p>
			</div>
		</S.BlogBanner>
	);
};

export default BlogBanner;
