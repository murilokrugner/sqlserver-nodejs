/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MBJ010', {
    MBJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MBJ_PROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    MBJ_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MBJ_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    MBJ_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    MBJ_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    MBJ_VALUNI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MBJ_VALTOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MBJ_GARANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    MBJ_NUMTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    MBJ_SERTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    MBJ_ADMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    MBJ_NSERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    MBJ_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MBJ_SDOC: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MBJ010'
  });
};
