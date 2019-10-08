/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RD8010', {
    RD8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD8_CODMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD8_CODCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD8_ITECOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD8_CODQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RD8_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RD8_ESCALA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD8_ITEESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD8_EDITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD8_HABIL: {
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
    tableName: 'RD8010'
  });
};
