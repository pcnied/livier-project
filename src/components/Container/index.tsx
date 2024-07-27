import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Footer from '../Footer';
import NavBar from '../NavBar';
import NavBarLogo from '../NavBarLogo';
import ScrollToTop from '../ScrollToTop';
import SocialIcons from '../SocialIcons';
import CartIcon from '../CartIcon';

interface ContainerProps {
	children: React.ReactNode;
	cleanNavBar?: boolean;
	buttonScrollToTop?: boolean;
	redirect?: string;
	cardIcon?: boolean;
}

const Container: React.FC<ContainerProps> = ({
	children,
	cleanNavBar,
	buttonScrollToTop,
	cardIcon,
}) => {
	const [visible, setVisible] = useState<boolean>(false);
	const [socialIcon, setSocialIcon] = useState(true);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', toggleVisible);

	useEffect(() => {
		if (cardIcon === true) {
			setSocialIcon(false);
		}
	}, []);

	return (
		<React.Fragment>
			{socialIcon ? <SocialIcons /> : <CartIcon />}
			<ScrollToTop />
			{cleanNavBar ? (
				<NavBarLogo positionAppBar={'relative'} />
			) : (
				<NavBar positionAppBar={'fixed'} />
			)}
			{children}
			{buttonScrollToTop && (
				<IconButton
					onClick={scrollToTop}
					sx={{
						display: visible ? 'inline' : 'none',
						position: 'fixed',
						bottom: 20,
						right: 20,
						bgcolor: '#242424',
						color: '#fff',
						width: '50px',
						height: '50px',
						':hover': {
							bgcolor: '#2c2c2c',
							transition: 'all 0.5s ease',
						},
						zIndex: 1000,
					}}
				>
					<ArrowUpwardIcon />
				</IconButton>
			)}
			<Footer />
		</React.Fragment>
	);
};

export default Container;
