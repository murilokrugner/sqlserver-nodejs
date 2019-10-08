/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FJA010', {
    FJA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FJA_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FJA_NUMTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FJA_PARCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FJA_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FJA_SOLFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FJA_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FJA_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FJA_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FJA_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FJA_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    FJA_CODAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FJA_RESPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FJA_DTOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FJA_OBOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    FJA_ORDPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    FJA_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJA_DATAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FJA_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FJA_DESTIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    FJA_CUIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    FJA_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'FJA010'
  });
};
