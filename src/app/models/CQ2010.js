/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CQ2010', {
    CQ2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQ2_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CQ2_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CQ2_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CQ2_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQ2_TPSALD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CQ2_LP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CQ2_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CQ2_SLBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CQ2_DEBITO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CQ2_CREDIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CQ2_DTLP: {
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
    tableName: 'CQ2010'
  });
};
