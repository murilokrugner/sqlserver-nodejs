/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SE1010', {
    E1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E1_PREFIXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E1_PARCELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_NATUREZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E1_PORTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_AGEDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    E1_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E1_NOMCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E1_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_VENCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_VENCREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_BASEIRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_ISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_IRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_NUMBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    E1_INDICE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_BAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_NUMBOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_DATABOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_EMIS1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_HIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    E1_LA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E1_MOVIMEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    E1_SITUACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_CONTRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    E1_SALDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_SUPERVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_VEND1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_VEND2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_VEND3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_VEND4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_VEND5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_COMIS1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_COMIS2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_COMIS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_COMIS4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_DESCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_COMIS5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_MULTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_JUROS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_CORREC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_VALLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_VENCORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E1_VALJUR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_PORCJUR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_BASCOM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_BASCOM2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_BASCOM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_BASCOM4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_BASCOM5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_FATPREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_FATURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E1_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E1_PROJETO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_CLASCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    E1_VALCOM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_VALCOM2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_VALCOM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_VALCOM4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_VALCOM5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_OCORREN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E1_INSTR1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E1_INSTR2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E1_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_DTVARIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_VARURV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_VLCRUZ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_DTFATUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_NUMNOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E1_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_IDENTEE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_NUMCART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                   '
    },
    E1_FLUXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_DESCFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_DIADESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_TIPODES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_CARTAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    E1_CARTVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_CARTAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_ADM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_VLRREAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_TRANSF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    E1_BCOCHQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_AGECHQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    E1_CTACHQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E1_NUMLIQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_ORDPAGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_RECIBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_INSS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_FILORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E1_DTACRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_TIPOFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_TIPOLIQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_CSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_COFINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_PIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_FLAGFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_MESBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E1_ANOBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E1_PLNUCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    E1_CODEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E1_CODINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E1_MATRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_TXMOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_ACRESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_SDACRES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_DECRESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_SDDECRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_MULTNAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_MSFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E1_MSEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E1_PROJPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_DESDOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_NRDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    E1_MODSPB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_EMITCHQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    E1_IDCNAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E1_PLCOEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    E1_PLTPCOE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_CODCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_PARCCSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_CODORCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_CODIMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    E1_FILDEB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E1_NUMRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    E1_NUMSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_INSCRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E1_SERREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_CODBAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    E1_DATAEDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_CODDIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                '
    },
    E1_CHQDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_LIDESCF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_VLBOLSA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_NUMCRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E1_VLFIES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_DEBITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E1_CCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E1_ITEMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E1_CLVLDB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E1_CREDIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E1_CCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E1_ITEMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E1_CLVLCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E1_DESCON1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_DESCON2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_DTDESC3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_DTDESC1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_DTDESC2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E1_VLMULTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_DESCON3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_MOTNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_SABTPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_SABTCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_SABTCSL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_FORNISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_PARTOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E1_SITFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_BASEPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_BASECOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_BASECSL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_VRETISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_PARCIRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_SCORGP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_FRETISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_TXMDCOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_SATBIRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_TIPREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E1_CONEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    E1_VERCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_SUBCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E1_VERSUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_PLLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E1_PLOPELT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E1_CODRDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_FORMREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E1_BCOCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_AGECLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    E1_CTACLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E1_PARCFET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_FETHAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_MDCRON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_MDCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    E1_MEDNUME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_MDPLANI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_MDPARCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_MDREVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_NUMMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E1_PREFORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E1_TITPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    E1_DOCTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E1_MDMULT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_JURFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    E1_MDBONI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_MDDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_RELATO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_BASEINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_MULTDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_NFELETR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E1_RETCNTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_NUMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E1_TURMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E1_IDLAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_NSUTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    E1_SABTIRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_IDAPLIC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_PROCEL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_NOPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_SERVICO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E1_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E1_IDBOLET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_VRETIRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_BASEISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_VLBOLP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_APLVLMN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_LTCXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E1_NUMINSC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_SEQBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E1_NUMPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E1_INDPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_FABOV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_PARCFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_FACS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_PARCFAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    E1_VLMINIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_TPDP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_PARTPDP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_TPDESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_CODIRRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E1_PRINSS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_PRISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_IDMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E1_DESCJUR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E1_FAMAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_FMPEQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E1_PARCFAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_PARCFMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_CDRETCS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E1_CDRETIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E1_PERLET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E1_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    E1_TPESOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E1_CNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E1_CHAVENF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    E1_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_SDOCREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E1_CTRBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    E1_BOLETO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E1_ITEMCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E1_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E1_CODRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E1_CONHTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    E1_TCONHTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SE1010'
  });
};
