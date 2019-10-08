/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FII990', {
    FII_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FII_ENTORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FII_PREFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FII_NUMORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FII_PARCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FII_TIPOOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FII_CFORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FII_LOJAOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FII_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FII_ENTDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FII_PREFDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FII_NUMDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FII_PARCDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FII_TIPODE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FII_CFDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FII_LOJADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FII_FILDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FII_ROTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FII_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'FII990'
  });
};
