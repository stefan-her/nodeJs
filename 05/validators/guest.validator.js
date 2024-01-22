import yup from 'yup';

export const guestValidator = yup.object().shape({
    firstname:yup.string(),
    lastname: yup.string.required(),
    email: yup.string().email().required(),
    hasConfirm: yup.boolean().optional()
})