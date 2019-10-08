/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA6010', {
    MA6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MA6_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MA6_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MA6_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    MA6_DTEVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MA6_SITUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MA6_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MA6_DTREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MA6_DTENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MA6_CODDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    tableName: 'MA6010'
  });
};
