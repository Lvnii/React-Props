import './style.css'

const Button = (props) => {
    const {
        text = "click",
        click = () => { console.log('clicked') },
        type = "button", 
        status = "success",
        warningMessage = "Are you sure you want to do this action?"
        } = props

    const handleClick = () => {
        if (status === 'danger') {
            const conf = window.confirm(warningMessage)
            if (conf) {
                click()
            }
            return;
        }
        click()
    }

    return (
        <button 
            className={`custom-button ${status}`}
            type={type} 
            onClick={handleClick}
            >
            {text}
        </button>
    )
}

export default Button;