import styled from 'styled-components';

export const BlogBanner = styled.section`
	background: url('../../../Assets/blog-bg.png') no-repeat;
	background-size: cover;
	background-position: center left;
	height: 80vh;
	width: 100vw;
	display: grid;
	place-items: center;

	.blogBanner__subtitle {
		color: #fff !important;
		text-align: center;
		margin: 0 auto;
		display: block;
	}

	.blogBanner__title {
		color: #fff !important;
		line-height: 1.2;
		text-align: center;
		padding: 0 250px;
		font-weight: 500;
		font-size: 38px;
		margin: 0;
	}

	.blogBanner__wrapper > p {
		color: #fff;
		font-family: var(--font-first);
		font-size: 16px;
		margin-top: 10px;
		text-align: center;
		padding: 0 300px;
	}

	@media (max-width: 768px) {
		justify-content: center;
		align-items: center;
		text-align: center;

		background: url('../../../Assets/banner-mobile/Blog.png') no-repeat !important;
		background-size: cover !important;
		background-position: 10% !important;

		.blogBanner__title {
			padding-right: 0;
			padding-left: 0;
			text-align: center;
		}

		.blogBanner__wrapper > p {
			padding: 0px 70px;
		}
	}

	@media (max-width: 470px) {
		background-position: bottom left;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding-top: 70px;
		height: 70vh;

		.blogBanner__wrapper > p {
			padding: 0px 80px;
			font-size: 18px;
		}

		.blogBanner__title {
			padding-right: 50px;
			padding-left: 50px;
		}
	}
`;
