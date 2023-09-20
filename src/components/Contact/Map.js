/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const Map = () => (
	<div css={styles} className='mapouter'>
		<iframe
			title='gym location'
			src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1233.2984319211414!2d88.43351275235197!3d22.591967460239708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027598dd6157fd%3A0x1ddb00bd5a7b013d!2sGEN-X%20Gym!5e0!3m2!1sen!2sin!4v1695229182484!5m2!1sen!2sin'
			loading='lazy'
			referrerpolicy='no-referrer-when-downgrade'
		></iframe>
	</div>
);

const styles = css`
	width: 100%;
	max-width: 50%;
	min-height: 60vh;
	iframe {
		width: 100%;
		height: 100%;
		display: block;
		border: none;
	}
	@media (max-width: 1200px) {
		max-width: 100%;
		height: 60vh;
	}
`;

export default Map;
