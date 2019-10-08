/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TF5010', {
    TF5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TF5_CODFMR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TF5_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TF5_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TF5_CODPNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TF5_CODRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TF5_RESPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TF5_ORDPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TF5_OBSERV: {
      type: "IMAGE",
      allowNull: true
    },
    TF5_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TF5_LIBRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TF5_DESCNC: {
      type: "IMAGE",
      allowNull: true
    },
    TF5_FNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TF5_CODOCO: {
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
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TF5010'
  });
};
