/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DIB010', {
    DIB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIB_FILDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIB_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DIB_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DIB_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIB_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIB_DATALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DIB_HORALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DIB_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIB_CODINF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIB_CPODOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIB_SDOC: {
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
    tableName: 'DIB010'
  });
};
