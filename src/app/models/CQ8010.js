/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CQ8010', {
    CQ8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQ8_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CQ8_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CQ8_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CQ8_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQ8_TPSALD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CQ8_LP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CQ8_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CQ8_SLBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CQ8_DEBITO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CQ8_CREDIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CQ8_DTLP: {
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
    tableName: 'CQ8010'
  });
};
