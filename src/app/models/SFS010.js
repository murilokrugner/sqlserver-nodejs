/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFS010', {
    FS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FS_AIDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    FS_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FS_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FS_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FS_NUMINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FS_NUMFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FS_TPIMPR: {
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
    FS_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'SFS010'
  });
};
