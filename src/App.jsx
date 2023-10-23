import { useState } from "react";
import "./App.css";

const Star = ({ percentageFilled }) => {
	return (
		<svg
			width="250"
			viewBox="0 0 800 763"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<linearGradient id="grad">
					<stop offset="0%" stopColor="black" />
					<stop offset={`${percentageFilled}%`} stopColor="black" />
					<stop offset={`${percentageFilled}%`} stopColor="#aa0000" />
					<stop offset="100%" stopColor="#aa0000" />
				</linearGradient>
			</defs>

			<g clipPath="url(#clip)">
				<path
					fill="url(#grad)"
					d="M800 288.67L524.81 247.9L398.58 0L274.78 249.12L0 292.57L198.67 487.3L155.08 762.05L401.67 633.28L649.51 759.64L603.24 485.32L800 288.67Z"
				/>
			</g>
		</svg>
	);
};

const Range = (props) => {
	return <input {...props} />;
};

function App() {
	const [rangeVal, setRangeVal] = useState(50);

	function handleRange(e) {
		setRangeVal(e.target.value);
	}

	return (
		<>
			<Range
				onChange={handleRange}
				type="range"
				min="0"
				max="100"
				defaultValue={rangeVal}
			/>

			<div className="stars-cell">
				<Star percentageFilled={rangeVal} />
				<Star percentageFilled={rangeVal} />
				<Star percentageFilled={rangeVal} />
				<Star percentageFilled={rangeVal} />
				<Star percentageFilled={rangeVal} />
			</div>
		</>
	);
}

export default App;
