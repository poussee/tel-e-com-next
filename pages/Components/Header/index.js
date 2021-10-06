import React from 'react';

import * as S from '../../../styles/header';

const Header = () => {
	return (
		<S.HeaderContainer>
			<header className="header desktop">
				<div className="header__wrapper container--center">
					<div className="header__socialMedias">
						<a
							href="https://www.linkedin.com/company/tel&com/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="link para linkedin"
						>
							<img
								src={'../../Assets/linkedin-icon.png'}
								alt="ícone do linkedIn"
								data-aos="fade-right"
							/>
						</a>

						<a
							href="https://www.facebook.com/telecomvpn"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="link para facebook"
						>
							<img
								src={'../../Assets/facebook-icon.png'}
								alt="ícone do facebook"
								data-aos="fade-right"
							/>
						</a>
						<a
							href="https://www.instagram.com/telecom_sa/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="link para instagram"
						>
							<img
								src={'../../Assets/instagram-icon.png'}
								alt="ícone do instagram"
								data-aos="fade-right"
							/>
						</a>

						<a
							href="https://www.youtube.com/channel/UCvDdkrRppDlqCsgjyhcUIRA"
							target="_blank"
							rel="noopener noreferrer noreferrer"
							aria-label="link para youtube"
						>
							<img
								src={'../../Assets/youtube-icon.png'}
								alt="ícone do youtube"
								data-aos="fade-right"
							/>
						</a>
					</div>

					<div className="header__info">
						<div className="header__tel">
							<img
								src={'../../Assets/atendimento-icon.png'}
								alt="ícone de atendimento"
								data-aos="zoom-in-down"
							/>
							<span className="header__number">
								<a href="tel:1147881250" target="__blank">
									11 4788-1250
								</a>
							</span>
						</div>

						<div className="button__whatsApp">
							<a
								href="https://api.whatsapp.com/send?phone=5511975140804&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Tel%20%26%20Com%2C%20estou%20entrando%20em%20contato%20pelo%20website."
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={'../../Assets/whatsapp-icon.png'}
									alt="icone whatsApp"
									data-aos="zoom-in-down"
								/>
							</a>

							<a
								href="https://villa360.com.br/tour/telecom/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="link para tour telecom"
								className="tour-virtual-button"
							>
								Tour virtual
							</a>
						</div>
					</div>
				</div>
			</header>

			<header className="header mobile">
				<div className="header__wrapper container--center">
					<div className="header__info">
						<div className="header__tel">
							<img
								src={'../../Assets/atendimento-icon.png'}
								alt="ícone de atendimento"
								data-aos="zoom-in-down"
							/>
							<span className="header__number">
								<a href="tel:1147881250" target="__blank">
									11 4788-1250
								</a>
							</span>
						</div>

						<div className="button__whatsApp">
							<a
								href="https://api.whatsapp.com/send?phone=5511975140804&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Tel%20%26%20Com%2C%20estou%20entrando%20em%20contato%20pelo%20website."
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={'../../Assets/whatsapp-icon.png'}
									alt="icone whatsApp"
									data-aos="zoom-in-down"
								/>
							</a>
						</div>
					</div>

					<div className="header__socialMedias">
						<a
							href="https://www.linkedin.com/company/tel&com/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="link para linkedin"
						>
							<img
								src={'../../Assets/linkedin-icon.png'}
								alt="ícone do linkedIn"
								data-aos="fade-right"
							/>
						</a>

						<a
							href="https://www.facebook.com/telecomvpn"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="link para facebook"
						>
							<img
								src={'../../Assets/facebook-icon.png'}
								alt="ícone do facebook"
								data-aos="fade-right"
							/>
						</a>
						<a
							href="https://www.instagram.com/telecom_sa/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="link para instagram"
						>
							<img
								src={'../../Assets/instagram-icon.png'}
								alt="ícone do instagram"
								data-aos="fade-right"
							/>
						</a>

						<a
							href="https://www.youtube.com/channel/UCvDdkrRppDlqCsgjyhcUIRA"
							target="_blank"
							rel="noopener noreferrer noreferrer"
							aria-label="link para youtube"
						>
							<img
								src={'../../Assets/youtube-icon.png'}
								alt="ícone do youtube"
								data-aos="fade-right"
							/>
						</a>
					</div>
				</div>
			</header>
		</S.HeaderContainer>
	);
};

export default Header;
