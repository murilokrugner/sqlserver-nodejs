/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COX010', {
    COX_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    COX_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    COX_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    COX_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    COX_PROPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    COX_COND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    COX_OBRIGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    COX_DPSLEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    COX_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    COX_DESCDE: {
      type: "VARBINARY",
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
    tableName: 'COX010'
  });
};
