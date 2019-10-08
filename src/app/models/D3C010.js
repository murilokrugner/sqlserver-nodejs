/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('D3C010', {
    D3C_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3C_CDOPSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    D3C_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    D3C_TIPOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D3C_FINAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    D3C_CLASSE: {
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
      primaryKey: true,
      autoIncrement: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'D3C010'
  });
};
