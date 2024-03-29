document.write('<p>Estadisticas centro medico ñuñoa</p>');

var radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ',         paciente: 'FRANCISCA ROJAS',   rut: '9878782-1',     prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX',  paciente: 'PAMELA ESTRADA',    rut: '15345241-3',    prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ',        paciente: 'ARMANDO LUNA',      rut: '16445345-9',    prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY',        paciente: 'MANUEL GODOY',      rut: '17666419-0',    prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO',         paciente: 'RAMON ULLOA',       rut: '14989389-K',    prevision: 'FONASA'},
];

var traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA',    paciente: 'PAULA SANCHEZ',     rut: '15554774-5',    prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',             paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9',    prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',        paciente: 'ANA KLAPP',         rut: '17879423-9',    prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',      paciente: 'FELIPE MARDONES',   rut: '1547423-6',     prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',         paciente: 'DIEGO MARRE',       rut: '16554741-K',    prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',       paciente: 'CECILIA MENDEZ',    rut: '9747535-8',     prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',         paciente: 'MARCIAL SUAZO',     rut: '11254785-5',    prevision: 'ISAPRE'},
];

var dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',   rut: '11123425-6',    prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',       rut: '9878789-2',     prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',        rut: '7998789-5',     prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',   rut: '18887662-K',    prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',      rut: '17665461-4',    prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',     rut: '14441281-0',    prevision: 'ISAPRE'},
];

//Agregar código para el desafio 2 aquí
//pacientes agregados mediante .push
traumatologia.push(
    {hora: '9:00',  especialista: 'RENÉ POBLETE',           paciente: 'ANA GELLONA',       rut: '13123329-7',    prevision: 'ISAPRE'},
    {hora: '9:30',  especialista: 'MARIA SOLAR',            paciente: 'RAMIRO ANDRADE',    rut: '12221451-K',    prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL LOYOLA',            paciente: 'CARMEN ISLA',       rut: '10112348-3',    prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS',        paciente: 'PABLO LOAYZA',      rut: '13453234-1',    prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA',         paciente: 'SUSANA POBLETE',    rut: '14345656-6',    prevision: 'FONASA'},
);

radiologia.push();
radiologia.shift();

document.write(
    (`<p>${dental[0].hora} - ${dental[0].especialista} - ${dental[0].paciente} - ${dental[0].rut} - ${dental[0].prevision}</p>`),
    (`<p>${dental[1].hora} - ${dental[1].especialista} - ${dental[1].paciente} - ${dental[1].rut} - ${dental[1].prevision}</p>`),
    (`<p>${dental[2].hora} - ${dental[2].especialista} - ${dental[2].paciente} - ${dental[2].rut} - ${dental[2].prevision}</p>`),
    (`<p>${dental[3].hora} - ${dental[3].especialista} - ${dental[3].paciente} - ${dental[3].rut} - ${dental[3].prevision}</p>`),
    (`<p>${dental[4].hora} - ${dental[4].especialista} - ${dental[4].paciente} - ${dental[4].rut} - ${dental[4].prevision}</p>`),
    (`<p>${dental[5].hora} - ${dental[5].especialista} - ${dental[5].paciente} - ${dental[5].rut} - ${dental[5].prevision}</p>`)
);

var listaNombres = [];
//arreglo para pacientes en radiologia
for (var i = 0; i < radiologia.length; i++) {
    listaNombres.push(radiologia[i].paciente);
};

//arreglo para pacientes en traumatología
for (var i = 0; i < traumatologia.length; i++) {
    listaNombres.push(traumatologia[i].paciente);
};

//arreglo para pacientes en dental
for (var i = 0; i < dental.length; i++) {
    listaNombres.push(dental[i].paciente);
};

document.write(`<p>Lista de pacientes:<br> ${listaNombres}</p><br>`);

//Especialidad dental con ISAPRE

var pacientesPDental = dental.filter(consulta1 => consulta1.prevision === 'ISAPRE');

var listaPacientesIsapreDental = pacientesPDental.map(consulta1 => `${consulta1.paciente} - ${consulta1.prevision}`);

document.write(`<p>Lista de pacientes con ISAPRE área Dental:<br><br>${listaPacientesIsapreDental.join("<br>")}</p>`);

//Especialidad Traumatología con FONASA

var pacientesPTrauma = dental.filter(consulta2 => consulta2.prevision === 'FONASA');

var listaPacientesTrauma = pacientesPTrauma.map(consulta2 => `${consulta2.paciente} - ${consulta2.prevision}`);

document.write(`<p>Lista de pacientes con FONASA área Traumatología:<br><br>${listaPacientesTrauma.join("<br>")}</p>`);
//Agregar código para el desafio 2 aquí

document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);
