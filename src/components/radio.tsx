import '../styles/radio.css'

export default function RadioButton({ id, name, text}: {id:string, name:string, text:string}) {
	return (
		<span>
			<input type="radio" id={id} name={name} />
			<label htmlFor="al">{text}</label>
		</span>
	);
};
