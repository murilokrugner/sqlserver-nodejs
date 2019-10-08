/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AO5010', {
    AO5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AO5_ENTANE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AO5_CODANE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AO5_ENTPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AO5_CODPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AO5_IDESTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AO5_NVESTN: {
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
    tableName: 'AO5010'
  });
};
