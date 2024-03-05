import './style.css'

const Child = (props) => {
    const {text, handleClick} = props

    console.log(props)
    return <button
        onClick={() => {
            if (typeof handleClick === 'function') {
                handleClick("Clicked from child")
            }
        }}
        className='button'>{text}</button>
}

export default Child;