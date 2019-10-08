/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DCP010', {
    DCP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DCP_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DCP_ENDERE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DCP_ESTFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DCP_NORMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DCP_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DCP_PORCEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'DCP010'
  });
};
