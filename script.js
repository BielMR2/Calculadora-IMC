const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 100,
        height:190,
    },
    {
        name: "Ana",
        age: 24,
        weight: 80,
        height: 165,
    },
    {
        name: "Antônio",
        age: 60,
        weight: 80,
        height:170,
    }
]



function calculatorIMC() {
    patients.forEach(Element => {
        Element.height = Element.height / 100
        let imc = Number((Element.weight / (Element.height * Element.height)).toFixed(2))
        
        let classificationIMC = ""

        switch (imc) {
            case imc <= 18,5:
                classificationIMC = "abaixo do peso"
                break
            case imc < 25:
                classificationIMC = "peso idedal"
                break
            case imc < 30:
                classificationIMC = "levemente acima do peso"
                break 
            case imc < 35:
                classificationIMC = "obesidade grau I"
                break
            case imc < 40:
                classificationIMC = "obesidade grau II"
                break
            case imc >= 40 :
                classificationIMC = "obesidade grau III"
                break
            default:
                break
        }

        console.log(classificationIMC)
        console.log(`Paciente ${Element.name} possui o IMC de: ${imc}, 
        ele está em uma classificação de: ${classificationIMC}`)
         
    })
}

calculatorIMC()
