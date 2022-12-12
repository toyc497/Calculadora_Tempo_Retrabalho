let btnCalcular = document.getElementById("btnCalcular");

const equipamento = [
    {
        nome:"notebook",
        quantMaquinasBancadaAtivacao:6,
        tempoWindows:10,
        tempoOffice:14,
        tempoWindowsOffice: 16,
        tempoUpgrade:5,
        tempoUpgradeWindows:15,
        tempoUpgradeOffice:19,
        tempoUpgradeWindowsOffice:24
    },
    {
        nome:"desktop",
        quantMaquinasBancadaAtivacao:7,
        tempoWindows:10,
        tempoOffice:14,
        tempoWindowsOffice: 16,
        tempoUpgrade:5,
        tempoUpgradeWindows:15,
        tempoUpgradeOffice:19,
        tempoUpgradeWindowsOffice:24
    },
    {
        nome:"allinone",
        quantMaquinasBancadaAtivacao:4,
        tempoWindows:10,
        tempoOffice:14,
        tempoWindowsOffice: 16,
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

function converteTipoRetrabalho(tipoRetrabalho){

    switch(tipoRetrabalho){
        case "windows":
            return "tempoWindows";
            break;
        case "office":
            return "tempoOffice";
            break;
        case "windows_office":
            return "tempoWindowsOffice";
            break;
        case "upgrade":
            return "tempoUpgrade";
            break;
        case "upgrade_windows":
            return "tempoUpgradeWindows";
            break;
        case "upgrade_office":
            return "tempoUpgradeOffice";
            break;
        case "upgrade_windows_office":
            return "tempoUpgradeWindowsOffice";
            break;
        default:
            return 0;
            break;
    }

}

function retrabalhoAtivacao(tipoEquipamento,quantMaquinas,tipoRetrabalho,quantPessoas){
    
    let tipoEqConvertido = converteTipoEquipamento(tipoEquipamento);
    let dadosObjEquipamentos = equipamento[tipoEqConvertido];
    let quantMaqBancadaAux = dadosObjEquipamentos.quantMaquinasBancadaAtivacao;
    let totalLevas = calculaLevas(quantMaquinas,quantMaqBancadaAux);
    let tipoRetrabalhoConvertido = converteTipoRetrabalho(tipoRetrabalho);
    let tempoRetrabAtivacao = dadosObjEquipamentos[tipoRetrabalhoConvertido];
    let tempoAtivacao = calculaTempoAtivacao(totalLevas,tempoRetrabAtivacao,quantPessoas);
    return tempoAtivacao;

}

function getEquipamentType(){

    let equipamentType = document.querySelector('input[name="equipmentType"]:checked').value;
    return equipamentType;

}

function getQuantidadeMaquinas(){

    let quantMaquinas = document.getElementById("quantMaquinas").value;
    return quantMaquinas;

}

function getRetrabalhoType(){

    let retrabalhoType = document.querySelector('input[name="retrabalhoType"]:checked').value;
    return retrabalhoType;

}

function getQuantidadeColaboradores(){

    let quantColaboradores = document.getElementById("quantidadeColaboradores").value;
    return quantColaboradores;


}

btnCalcular.addEventListener('click',(e)=>{

    e.preventDefault();
    let tipoEquipamento = getEquipamentType();
    let quantidadeMaquinas = getQuantidadeMaquinas();
    let tipoRetrabalho = getRetrabalhoType();
    let quantidadeColaboradores = getQuantidadeColaboradores();
    let quantColabAux = 0;

    if(tipoRetrabalho == "windows" || tipoRetrabalho == "office" || tipoRetrabalho == "windows_office" || tipoRetrabalho == "upgrade"){
        quantColabAux = quantidadeColaboradores;
        console.log("Porcentagem: "+quantColabAux);
    }else{
        let retiraColaboradoresMontagem = Math.ceil(quantidadeColaboradores*0.4);
        quantColabAux = quantidadeColaboradores - retiraColaboradoresMontagem;
        console.log("Porcentagem: "+quantColabAux);
    }

    let tempoTotalRetrabalho = retrabalhoAtivacao(tipoEquipamento,quantidadeMaquinas,tipoRetrabalho,quantColabAux);
    alert("O Retrabalho levará em méida: "+tempoTotalRetrabalho+" minutos")

});