import PropsTypes from 'prop-types'


const Button = ({ color, text }) => {
    return (
        <button style={{ backgroundColor: color }} className='btn'>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Hello'
}

Button.propsTypes = {
    text: PropsTypes.string,
    color: PropsTypes.string,
}

export default Button
