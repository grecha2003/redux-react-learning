import { TailSpin } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

const Spinner = (props) => {
	const spinner = useSelector((state) => state.appReducer.loading);
	console.log('spinner', spinner);

	return (
		<div className="loader-styles">
			<TailSpin type="ThreeDots" color="#00BFFF" height={80} width={80} visible={spinner} />
		</div>
	);
};

export default Spinner;
