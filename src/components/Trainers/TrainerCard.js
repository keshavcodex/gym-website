/** @jsx jsx */
import { jsx } from '@emotion/core';
// import Socials from './Socials';

const TrainerCard = ({ title, name, desc, img }) => (
	<div className='card' style={{ width: '18rem' }}>
		<img src={img} className='card-img-top' alt='...' height={200} />
		<div className='card-body'>
			<h5 className='card-title' style={{ color: '#ed563b' }}>
				{title}
			</h5>
			<h3>{name}</h3>
			<p className='card-text'>{desc}</p>
		</div>
	</div>
);

// const styles = css`
// 	width: 100%;
// 	max-width: 31%;
// 	background: #fff;
// 	padding: 44px;
// 	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
// 	// text-align: left;
// 	border-radius: 4px;
// 	height: 500px;
// 	img {
// 		width: 100%;
// 	}
// 	h5 {
// 		color: #ed563b;
// 		margin: 26px 0 9px 0;
// 		font-weight: 500;
// 		font-size: 14px;
// 	}
// 	h3 {
// 		color: #232d39;
// 		letter-spacing: 1px;
// 	}
// 	p {
// 		margin: 24px 0 28px 0;
// 		color: #7a7a7a;
// 		font-size: 15px;
// 		font-weight: 400;
// 		line-height: 1.7;
// 	}
// 	@media (max-width: 830px) {
// 		max-width: 540px;
// 		margin: 14px 0;
// 	}
// 	@media (min-width: 831px) and (max-width: 1226px) {
// 		max-width: 47%;
// 		margin: 14px 0;
// 	}
// `;

export default TrainerCard;
