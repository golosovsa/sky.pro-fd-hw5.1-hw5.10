import StyledInput from "./Input/styles";

function Input({name, placeholder, type="text"}) {
    return <StyledInput type={type} name={name} placeholder={placeholder}/>
}

export default Input;