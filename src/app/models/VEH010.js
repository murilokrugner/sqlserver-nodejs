/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VEH010', {
    VEH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VEH_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VEH_GRUKIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VEH_CODKIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                           '
    },
    VEH_DESKIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VEH_VALKIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VEH_KITVEI: {
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
    VEH_PERDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VEH_INFTEC: {
      type: "VARBINARY",
      allowNull: true
    }
  }, {
    tableName: 'VEH010'
  });
};
