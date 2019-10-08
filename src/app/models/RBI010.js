/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RBI010', {
    RBI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RBI_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RBI_HABIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RBI_ESCALA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RBI_ITESCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RBI_TIPGRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RBI_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RBI_RESULT: {
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
    tableName: 'RBI010'
  });
};
