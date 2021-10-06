import React from 'react';
import ScrollToTopOnMount from '../Components/ScrollToTop/ScrollToTop';

import BannerBlog from '../Components/Banners/Blog';
import Socials from '../Components/Socials';
import * as S from '../../styles/post';

const TitlePost = () => {
	return (
		<>
			<ScrollToTopOnMount />
			<BannerBlog />
			<S.PostHeader>
				<S.PostTitle>Lorem ipsum</S.PostTitle>
			</S.PostHeader>
			<S.PostContainer>
				<Socials />
				<S.MainContent>
					<div>
						<h1>Lorem ipsum</h1>

						<p>
							Proin suscipit luctus orci placerat fringilla. Donec hendrerit
							laoreet risus eget adipiscing. Suspendisse in urna ligula, a
							volutpat mauris. Sed enim mi, eu pulvinar vel, sodales vitae dui.
							:thumbsup: :smile: :sparkler:
						</p>

						<h2>Fusce a metus eu</h2>
						<p>
							Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse
							platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non
							vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Proin bibendum ullamcorper rutrum.
						</p>

						<h3>Cras semper consectetur elementum</h3>

						<p>
							Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse
							platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non
							vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Proin bibendum ullamcorper rutrum.
						</p>

						<blockquote>
							<p>
								Proin ornare ligula eu tellus tempus elementum. Aenean bibendum
								iaculis mi, nec blandit lacus interdum vitae. Vestibulum non
								nibh risus, a scelerisque purus. Ut vel arcu ac tortor
								adipiscing hendrerit vel sed massa. Fusce sem libero, lacinia
								vulputate interdum non, porttitor non quam. Aliquam sed felis
								ligula. Duis non nulla magna.
							</p>
						</blockquote>

						<p>
							Proin suscipit luctus orci placerat fringilla. Donec hendrerit
							laoreet risus eget adipiscing. Suspendisse in urna ligula, a
							volutpat mauris. Sed enim mi, bibendum eu pulvinar vel, sodales
							vitae dui. Pellentesque sed sapien lorem, at lacinia urna. In hac
							habitasse platea dictumst. Vivamus vel justo in leo laoreet
							ullamcorper non vitae lorem. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.
						</p>

						<ul>
							<li>Lorem</li>
							<li>Ipsum</li>
							<li>Dolor</li>
							<li>Sit</li>
							<li>amet</li>
						</ul>
					</div>
				</S.MainContent>
			</S.PostContainer>
		</>
	);
};

export default TitlePost;
