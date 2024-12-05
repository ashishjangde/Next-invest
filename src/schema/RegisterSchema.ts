import  z  from "zod";


const RegisterSchema = z.object({
    name : z.string().min(3, 'Name must be at least 3 characters long'),
    email : z.string().email('Invalid email address'),
    password : z.string().min(6, 'Password must be at least 8 characters long'),
    confirmPassword : z.string().min(6, 'Password must be at least 8 characters long')
}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
})

export default RegisterSchema;