/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SAA010', {
    AA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA_CONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AA_TOTHOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA_SALDHOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA_REAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AA_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA_DTULTVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
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
    tableName: 'SAA010'
  });
};
