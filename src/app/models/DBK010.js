/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DBK010', {
    DBK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DBK_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DBK_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DBK_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DBK_GRUSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DBK_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DBK_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DBK_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DBK_ITEMCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DBK_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    tableName: 'DBK010'
  });
};
