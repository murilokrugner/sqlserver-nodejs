/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SES990', {
    ES_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ES_TIPORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ES_CARTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ES_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ES_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    ES_SINAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ES_SALDUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ES_ABATIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ES_TRANSFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ES_REJEITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    }
  }, {
    tableName: 'SES990'
  });
};
