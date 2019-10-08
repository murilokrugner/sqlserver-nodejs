/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SP3010', {
    P3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P3_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    P3_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    P3_TPEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P3_FIXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P3_TPEXTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P3_MESDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    P3_RHEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'SP3010'
  });
};
