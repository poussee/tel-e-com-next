import React from 'react';

import * as S from '../../../styles/footer';
import Link from 'next/link';

const Footer = () => {
	return (
		<S.FooterContainer>
			<footer className="footer">
				<div className="container--center">
					<a href="/" aria-label="ir para a home">
						<img
							src={'../../Assets/logo-white.png'}
							alt="logo escrito Tel e Com em branco"
							className="footer__logo"
						/>
					</a>

					<div className="footer__wrapper">
						<div className="footer__one footer--item">
							<h3>
								<a href="/quem-somos">Quem somos</a>
							</h3>

							<div className="footer__socialWrapper">
								<a
									href="https://www.linkedin.com/company/tel&com/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="link para linkedin"
								>
									<img
										src={'../../Assets/linkedin-icon.png'}
										alt="ícone do linkedIn"
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
									/>
								</a>

								<a
									href="https://www.youtube.com/channel/UCvDdkrRppDlqCsgjyhcUIRA"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="link para youtube"
								>
									<img
										src={'../../Assets/youtube-icon.png'}
										alt="ícone do youtube"
									/>
								</a>
							</div>

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

						<div className="footer__two footer--item">
							<h3>Nossas soluções</h3>
							<a href="/open-tech">• Opentech</a>
							<a href="/last-mile">• Last mile</a>
							<a href="/adam">• Adam</a>
						</div>

						<div className="footer__three footer--item">
							<h3>
								<a href="/blog">Blog</a>
							</h3>
							<span>
								<Link href="/blog/como-ter-uma-gestao-de-contratos-de-telecom-solida">
									• Como ter uma gestão de contratos de telecom sólida?
								</Link>
							</span>
							<span>
								<Link href="/blog/voce-conhece-o-conceito-de-e--procurement-e-sua-relacao-com-a-gestao-de-telecom">
									• E-procurement na gestão de telecom: descubra os benefícios.
								</Link>
							</span>
							<span>
								<Link href="/blog/mercado-de-telecomunicacoes-saiba-o-que-mudou-em-2020">
									• Mercado de telecomunicações: o que mudou em 2020?
								</Link>
							</span>
						</div>

						<div className="footer__four footer--item">
							<h3>
								<a href="/contato">Contato</a>
							</h3>
							<span>
								Avenida Vida Nova, 28
								<br /> Taboão Plaza Outlet
								<br /> Piso Laranja
								<br /> Taboão da Serra – SP
							</span>
							<a
								href="mailto:contato@telecomsa.com.br"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="enviar e-mail"
								className="email-footer"
							>
								contato@telecomsa.com.br
							</a>
							<a
								href="tel:1147881250"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="ligar para a tel e com"
							>
								11 4788-1250
							</a>
							<a
								href="https://api.whatsapp.com/send?phone=5511975140804&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Tel%20%26%20Com%2C%20estou%20entrando%20em%20contato%20pelo%20website."
								target="_blank"
								rel="noopener noreferrer"
								aria-label="ligar para a tel e com"
							>
								11 97514-0804
							</a>
						</div>
					</div>
					<span className="footer__reservado">
						© Tel&Com 2021
						<br /> Todos os direitos reservados
						<br /> Desenvolvido por Agência Poussée
					</span>
				</div>
			</footer>
		</S.FooterContainer>
	);
};

export default Footer;
