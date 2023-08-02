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
        weight: 160,
        height: 165,
    },
    {
        name: "Antônio",
        age: 60,
        weight: 800,
        height:170,
    }
]



function calculatorIMC() {
    patients.forEach(Element => {
        Element.height = Element.height / 100
        let imc = Number((Element.weight / (Element.height * Element.height)).toFixed(2))
        
        let classificationIMC = ""

        if(imc <= 18.5) {
            classificationIMC = "abaixo do peso"
        }else if (imc < 25) {
            classificationIMC = "peso idedal"
        }else if (imc < 30) {
            classificationIMC = "levemente acima do peso"
        }else if(imc < 35) {
            classificationIMC = "obesidade grau I"
        }else if(imc < 40) {
            classificationIMC = "obesidade grau II"
        }else if(imc >= 40) {
            classificationIMC = "obesidade grau III"      
        }else {
        }


        console.log(`Paciente ${Element.name} possui o IMC de: ${imc}, 
        ele está em uma classificação de: ${classificationIMC}`)
         
    })
}

calculatorIMC()
