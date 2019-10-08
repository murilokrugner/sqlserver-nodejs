/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VFA010', {
    VFA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VFA_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VFA_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VFA_CATACO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VFA_CODMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VFA_KILFAI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VFA_DATVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VFA_VALFAI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VFA_GRUSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VFA_CODSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VFA_TIPSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'VFA010'
  });
};
