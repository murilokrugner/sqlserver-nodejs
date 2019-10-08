/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPE010', {
    PE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PE_MATPROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    PE_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PE_DATAINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PE_DATAFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PE_RHEXP: {
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
    tableName: 'SPE010'
  });
};
