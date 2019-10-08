/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SF1010', {
    F1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F1_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F1_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F1_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F1_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F1_COND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F1_DUPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F1_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F1_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F1_FRETE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_DESPESA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_BASEICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_BASEIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALMERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALBRUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_DESCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_DTDIGIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F1_CPROVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    F1_BRICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_ICMSRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_BASEFD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_DTLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F1_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F1_ORIGLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F1_TX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_CONTSOC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_IRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_NFORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F1_SERORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F1_ESPECIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    F1_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_II: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_REMITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F1_BASIMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_BASIMP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_BASIMP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_BASIMP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_BASIMP6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALIMP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALIMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALIMP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALIMP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALIMP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALIMP6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_ORDPAGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F1_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F1_INSS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_ISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_BASIMP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_HAWB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    F1_TIPO_NF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_IPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_ICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_PESOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_FOB_R: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_CIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_PREFIXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F1_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_VALEMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_RECBMTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F1_CTR_NFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    F1_APROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F1_TXMOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_PEDVEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F1_TIPODOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F1_TIPOREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_GNR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F1_PLACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F1_VALPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALCOFI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_BASEPS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALPS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_BASECF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALCF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_NFELETR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    F1_EMINFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F1_HORNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F1_CODNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    F1_CREDNFE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VNAGREG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_NUMRPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    F1_VALIRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_NUMMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F1_CHVNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    F1_RECISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_FILORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F1_ESTCRED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F1_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F1_NUMRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F1_BASEINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALFDS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F1_PLIQUI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_PBRUTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_ESPECI1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F1_VOLUME1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_ESPECI2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F1_VOLUME2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_ESPECI3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F1_VOLUME3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_ESPECI4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F1_VOLUME4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALFAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_RECOPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_VALPEDG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_FORRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F1_VALFET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_MENNOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    F1_FIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_VALFAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_LOJARET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F1_BASCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_BASPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_STATCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_DOCFOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F1_BASEFUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_MENPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F1_TPFRETE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_MSIDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F1_BASCOFI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VERBAFO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F1_QTDCONF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_FORENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F1_LOJAENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    F1_CLIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F1_LOJAORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F1_TPNFEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_EVENFLG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_IDCCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                      '
    },
    F1_FLAGRGS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    F1_IDRGS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                      '
    },
    F1_CODRGS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_DAUTNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F1_HAUTNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    F1_NUMTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F1_TPCTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_VALINA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_BASEINA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_X_MEMO: {
      type: "IMAGE",
      allowNull: true
    },
    F1_VLSENAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_NUMAIDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    F1_ANOAIDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    F1_IDRECOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F1_INCISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    F1_ESTPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F1_VLCIDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_BASECID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_MODAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F1_VEICUL1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F1_VEICUL2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F1_VEICUL3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F1_SERMDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F1_NUMMDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F1_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F1_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    F1_VALIMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALFUND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_CLIDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F1_LOJDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F1_VALFASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_TPCOMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_SIMPNAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_BASEFMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VALFMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_BASECPM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_VLCPM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_MOTRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F1_IDSA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    F1_IDSA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    F1_IDSED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    F1_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F1_SDOCORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F1_SDOCMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F1_HISTRET: {
      type: "IMAGE",
      allowNull: true
    },
    F1_DTCPISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F1_VERBAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F1_DOCISEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F1_BOMDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    F1_VALFMD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F1_DEVMERC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F1_ESTDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F1_CODROM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F1_UFORITR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F1_MUORITR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    F1_UFDESTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F1_MUDESTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    }
  }, {
    tableName: 'SF1010'
  });
};
