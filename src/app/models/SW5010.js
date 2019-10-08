/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SW5010', {
    W5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W5_SEQ_LI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W5_PO_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    W5_COD_I: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    W5_QTDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W5_SALDO_Q: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W5_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W5_PRECO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W5_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    W5_SI_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W5_TEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    W5_FABR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W5_FABLOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W5_FORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W5_FORLOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W5_DT_EMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W5_DT_ENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W5_HAWB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    W5_FABR_01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W5_FAB1LOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W5_FABR_02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W5_FAB2LOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W5_DOCTO_F: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    W5_DEF_REQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W5_FABR_03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W5_FAB3LOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W5_PARCIAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W5_PGI_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    W5_FABR_04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W5_FAB4LOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W5_FLUXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W5_SEQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W5_FABR_05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W5_FAB5LOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W5_REG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W5_NBM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    W5_DT_SHIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W5_POSICAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    W5_EX_NBM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W5_PESO_BR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W5_EX_NCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W5_AC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    W5_SEQSIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W5_QT_AC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W5_VL_AC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W5_QT_AC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W5_OPERACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    W5_INVANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    W5_CODOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W5_NVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W5_FRETE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W5_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W5_INLAND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W5_DESCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W5_PACKING: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    }
  }, {
    tableName: 'SW5010'
  });
};
