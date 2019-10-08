/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RDD010', {
    RDD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDD_CODAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDD_CODADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDD_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDD_DTIAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDD_DTFAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDD_CODCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDD_ITECOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDD_CODTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDD_CODNET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDD_RESOBT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RDD_TIPOAV: {
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
    },
    RDD_PTOMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'RDD010'
  });
};
