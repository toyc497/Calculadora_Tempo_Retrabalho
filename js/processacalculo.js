let btnCalcular = document.getElementById("btnCalcular");

let tipoEquipamento = "notebook";
let quantidadeMaquinas = 50;
let tipoRetrabalho = "tempoWindows";
let quantidadePessoas = 8;

const equipamento = [
    {
        nome:"notebook",
        tempoWindows:10,
        tempoOffice:14,
        quantMaquinasBancadaAtivacao:6,
        tempoUpgrade:5,
        tempoUpgradeWindows:15,
        tempoUpgradeOffice:19,
        tempoUpgradeWindowsOffice:24
    },
    {
        nome:"desktop",
        tempoWindows:10,
        tempoOffice:14,
        quantMaquinasBancadaAtivacao:6,
        tempoUpgrade:5,
        tempoUpgradeWindows:15,
        tempoUpgradeOffice:19,
        tempoUpgradeWindowsOffice:24
    },
    {
        nome:"allinone",
        tempoWindows:10,
        tempoOffice:14,
        quantMaquinasBancadaAtivacao:6,
        tempoUpgrade:5,
        tempoUpgradeWindows:15,
        tempoUpgradeOffice:19,
        tempoUpgradeWindowsOffice:24
    }
];

function converteTipoEquipamento(tipoEquipamento){

    switch(tipoEquipamento){
        case "notebook":
            return 0;
            break;
        case "desktop":
            return 1;
            break;
        case "allinone":
            return 2;
            break;
        default:
            return 0;
            break;
    }

}

function calculaTempoAtivacao(totalLevas, tempAtivacao, quantPessoas){

    let quantBancadasUso = Math.ceil(quantPessoas/2);
    let tempoBruto = (totalLevas*tempAtivacao)/quantBancadasUso;
    return tempoBruto;

}

function calculaLevas(quantMaquinas,quantMaqBancada){

    let quantLevasBruto = quantMaquinas/quantMaqBancada;
    let quantidadeLevasArredonda = Math.ceil(quantLevasBruto);
    return quantidadeLevasArredonda;

}

function retrabalhoAtivacao(tipoEquipamento,quantMaquinas,tipoRetrabalho,quantPessoas){
    
    let tipoEqConvertido = converteTipoEquipamento(tipoEquipamento);
    let dadosObjEquipamentos = equipamento[tipoEqConvertido];
    let quantMaqBancadaAux = dadosObjEquipamentos.quantMaquinasBancadaAtivacao;
    let totalLevas = calculaLevas(quantMaquinas,quantMaqBancadaAux);
    let tempoRetrabAtivacao = dadosObjEquipamentos[tipoRetrabalho];
    let tempoAtivacao = calculaTempoAtivacao(totalLevas,tempoRetrabAtivacao,quantPessoas);
    console.log(tempoAtivacao);
    
}

retrabalhoAtivacao(tipoEquipamento,quantidadeMaquinas,tipoRetrabalho,quantidadePessoas);

btnCalcular.addEventListener('click',(e)=>{
    e.preventDefault();
    alert("10 Minutos");
});