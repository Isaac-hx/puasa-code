export default function inputs(values){
    const inputs = [
        {
            id:1,
            name:'username',
            type:'text',
            placeholder:'Username',
            error : 'Username should be 3-16 characters',
            label:'Username',
            pattern:"^[a-zA-Z0-9_]{3,16}$",
            required:true
        },
        {
            id:2,
            name:'email',
            type:'email',
            placeholder:'Email',
            error : 'It should be a valid email address',
            label:'Email',
            required:true
        },
        {
            id:3,
            name:'birthday',
            type:'date',
            placeholder:'Birthday',
            label:'Birthday'
        },
        {
            id:4,
            name:'password',
            type:'password',
            placeholder:'Password',
            error:'Password must be 8 character long',
            label:'Password',
            pattern:"(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$",
            required:true

        },
        {
            id:5,
            name:'confirmPassword',
            type:'password',
            placeholder:'Confirm Password',
            error:'Password doesnt match',
            label:'Confirm Password',
            pattern:values.password ,
            required:true

        }
    ]
    return inputs

}