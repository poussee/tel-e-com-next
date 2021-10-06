import React from 'react';

import * as S from '../../../styles/backToTopButton';

const ButtonBackToTop = ({ scrollToTop }) => {
	return (
		<S.BackToTopButton className="buttonBackToTop" onClick={scrollToTop}>
			<img src={'../../Assets/arrow-top.png'} alt="ir para o header" />
		</S.BackToTopButton>
	);
};

export default ButtonBackToTop;
