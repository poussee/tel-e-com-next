import React from 'react';
import { useRouter } from 'next/router';

import useMedia from '../../Hooks/useMedia';

import * as S from '../../../styles/menu';

const Menu = () => {
	const mobile = useMedia('(max-width: 1000px)');
	const [mobileMenu, setMobileMenu] = React.useState(false);
	const [activeDrop, setActiveDrop] = React.useState(false);
	const Router = useRouter();

	const { pathname } = Router.pathname;

	React.useState(() => {
		setMobileMenu(false);
	}, [pathname]);

	function activeMenuDropdown(event) {
		event.preventDefault();
		setActiveDrop((prev) => !prev);
	}

	function closeDropdown() {
		if (activeDrop) setActiveDrop(false);
		setMobileMenu((prev) => !prev);
	}

	return (
		<S.MenuContainer>
			{mobile && (
				<button
					aria-label="menu"
					onClick={() => setMobileMenu((prev) => !prev)}
					className={`mobileButton ${mobileMenu && 'mobileButtonActive'}`}
				></button>
			)}
			<div className="menuMain container--center">
				<div className="menumenuMain__logo">
					<a
						href="/"
						aria-label="voltar para home"
						onClick={() => setMobileMenu(false)}
					>
						<img src={'../../Assets/logo-1.png'} alt="logo escrito tel e com" />
					</a>
				</div>
				<nav
					className={`${mobile ? 'navMobile' : 'menumenuMain__nav'} ${
						mobileMenu && 'navMobileActive'
					}`}
				>
					<ul className="menuMain__list">
						<li className="menuMain__item">
							<a href="/" onClick={closeDropdown}>
								Home
							</a>
						</li>
						<li className="menuMain__item">
							<a href="/quem-somos" onClick={closeDropdown}>
								Quem somos
							</a>
						</li>
						<li className="menuMain__item solucoes--item">
							<a href="#" onClick={activeMenuDropdown}>
								<>
									Nossas soluções
									<span aria-label="expandir menu">
										<img
											src={'../../Assets/arrow.png'}
											alt="icone de uma seta para baixo"
										/>
									</span>
								</>
							</a>
							<ul className={`menuMain__dropdown ${activeDrop && 'active'}`}>
								<li className="menuMain__dropdown__item">
									<a href="/open-tech" onClick={closeDropdown}>
										Opentech
									</a>
								</li>
								<li className="menuMain__dropdown__item">
									<a href="/adam" onClick={closeDropdown}>
										Adam
									</a>
								</li>
								<li className="menuMain__dropdown__item">
									<a href="/last-mile" onClick={closeDropdown}>
										Last Mile
									</a>
								</li>
							</ul>
						</li>
						<li className="menuMain__item">
							<a href="/blog" onClick={closeDropdown}>
								Blog
							</a>
						</li>

						<li className="menuMain__item">
							<a
								href="/contato"
								className="menuMain__item__button button-amarelo"
							>
								Fale com o nosso time
							</a>
						</li>
						<li className="tour-button">
							<a
								href="https://villa360.com.br/tour/telecom/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="a para tour telecom"
								className="tour-virtual-button-menu"
							>
								Tour virtual
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</S.MenuContainer>
	);
};

export default Menu;
