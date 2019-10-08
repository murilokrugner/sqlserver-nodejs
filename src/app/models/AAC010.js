/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AAC010', {
    AAC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AAC_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AAC_CODPRB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AAC_GRPATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AAC_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AAC_HABIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AAC_NIVEL: {
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
    tableName: 'AAC010'
  });
};
