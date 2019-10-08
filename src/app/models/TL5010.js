/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TL5010', {
    TL5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TL5_DTATEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TL5_HRATEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TL5_NUMFIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TL5_INDICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TL5_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TL5_CODMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TL5_QTDADE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TL5_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    TL5_CODUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TL5_USERGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    TL5_TEMPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TL5_ALTURA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TL5_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TL5_PRESIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TL5_PREDIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TL5_PULSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TL5_RESPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TL5_DINAMO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TL5_OBSSYP: {
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
    }
  }, {
    tableName: 'TL5010'
  });
};
