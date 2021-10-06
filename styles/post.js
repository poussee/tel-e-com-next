import styled from 'styled-components';

export const PostContainer = styled.div`
	display: grid;
	grid-template-columns: 40px auto;
	max-width: 60rem;
	margin: 0 auto;
	padding-bottom: 100px;

	ul li {
		text-align: justify;
	}

	@media screen and (max-width: 900px) {
		grid-template-columns: auto;
	}
`;

export const PostHeader = styled.header`
	color: #fff;
	margin: auto;
	max-width: 70rem;
	padding: 5rem 5rem 0;
`;

export const PostTitle = styled.h1`
	font-size: 4rem;
	font-weight: 700;
	padding: 0 1.4rem;
	margin: 1rem auto;
	color: #085586;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 900px) {
		font-size: 3rem;
	}
`;

export const MainContent = styled.section`
	margin: auto;
	max-width: 60rem;
	padding: 2rem 5rem;
	p,
	h1,
	h2,
	h3,
	h4,
	ul,
	ol,
	.tags,
	iframe,
	.button-post {
		color: #000;
		font-size: 1.25rem;
		font-weight: 300;
		line-height: 1.7;
		letter-spacing: 0.069rem;
		padding: 0 1.4rem;
	}
	p {
		margin: 0 auto 1.6rem;
		text-align: justify;
	}
	h1,
	h2,
	h3,
	h4,
	h5 {
		margin: 2.4rem auto 1rem;
		color: #085586;
	}
	ul,
	ol {
		list-style: disc;
		padding-left: 2.5rem;
		margin: 0 auto 1.6rem;
	}
	li {
		padding: 0.625rem 0;
		& > ul {
			margin-bottom: 0;
		}
	}
	p,
	li {
		code {
			word-wrap: break-word;
		}
	}
	p,
	li,
	ul {
		color: #58595b;
		font-family: 'Titillium Web', sans-serif;
	}
	img {
		display: block;
		max-width: 100%;
		margin: 1.875rem auto;
	}
	iframe {
		padding: 0 1.6rem 1.6rem;
		width: 100%;
	}
	blockquote {
		color: #fff;
		border-left: 0.3rem solid #085586;
		padding: 0 1.875rem;
		margin: 3.125rem auto;
	}
	hr {
		border: 1px solid #38444d;
		margin: 3rem auto;
	}
	#twitter-widget-0,
	.instagram-media,
	.twitter-tweet {
		margin: 20px auto !important;
	}
	h1,
	h2,
	h3,
	h4,
	h5 {
		letter-spacing: 0.069rem;
		line-height: 1.4;
	}
	h1 {
		font-size: 2.8rem;
	}
	h2 {
		font-size: 2.1rem;
		text-align: justify;
	}
	h3 {
		font-size: 1.6rem;
	}
	h4 {
		font-size: 1.4rem;
	}
	h5 {
		font-size: 1.2rem;
	}
	strong {
		font-weight: 700;
	}
	.gatsby-resp-image-background-image {
		z-index: 2;
		opacity: 1 !important;
	}
	.gatsby-resp-image-image {
		box-shadow: none !important;
		transition: opacity 0.2s;
		&.lazyload {
			opacity: 0;
		}
		&.lazyloaded {
			opacity: 1;
			z-index: 3;
		}
	}
	.gatsby-highlight {
		padding: 0 1.6rem 1.6rem;
	}
	.instagram-media {
		margin: 1rem auto !important;
	}
	a {
		border-bottom: 1px dashed #1fa1f2;
		color: #1fa1f2;
		text-decoration: none;
		transition: opacity 0.5s;
		svg {
			color: #fff;
		}
		&:hover {
			opacity: 0.8;
		}
	}
	span {
		margin: 0 auto 1.6rem;
		color: black;
		font-family: 'Montserrat', sans-serif;
	}

	@media screen and (max-width: 900px) {
		max-width: 100%;
		padding: 2rem 2rem;

		p {
			margin: 0 auto 1rem;
			font-size: 14px;
		}

		h1 {
			font-size: 30px;
		}
	}

	@media screen and (max-width: 768px) {
		h2 {
			text-align: initial;
		}
	}
`;
