import styled from 'styled-components';

export const FooterContainer = styled.div`
	width: 100%;

	.footer {
		background-color: #03122f;
		width: 100%;
		color: #fff;
		line-height: 1.2;
		padding-top: 40px;
		padding-bottom: 20px;
	}

	.footer a {
		color: white;
	}

	.footer > div > a {
		display: flex;
		width: min-content;
	}

	.footer > .container--center {
		margin: 0 auto;
		width: 80%;
		max-width: 980px;
	}

	.footer__wrapper {
		display: flex;
		align-items: flex-start;
		justify-content: space-between !important;

		margin-top: 10px;
	}

	.email-footer {
		margin-bottom: 20px;
	}

	.footer__logo {
		max-width: 200px;
	}

	.footer--item {
		width: 30%;
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: flex-start;
		flex: 1;
	}

	.footer--item h3 {
		font-size: 20px;
		color: #00a8e9;
		font-family: 'Titillium Web', sans-serif;
		font-weight: 600;
	}

	.footer--item h3 > a {
		font-size: 20px;
		color: #00a8e9;
		font-family: 'Titillium Web', sans-serif;
		font-weight: 600;
		text-decoration: none;
	}

	.footer--item span,
	.footer__reservado {
		font-family: 'Ubuntu', sans-serif;
		font-size: 15px;
		margin-top: 10px;
		display: block;
	}

	.footer__one {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.footer__one > a {
		margin-left: 0;
		margin-top: 15px;
	}

	.footer__five {
		display: flex;
		flex-direction: column;
	}

	.footer__five > a {
		align-self: flex-start;
		margin-left: 0 !important;
		margin-top: 10px;
	}

	.footer__socialWrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 10px 0 0 0;
		width: 112px;
	}

	.footer__reservado {
		margin-top: 40px;
	}

	.footer__socialWrapper > a > img {
		width: 100%;
		padding: 0 !important;
		max-width: 23px;
	}

	.footer__two {
		display: flex;
		flex-direction: column;
	}

	.footer__two > a {
		color: #fff;
		font-family: 'Ubuntu', sans-serif;
		font-size: 15px;
		margin-top: 10px;
		text-decoration: none;
	}

	.footer__four a {
		color: #fff;
		text-decoration: none;
		font-family: 'Ubuntu', sans-serif;
		font-size: 15px;
		display: block;
	}

	.tour-virtual-button {
		background: #085586;
		width: 100%;
		padding: 10px 0px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 20px;
		font-size: 16px;
		font-weight: bold;
	}

	.footer__three span a {
		font-size: 15px !important;
	}

	@media (min-width: 1024px) {
		.footer__three {
			max-width: 180px !important;
		}

		.footer__wrapper > div {
			width: min-content;
			max-width: min-content;
		}

		.footer__wrapper > div > h3 {
			white-space: nowrap;
		}
	}

	@media (max-width: 790px) {
		.footer__wrapper {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: 3rem;
			margin-top: 30px;
		}

		.footer__socialWrapper {
			margin: 10px auto 0 auto;
			width: 112px;
		}

		.footer--item + .footer--item {
			margin-left: 0px;
		}

		.footer {
			text-align: center;
		}

		.footer__logo {
			margin: 0 auto;
		}

		.footer__four,
		.footer__one {
			max-width: 200px;
		}

		.footer__socialWrapper > a > img {
			padding: 0 10px;
			margin-bottom: 20px;
			margin-top: -5px;
		}

		.footer__one h3 {
			text-align: center;
			margin: 0 auto;
			font-weight: 600;
		}

		.footer__one a {
			margin: 0px auto;
			margin-top: 20px;
		}

		footer > .container--center > a {
			margin: 0 auto;
		}
	}

	@media screen and (max-width: 450px) {
		.footer__one {
			margin-top: 40px;
		}

		footer > .container--center > a {
			margin: 0 auto;
		}

		footer .footer__wrapper > div {
			width: 60%;
			max-width: 60%;
			margin: 0 auto !important;
		}
	}
`;
