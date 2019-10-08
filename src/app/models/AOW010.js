/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AOW010', {
    AOW_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AOW_FILENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AOW_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AOW_CODCNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AOW_LOJCNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AOW_CODSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AOW_SUBSEG: {
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
    tableName: 'AOW010'
  });
};
