/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB5010', {
    TB5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TB5_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TB5_TPRECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TB5_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TB5_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TB5_CODLAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
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
    TB5_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TB5_MOTIVO: {
      type: "IMAGE",
      allowNull: true
    },
    TB5_DOCFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TB5_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    }
  }, {
    tableName: 'TB5010'
  });
};
