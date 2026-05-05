import styled from "styled-components";

const Input = styled.input`
        border: 1px solid ${props => props.theme.border};
        background: ${props => props.theme.cardBackground};
        padding: 15px 30px;
        border-radius: 4px;
        width: 400px;
        color: ${props => props.theme.text};
        font-family: ${props => props.theme.fontCode};
        font-size: 16px;
        margin-bottom: 30px;
        outline: none;

        &::placeholder {
                color: ${props => props.theme.text}66;
                font-size: 16px;
        }

        &:focus {
            border-color: ${props => props.theme.primary};
            box-shadow: 0 0 10px ${props => props.theme.primary}33;
        }
`

export default Input