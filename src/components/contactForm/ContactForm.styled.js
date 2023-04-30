import { Form as FormikForm, Field as FormikField } from "formik";
import styled from "styled-components";

export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 300px;
`

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Field = styled(FormikField)`
    padding: 10px 8px;
    &:hover, &:focus {
        border-color: #C2C4FF;
    }
`

export const StyledButton = styled.button`
    width: 100px;
    height: 30px;
    cursor: pointer;
    &:hover, &:focus {
        background-color: #C2C4FF;
    }
`