/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CF9010', {
    CF9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF9_CODBCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF9_PERING: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CF9_VLTEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF9_SCRED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF9_BASCAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF9_BASMES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF9_CSTPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF9_ALQPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF9_VALPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF9_CSTCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF9_ALQCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF9_VALCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF9_DESCPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CF9_CODCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
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
    tableName: 'CF9010'
  });
};
