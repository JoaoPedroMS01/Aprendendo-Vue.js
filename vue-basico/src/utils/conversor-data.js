import moment from 'moment';

function aplicarMascaraEmDataIso(data) {
    if(data) {
        return moment(data).locale('pt-br').format('DD/MM/YY')
    }
    return undefined;
}

function aplicarMascaraDataHoraEmIso(data) {
    if(data) {
        return moment(data).locale('pt-br').format('DD/MM/YYYY HH:mm:ss')
    }
    return undefined;
}

function aplicarMascaraIsoEmFormatoAmericano(data) {
    if(data) {
        let dataAmericana = moment(data).locale('pt-br').format('YYYY-MM-DD')
        return dataAmericana + 'T00:00:00';
    }
    return undefined;
}

function aplicarMascaraFormatoAmericanoEmDataIso(data) {
    if(data) {
        return moment(data).locale('pt-br').format('YYYY-MM-DD')
    }
    return undefined;
}

export default {
    aplicarMascaraEmDataIso,
    aplicarMascaraDataHoraEmIso,
    aplicarMascaraIsoEmFormatoAmericano,
    aplicarMascaraFormatoAmericanoEmDataIso
}