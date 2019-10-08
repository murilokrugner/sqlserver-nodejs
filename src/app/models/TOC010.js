/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TOC010', {
    TOC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TOC_CODFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TOC_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TOC_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TOC_DTENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TOC_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    },
    TOC_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    }
  }, {
    tableName: 'TOC010'
  });
};
