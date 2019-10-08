/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FN6010', {
    FN6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FN6_CODBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FN6_CBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FN6_CITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    FN6_DTBAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FN6_QTDATU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FN6_QTDBX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FN6_PERCBX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FN6_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FN6_DEPREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FN6_GERANF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FN6_NUMNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FN6_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FN6_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FN6_ITEMNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    FN6_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FN6_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FN6_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FN6_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FN6_VALNF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FN6_CNDPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FN6_TESSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FN6_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FN6_SDOC: {
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
    tableName: 'FN6010'
  });
};
