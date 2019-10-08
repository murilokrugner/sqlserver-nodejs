/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SW1010', {
    W1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W1_POSIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    W1_COD_I: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    W1_FABR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W1_FABLOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W1_FORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W1_FORLOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W1_CLASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W1_QTDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W1_SALDO_Q: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W1_PRECO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W1_DT_EMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W1_PO_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    W1_FLUXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W1_DTENTR_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W1_SEQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W1_REG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W1_POSICAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    W1_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    W1_SI_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W1_FORECAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W1_QTSEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W1_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W1_CTCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    W1_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W1_CODMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    W1_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W1_NR_CONC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W1_DT_CANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W1_MOTCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    W1_COMPLEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    W1_C3_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W1_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    }
  }, {
    tableName: 'SW1010'
  });
};
