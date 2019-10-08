/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CQ5010', {
    CQ5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQ5_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CQ5_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CQ5_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CQ5_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CQ5_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQ5_TPSALD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CQ5_LP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CQ5_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CQ5_SLBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CQ5_DEBITO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CQ5_CREDIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CQ5_DTLP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    tableName: 'CQ5010'
  });
};
