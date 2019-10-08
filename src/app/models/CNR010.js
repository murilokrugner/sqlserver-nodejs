/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CNR010', {
    CNR_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CNR_NUMMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CNR_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNR_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    CNR_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNR_MODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNR_FLGPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNR_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CNR_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
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
    CNR_CODPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CNR_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'CNR010'
  });
};
