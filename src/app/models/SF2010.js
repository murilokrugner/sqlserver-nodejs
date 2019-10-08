/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SF2010', {
    F2_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F2_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F2_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F2_COND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F2_DUPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F2_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F2_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F2_FRETE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_ICMFRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_TIPOCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_VALBRUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_BASEICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_BASEIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALMERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_NFORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F2_DESCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_SERIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F2_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_ESPECI1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F2_ESPECI2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F2_ESPECI3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F2_ESPECI4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F2_VOLUME1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VOLUME2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VOLUME3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VOLUME4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_ICMSRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_PLIQUI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_PBRUTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_REDESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_VEND1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_VEND2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_VEND3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_VEND4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_VEND5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    F2_FIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_DTLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F2_DTREAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F2_REAJUST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F2_DTBASE0: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F2_FATORB0: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_DTBASE1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F2_FATORB1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VARIAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F2_BASEISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALFAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_CONTSOC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_BRICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_FRETAUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_ICMAUTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_DESPESA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_NEXTDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F2_NEXTSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F2_ESPECIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    F2_PDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F2_MAPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F2_ECF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_PREFIXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F2_BASIMP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_BASIMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_BASIMP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_BASIMP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_BASIMP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_BASIMP6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALIMP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALIMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALIMP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALIMP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALIMP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALIMP6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_ORDPAGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_NFCUPOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    F2_VALINSS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    F2_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_REGIAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F2_VALCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALCOFI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_TXMOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_CLEOK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    F2_CHVCLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    F2_IDCLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    F2_VALIRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_RECFAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_CARGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_SEQCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F2_BASEINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_PEDPEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_DESCCAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F2_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_TIPODOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F2_NFEACRS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F2_TIPOREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_SEQENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_ICMSDIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALACRS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_RECISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_VALCF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_ORDSEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_HORNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F2_CHVNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    F2_FLAGDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_TPFRETE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_NFELETR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    F2_BASECF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VEICUL2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F2_HAWB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    F2_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F2_BASEPS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_EMINFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F2_ESTCRED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_BASEIRR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALPS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_CODNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    F2_TIPORET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_BASPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_CREDNFE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VEICUL1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F2_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F2_VALTST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_CGCCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    F2_RECOPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_FILDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F2_NFICMST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    F2_VLSENAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_BASCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_NFSUBST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F2_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_BASETST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_SERSUBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F2_NTFECP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    F2_REFTAXA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VLR_FRT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_BASEFUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_BASCOFI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_REFMOED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VEICUL3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F2_DTDIGIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F2_VALFDS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_PREFORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F2_LOJENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F2_FORDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_LOJADES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F2_FORMDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_TPNFEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    F2_EVENFLG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_IDCCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                      '
    },
    F2_FLAGRGS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    F2_IDRGS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                      '
    },
    F2_CODRGS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_DAUTNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F2_HAUTNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    F2_VREINT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_BSREIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALFAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALFAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALFET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALINA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_BASEINA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_DESCZFR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_TOTIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_TIPIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_IDRECOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_MENNOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    F2_SERMDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F2_NUMMDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F2_NUMORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_IDSA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    F2_IDSA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    F2_IDSED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    F2_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F2_TPCOMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F2_BASEFMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_TOTEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_TOTFED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_TOTMUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALFMD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALFMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_LTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                         '
    },
    F2_CNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F2_DTTXREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F2_TXREF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALFUND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALIMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_VALFASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F2_SDOCSUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F2_SDOCMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F2_SDOCORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F2_SDOCMDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F2_SDOCNXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F2_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F2_GNRDIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    F2_GNRFECP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    F2_DTESERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F2_SERSAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    }
  }, {
    tableName: 'SF2010'
  });
};
