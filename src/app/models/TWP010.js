/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TWP010', {
    TWP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TWP_IDREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TWP_NUMNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TWP_SERNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TWP_QTDRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TWP_SDOCNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TWP_ITEMNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    TWP_OSTIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TWP_OSNUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TWP_OSITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TWP_EXIGNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TWP_DTRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TWP_FILNF: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TWP010'
  });
};
