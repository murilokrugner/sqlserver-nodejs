/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FW8010', {
    FW8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FW8_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FW8_DTLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FW8_DTARQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FW8_DTPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FW8_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FW8_ARQSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'FW8010'
  });
};
