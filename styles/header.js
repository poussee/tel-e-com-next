import styled from 'styled-components';

export const HeaderContainer = styled.div`
	width: 100%;

	.header {
		border-bottom: 1px solid #eee;
		padding-bottom: 15px;
		width: 100%;
	}

	.desktop .header__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		padding-top: 10px;
		width: 80%;
		max-width: 980px;
		margin: 0 auto;
	}

	.desktop .header__socialMedias {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header__socialMedias img {
		margin-right: 15px;
	}

	.header__info {
		display: flex;
		align-items: center;
	}

	.header__tel {
		display: flex;
		align-items: center;
		font-family: var(--font-first);
		font-weight: 300;
		font-size: 12px;
	}

	.header__tel > img {
		margin-right: 10px;
	}

	.header__socialMedias > a > img {
		width: 25px;
	}

	.header__number > a {
		text-decoration: none;
		color: var(--black);
	}

	.tour-virtual-button {
		display: flex;
		aling-items: center;
		margin-left: 20px;
		color: #fff;
		background: #085586;
		text-decoration: none;
		padding: 5px 20px;
		border-radius: 15px;
		font-family: var(--font-first);
		font-size: 12px;
		transition: 0.5s;
	}

	.tour-virtual-button:hover {
		opacity: 0.8;
	}

	.button__whatsApp > a > img {
		width: 30px;
		margin-left: 5px;
		margin-right: -5px;
	}
	.button__whatsApp {
		order: 2;
		display: flex;
		margin-top: 8px;
	}

	.header.mobile {
		display: none;
	}

	.mobile .header__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		padding-top: 10px;
	}

	.mobile .header__socialMedias {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header__socialMedias img {
		margin-right: 10px;
	}

	.header__info {
		display: flex;
		align-items: center;
	}

	.header__tel {
		display: flex;
		align-items: center;
		font-family: var(--font-first);
		font-weight: 300;
		font-size: 12px;
		order: 1;
		margin-left: 10px;
	}

	.header__tel > img {
		margin-right: 10px;
	}

	.header__socialMedias > a > img {
		width: 25px;
	}

	.header__number > a {
		text-decoration: none;
		color: var(--black);
	}

	.tour-virtual-button {
		display: flex;
		aling-items: center;
		margin-left: 20px;
		color: #fff;
		background: #085586;
		text-decoration: none;
		padding: 5px 20px;
		border-radius: 15px;
		font-family: var(--font-first);
		font-size: 12px;
		transition: 0.5s;
		font-weight: bold;
	}

	.tour-virtual-button:hover {
		opacity: 0.8;
	}

	.button__whatsApp > a > img {
		width: 30px;
		margin-left: 10px;
	}

	@media screen and (max-width: 900px) {
		.header.desktop {
			display: none;
		}

		.header.mobile {
			display: block;
		}

		.header__tel > img {
			display: none;
		}
	}
`;
