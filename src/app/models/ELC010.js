/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ELC010', {
    ELC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ELC_CODENQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ELC_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    ELC_INDRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ELC_MODVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ELC_MODAQU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ELC_MSBLQL: {
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
    tableName: 'ELC010'
  });
};
