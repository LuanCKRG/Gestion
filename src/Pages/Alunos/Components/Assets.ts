interface Estudante {
    Nome: string,
    Nascimento: string,
    Telefone: string,
    Email: string,
    Idade: number,
    CPF: string,
    RG: string,
    Rua: string,
    Bairro: string,
    Casa: string,
    Schedule: string,
    Dia: string
}

export function FormateAgeAndBorning(Aluno: Estudante) {

    // Variáveis úteis
    let birthDay: number|string = Number(Aluno.Nascimento.slice(-2))
    let birthMonth: number|string = Number(Aluno.Nascimento.slice(5, 7))
    const birthYear = Number(Aluno.Nascimento.slice(0, 4))
    
    // Formatando Idade
    const currentYear = (new Date).getFullYear()
    const currentMonth = (new Date).getMonth() + 1
    const currentDay = (new Date).getDate()

    var Idade = currentYear - birthYear

    if (new Date(currentYear, currentMonth, currentDay) < new Date(currentYear, birthMonth, birthDay)) { Idade-- }

    // Formatando Nascimento
    ((birthDay < 10) && (birthDay = '0' + birthDay));

    ((birthMonth < 10) && (birthMonth = '0'+ birthMonth) );


    const Nascimento = `${birthDay}/${birthMonth}/${birthYear}`
    
    // Retornando o novo objeto formatado
    
    return {...Aluno, Nascimento, Idade}
}
