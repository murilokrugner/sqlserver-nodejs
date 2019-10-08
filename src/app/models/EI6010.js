/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EI6010', {
    EI6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EI6_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EI6_CALIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EI6_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EI6_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EI6_QTD_EM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EI6_IPIUNI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EI6_NCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    }
  }, {
    tableName: 'EI6010'
  });
};
