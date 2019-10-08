/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CF2010', {
    CF2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF2_PER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CF2_ORIDED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF2_INDNAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF2_DEDPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF2_DEDCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF2_BASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF2_CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CF2_INFORM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                          '
    },
    CF2_CMPDED: {
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
    }
  }, {
    tableName: 'CF2010'
  });
};
