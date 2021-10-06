import styled from 'styled-components';

export const MenuContainer = styled.div`
	width: 80%;
	max-width: 980px;
	margin: 0 auto;
	display: flex;
	align-items: center;

	.menuMain {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 10px;
		z-index: 5000;
		position: relative;
		width: 100%;
	}

	ul {
		list-style: none;
	}

	.menuMain__list {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.menuMain__item {
		margin-left: 30px;
		font-size: 15px;
		font-family: var(--font-first);
		transition: all 2s;
	}

	.menuMain__item a {
		color: #231f1f;
		text-decoration: none;
	}

	.menuMain__item a:hover {
		color: var(--azul--escuro);
		font-weight: 600;
	}

	.menuMain__item__button {
		background: rgb(255, 236, 0);
		background: linear-gradient(
			302deg,
			rgba(255, 236, 0, 1) 0%,
			rgba(242, 154, 2, 1) 57%
		);
		border: none;
		text-align: center;
		width: 180px;
		padding: 4px 0;
		margin: 0 !important;
		border-radius: 20px;
		transition: 0.5s ease-in-out;
		color: #005487 !important;
		cursor: pointer;
		font-weight: bold;
	}

	.menuMain__item__button:hover {
		animation-name: scale;
		animation-duration: 1s;
		animation-fill-mode: forwards;
		animation-timing-function: ease-in-out;
	}

	@media screen and (max-width: 340px) {
		.menuMain__item__button {
			padding: 8px 30px;
		}
	}

	.mobileButton {
		background: #eee;
		border-radius: 0.2rem;
		height: 40px;
		width: 40px;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid transparent;
		transition: 0.1s;
		cursor: pointer;
		position: absolute;
		top: 80px;
		right: 5%;
		z-index: 5500;
	}

	.mobileButton::after {
		content: '';
		display: block;
		width: 1.2rem;
		height: 2px;
		background: currentColor;
		border-radius: 2px;
		box-shadow: 0px 6px currentColor, 0 -6px currentColor;
		transition: 0.2s;
	}

	.mobileButton:focus,
	.mobileButton:hover,
	.mobileButtonActive {
		outline: none;
		background: white;
		box-shadow: 0 0 0 3px var(--azul--claro);
		border-color: var(--azul-escuro);
		color: var(--azul-escuro);
	}

	.mobileButtonActive::after {
		transform: rotate(90deg);
		width: 4px;
		height: 4px;
		box-shadow: 0px 8px currentColor, 0 -8px currentColor;
	}

	.navMobile {
		display: block;
		position: absolute;
		top: 70px;
		right: 0;
		padding: 20px 1rem;
		background: white;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
		border-radius: 0.2rem;
		transform: translateX(-10px);
		opacity: 0;
		pointer-events: none;
		margin-top: 0px;
	}

	.navMobile .menuMain__list {
		display: flex;
		flex-direction: column;

		gap: 0.5rem;
		margin-right: 50px;
		padding-left: 50px;
	}

	.navMobile .menuMain__list li {
		margin: 0 !important;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.navMobileActive {
		transition: 0.3s;
		transform: initial;
		opacity: 1;
		z-index: 180;
		pointer-events: initial;
	}

	.navMobile a,
	.navMobile button {
		cursor: pointer;
	}

	.menuMain__dropdown {
		display: none;
		position: absolute;
		top: 20px;
		background: #f6f4ed;
		padding: 10px;
		margin-top: 2px;
		width: 100%;
		z-index: 400;
	}

	.solucoes--item {
		position: relative;
	}

	.solucoes--item a {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.solucoes--item a img {
		margin-left: 5px;
	}

	.solucoes--item:hover .menuMain__dropdown,
	.solucoes--item .menuMain__dropdown.active {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.tour-virtual-button-menu {
		color: #fff;
		background: var(--azul-escuro);
		text-decoration: none;
		text-align: center;
		width: 180px;
		padding: 4px 0;
		border-radius: 20px;
		font-family: var(--font-first);
		font-size: 15px;
		transition: 0.5s;
		margin: 0;
		display: none;
		justify-content: center;
		font-weight: bold;
	}

	.tour-virtual-button-menu:hover {
		opacity: 0.8;
	}

	.tour-button {
		display: inherit;
	}

	@media (min-width: 1000px) {
		.tour-virtual-button-menu {
			color: #fff;
			background: var(--azul-escuro);
			text-decoration: none;
			padding: 7px 65px !important;
			margin: 0 auto;
			display: none;
			justify-content: center !important;
		}

		.menuMain__item__button {
			padding: 8px 35px;
			margin: 0 !important;
			border-radius: 20px;
			transition: 0.5s ease-in-out;
			color: #005487 !important;
			cursor: pointer;
			font-weight: bold;
		}
	}

	@media (min-width: 900px) {
		.tour-button {
			display: none !important;
		}
	}

	@media screen and (max-width: 900px) {
		.mobileButton {
			top: 74px;
		}

		.tour-button {
			display: inherit;
		}

		.tour-virtual-button-menu {
			display: flex;
			margin-top: 20px;
		}

		.menuMain__item:nth-of-type(6) {
			margin-top: 20px !important;
		}
	}

	@media (max-width: 890px) {
		.menumenuMain__logo {
			padding-left: 20px;
		}

		.menuMain__item {
			margin-top: 10px;
		}
	}

	@media (max-width: 700px) {
		.navMobile {
			margin-top: 0px;
		}
	}

	@media (max-width: 480px) {
		.navMobile {
			margin-top: 157px;
		}
		.navMobile {
			margin-top: 0px;
		}
	}
`;
