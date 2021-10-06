import React from 'react';
import styled from 'styled-components';

const Socials = () => {
	return (
		<SocialContainer>
			<div>
				<a
					className="whatsapp-icon"
					href="https://bit.ly/3qrMqHt"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="link para o whatsapp"
				>
					<img
						className="icone-header"
						src="/Assets/icons/whatsapp.png"
						alt="ícone do Whatsapp"
					/>
				</a>
				<a
					className="other-icon"
					href="https://www.linkedin.com/company/tel&com/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="link para o Linkedin"
				>
					<img
						className="icone-header"
						src="/Assets/icons/linkedin-icon.png"
						alt="icone do Linkedin"
					/>
				</a>
				<a
					className="other-icon"
					href="https://www.facebook.com/telecomvpn"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="link para facebook"
				>
					<img
						className="icone-header"
						src="/Assets/icons/facebook-icon.png"
						alt="ícone do Facebook"
					/>
				</a>

				<a
					className="other-icon"
					href="https://www.instagram.com/telecom_sa/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="link para instagram"
				>
					<img
						className="icone-header"
						src="/Assets/icons/instagram-icon.png"
						alt="ícone do instagram"
					/>
				</a>

				<a
					className="other-icon"
					href="https://www.youtube.com/channel/UCvDdkrRppDlqCsgjyhcUIRA"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="link para o youtube"
				>
					<img
						className="icone-header"
						src="/Assets/icons/youtube-icon.png"
						alt="ícone do Youtube"
					/>
				</a>
			</div>
		</SocialContainer>
	);
};

export default Socials;

const SocialContainer = styled.aside`
	display: flex;
	flex-direction: column;
	gap: 20px;

	& > div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		margin-top: 86px;
		gap: 1rem;
	}

	@media (min-width: 768px) {
		& > div {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			margin-top: 86px;
			margin-left: 22px;
			gap: 1rem;
		}
	}

	.other-icon {
		display: flex;
		align-items: center;
		width: 30px !important;
		max-width: 30px !important;

		& > .icone-header {
			margin: auto;
			object-fit: cover;
			width: 30px;
		}
	}

	.whatsapp-icon {
		width: 50px;

		& > .icone-header {
			object-fit: contain;
			width: 100%;
			height: 100%;
		}
	}

	@media screen and (max-width: 900px) {
		flex-direction: row;
		padding-left: 0px;
		margin: 0 auto;
	}
`;
