/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AA5010', {
    AA5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA5_CODSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA5_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AA5_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AA5_PRCCLI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA5_PRCFAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA5_ATUOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA5_ATUEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA5_ATUORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    tableName: 'AA5010'
  });
};
