import '../styles/techIcon.css';

const TechIcon = ({name}: {name:string}) => {
	return (
		<div className='ticon'>
			<img src={'/'+name+'.png'}/>
			<p>
				{name.toUpperCase()}
			</p>
		</div>
	);
};

export default TechIcon;
