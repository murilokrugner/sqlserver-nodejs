/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NPK010', {
    NPK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NPK_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NPK_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NPK_NOMCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    NPK_SAFRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NPK_ARM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NPK_SLDINI: {
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
    }
  }, {
    tableName: 'NPK010'
  });
};
