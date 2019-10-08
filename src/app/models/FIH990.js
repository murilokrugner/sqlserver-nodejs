/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FIH990', {
    FIH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIH_ENTORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIH_PREFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIH_NUMORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FIH_PARCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIH_TIPOOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIH_CFORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FIH_LOJAOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIH_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIH_ENTDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIH_PREFDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIH_NUMDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FIH_PARCDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIH_TIPODE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIH_CFDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FIH_LOJADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIH_FILDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIH_ROTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FIH_OPERAC: {
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
    tableName: 'FIH990'
  });
};
