/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SA5010', {
    A5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A5_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A5_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A5_NOMEFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A5_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A5_NOMPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A5_CODPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A5_REFGRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                          '
    },
    A5_DESREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A5_QUANT01: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_QUANT02: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_QUANT03: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_QUANT04: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_QUANT05: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_QUANT06: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_QUANT07: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_QUANT08: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_QUANT09: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_QUANT10: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_QUANT11: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_QUANT12: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_PRECO01: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_PRECO02: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_PRECO03: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_PRECO04: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_PRECO05: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_PRECO06: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_PRECO07: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_PRECO08: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_PRECO09: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_PRECO10: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_PRECO11: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_PRECO12: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_COND01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A5_COND02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A5_COND03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A5_COND04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A5_COND05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A5_COND06: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A5_COND07: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A5_COND08: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A5_COND09: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A5_COND10: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A5_COND11: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A5_COND12: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A5_DTCOM01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_DTCOM02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_DTCOM03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_DTCOM04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_DTCOM05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_DTCOM06: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_DTCOM07: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_DTCOM08: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_DTCOM09: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_DTCOM10: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_DTCOM11: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_DTCOM12: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_SKIPLOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_ENTREGA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_NOTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A5_FABR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A5_FALOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A5_MOE_US: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A5_VLCOTUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_LEAD_T: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_QT_COT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_ULT_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_ULT_FOB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_LOTEMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_LOTEMUL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_PARTOPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                '
    },
    A5_UNID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A5_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_SITU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A5_SKPLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A5_RIAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_DTRIAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_VALRIAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_TEMPLIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_PLAM1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A5_NIVEL1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A5_NQA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A5_PLAM2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A5_NIVEL2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A5_NQA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A5_FABREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A5_ATUAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A5_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_TIPATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A5_INCOTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A5_TR_COST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_CODPRCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    A5_CODBAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A5_TIPOCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A5_TEMPTRA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_CODTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A5_ENTSIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_DIASSIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_TESBP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A5_UMNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A5_TESCP: {
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
    A5_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    A5_PE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_TIPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A5_CODFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A5_NCMPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    A5_DESCPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A5_CNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A5_TOLEDIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A5_VOLMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SA5010'
  });
};
