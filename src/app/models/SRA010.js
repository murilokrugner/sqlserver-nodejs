/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SRA010', {
    RA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RA_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RA_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RA_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RA_CIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    RA_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RA_PIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    RA_RG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    RA_NUMCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    RA_SERCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RA_UFCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_HABILIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RA_RESERVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    RA_TITULOE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    RA_ZONASEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_NOMECMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    RA_ENDEREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RA_COMPLEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    RA_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    RA_MUNICIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RA_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_TELEFON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RA_PAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    RA_MAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    RA_NATURAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_NACIONA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_ANOCHEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_ESTCIVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_SEXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_DEPIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_DEPSF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_NASC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_ADMISSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_ALTNASC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_OPCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_DEMISSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_VCTOEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_VCTEXP2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_EXAMEDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_BCDEPSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_CTDEPSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    RA_BCDPFGT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_CTDPFGT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    RA_SITFOLH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_HRSMES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_HRSEMAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_CHAPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RA_TNOTRAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RA_CODFUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RA_CBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RA_PGCTSIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_ALTCBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_SINDICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RA_ADTPOSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RA_CESTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_VALEREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_SEGUROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_PENSALI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_PERCADT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_CATFUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_TIPOPGT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_SALARIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_ANTEAUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_PERICUL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_INSMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_INSMED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_INSMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_TIPOADM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_FTINSAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_AFASFGT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_VIEMRAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_GRINRAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_RESCRAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_MESTRAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_MESESAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_ALTEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_ALTCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_ALTPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_ALTADM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_ALTOPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_ALTNOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_CODRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RA_CRACHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RA_REGRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_CATEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_SEQTURN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_SENHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RA_REGISTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RA_FICHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_TPCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_APELIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    RA_TPRCBT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_TCFMSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RA_INSSSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_CLASSEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_OCORREN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_PERCSAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_DISTSN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_DEFIFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_BHFOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_RGORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RA_BRPDH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_ACUMBH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_OKTRANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_RACACOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RA_TABNIVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_TABFAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_RECMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_RECPFNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    RA_PERFGTS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_DTVTEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_TPMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    RA_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RA_CODTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_POSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RA_TIPAMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_ASMEDIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_DPASSME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_TPASODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_CHIDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    RA_ASODONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_DTCPEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_DTRGEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_TPDEFFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_RGEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RA_RGUF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_NUMINSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    RA_SERVICO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    RA_ORGEMRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RA_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RA_CODUNIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RA_REGIME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_FWIDM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                  '
    },
    RA_FECREI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_DEMIANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_ASSIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_CONFED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_MENSIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_RESEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_MOLEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_INSSAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_DTFIMCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_CLAURES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_HOPARC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_COMPSAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_RHEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_NSOCIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    RA_HOJORVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_CPAISOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RA_NACIONC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RA_BRNASEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_CODMUNN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RA_MUNNASC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RA_EMAIL2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    RA_PORTDEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RA_OBSDEFI: {
      type: "IMAGE",
      allowNull: true
    },
    RA_LOCBNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RA_TPCTSAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_TPPREVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_HRSDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_ADCPERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_VALEALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RA_CATEFD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RA_ADCINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_EAPOSEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_NJUD14: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RA_TPREINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_NRPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RA_NRLEIAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    RA_DTEFRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_DTEFRTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_COMPLRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RA_CNHORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RA_DTEMCNH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_DTVCCNH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_CATCNH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_UFCNH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_TIPENDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_PAISEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RA_SECAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RA_LOGRTP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RA_LOGRDSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    RA_SERVENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RA_CODACER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_LOGRNUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RA_REGCIVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_TPLIVRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_CLASEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_NUMENDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RA_TIPCERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_EMICERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_MATCERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    RA_LIVCERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RA_FOLCERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RA_CARCERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RA_UFCERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_CPOSTAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RA_CDMUCER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RA_CEPCXPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_NUMEPAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    RA_EMISPAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    RA_DDDFONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_UFPAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_DDDCELU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_DEMIPAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_DVALPAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_NUMCELU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RA_CODPAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RA_NUMRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    RA_EMISRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RA_UFRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_CDMURIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RA_DEXPRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_OCEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RA_OCDTEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_OCDTVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_PRCFCH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RA_PERFCH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RA_ROTFCH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RA_NUPFCH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_RNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    RA_RNEORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RA_RNEDEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_DATCHEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_NUMNATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RA_DATNATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_CASADBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_FILHOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_ADCCONF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_ADCTRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_PLSAUDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_TPJORNA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_FITIPEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA_MATIPEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RA_TIPOPEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_APOSENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_SUBCARR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_DTNOMEA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_DEFETIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_CODCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RA_ADICEDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_JORNRED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_TPSBCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_DTHREST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_TPCUEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_ANOSEME: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_PERESTU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_DTCAGED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_CTRLEMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA_MATMIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RA_AUTMEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_DESEPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    RA_HABILMT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_DTINCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA_CTPCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA_USRADM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'SRA010'
  });
};
