/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SNV010', {
    NV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NV_CODRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    NV_REVISAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NV_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NV_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NV_PERCEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NV_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NV_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NV_ITEMCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NV_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NV_MSBLQL: {
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
    tableName: 'SNV010'
  });
};
