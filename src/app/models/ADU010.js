/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ADU010', {
    ADU_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADU_CODCMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADU_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADU_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    ADU_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADU_OPERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADU_IMPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADU_IMPMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADU_CODMEM: {
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
    tableName: 'ADU010'
  });
};
