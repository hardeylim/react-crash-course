
const Button = ({text, color, onClick}) => {

    return <button
        onClick={onClick}
        className={'btn'}
        style={{backgroundColor: color}}>
        {text}</button>
}

Button.defaultProps = {
    text: 'Click',
    color: 'red',
}

export default Button

