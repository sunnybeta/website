import '../styles/techStack.css';
import RadioButton from './radio';
import TechIcon from '../components/techIcon';

export default function TechStack() {
	return (
		<section className='techstack-container'>
			<div className='filters'>
				<RadioButton id="al" name='all' text='All'/>
				<RadioButton id="be" name='backedn' text='Back End'/>
				<RadioButton id="fe" name='frontend' text='Front End'/>
				<RadioButton id="do" name='devops' text='DevOps'/>
				<RadioButton id="lg" name='languages' text='Languages'/>
			</div>
			<div className='tech-icons'>
				<TechIcon name={'python'} />
				<TechIcon name={'fastapi'} />
				<TechIcon name={'java'} />
				<TechIcon name={'spring'} />
				<TechIcon name={'javascript'} />
				<TechIcon name={'react'} />
				<TechIcon name={'next'} />
				<TechIcon name={'go'} />
				<TechIcon name={'gin'} />
			</div>
		</section>
	);
};
