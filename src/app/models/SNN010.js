/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SNN010', {
    NN_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NN_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NN_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NN_AQUISIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NN_DESCRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    NN_QUANTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NN_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NN_DTPREVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NN_CODEFTV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NN_ITMEFTV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NN_VORIG1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NN_TXDEPR1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NN_VORIG2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NN_TXDEPR2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NN_VORIG3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NN_TXDEPR3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NN_VORIG4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NN_TXDEPR4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NN_VORIG5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NN_TXDEPR5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NN_CCONTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NN_CUSTBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NN_SUBCCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NN_CLVLCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NN_CDEPREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NN_CCDESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NN_SUBCDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NN_CLVLDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NN_CCDEPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NN_CCCDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NN_SUBCCDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NN_CLVLCDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NN_OK: {
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
    }
  }, {
    tableName: 'SNN010'
  });
};
