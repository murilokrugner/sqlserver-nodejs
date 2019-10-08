/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DIC010', {
    DIC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIC_FILDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIC_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DIC_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DIC_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIC_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIC_DATCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DIC_HORCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DIC_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIC_CODENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIC_FIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DIC_SDOC: {
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
    tableName: 'DIC010'
  });
};
