/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('D3N010', {
    D3N_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3N_REG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D3N_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    D3N_DT_PRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D3N_COD_IT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    D3N_QTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3N_PERBLK: {
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
      primaryKey: true,
      autoIncrement: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'D3N010'
  });
};
