/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ADV010', {
    ADV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADV_COMPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ADV_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADV_CODCMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADV_ITCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADV_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADV_OPERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADV_IMPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADV_IMPMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADV_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADV_MEMO: {
      type: "IMAGE",
      allowNull: true
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
    tableName: 'ADV010'
  });
};
