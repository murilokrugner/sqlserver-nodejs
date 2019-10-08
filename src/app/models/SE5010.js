/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SE5010', {
    E5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E5_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E5_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E5_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E5_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_NATUREZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E5_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E5_AGENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    E5_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E5_NUMCHEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    E5_DOCUMEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    E5_VENCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E5_RECPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E5_BENEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    E5_HISTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    E5_TIPODOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E5_VLMOED2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_LA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E5_SITUACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E5_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E5_PREFIXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E5_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E5_PARCELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E5_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E5_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E5_DTDIGIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E5_TIPOLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E5_DEBITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E5_CREDITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E5_MOTBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E5_RATEIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E5_RECONC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E5_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E5_DTDISPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E5_CCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E5_CCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E5_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E5_ARQRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    E5_IDENTEE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E5_ORDREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E5_FILORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E5_ARQCNAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    E5_VLJUROS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_VLMULTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_VLCORRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_VLDESCO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_CNABOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E5_SITUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E5_ITEMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E5_ITEMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E5_CLVLDB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E5_CLVLCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E5_PROJPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E5_EDTPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    E5_TASKPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    E5_MODSPB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E5_FATURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E5_TXMOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_FATPREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E5_CODORCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E5_SITCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E5_FORNADT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E5_LOJAADT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E5_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E5_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E5_SERREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E5_OPERAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E5_MOVCX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E5_KEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    E5_MULTNAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E5_AGLIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E5_VLACRES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_VLDECRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_VRETPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_VRETCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_VRETCSL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_PRETPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E5_PRETCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E5_PRETCSL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E5_AUTBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    E5_PRETIRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E5_VRETIRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_VRETISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_NUMMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E5_PROCTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E5_BASEIRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E5_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E5_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E5_FORMAPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
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
    E5_TPDESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E5_PRINSS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_PRISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_IDMOVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E5_FLDMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E5_VRETINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E5_PRETINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E5_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E5_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    E5_SEQCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E5_MOVFKS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E5_IDORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    E5_TABORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E5_SDOCREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E5_DTCANBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'SE5010'
  });
};
