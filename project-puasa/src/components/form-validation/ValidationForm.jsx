export default function ValidationForm(input){
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/
    let objErrors = {}
    if(input.nama === ''){
        objErrors.nama = 'Masukan Nama'
    }
    if(input.email === ''){
        objErrors.email = 'Masukan Email'
    }else if(email_pattern.test(input.email) === false){
        objErrors.email = 'Email tidak valid'
    }   
    if(input.negara === ''){
        objErrors.negara = 'Masukan Negara'
    }
    if(input.kelamin === ''){
        objErrors.kelamin = 'Masukan jenis kelamin'
    }

    return objErrors
}