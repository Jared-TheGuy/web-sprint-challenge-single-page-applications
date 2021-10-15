import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required("You gotta name you pizza")
    .min(2,"name must be at least 2 characters"),
    dropdown: yup
    .string()
    .required(),
    mushrooms: yup
    .boolean(),
    peppers: yup
    .boolean(),
    olives: yup
    .boolean(),
    pepperoni: yup
    .boolean(),
    instructions: yup
    .string()
})

export default formSchema;