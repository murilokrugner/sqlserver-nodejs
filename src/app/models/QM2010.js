/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QM2010', {
    QM2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QM2_INSTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QM2_REVINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QM2_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QM2_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QM2_DATREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QM2_FILRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QM2_RESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QM2_USOINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QM2_FREQAF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QM2_FREQAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QM2_VALDAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QM2_VALDAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QM2_FABR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QM2_NUMFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QM2_NSEFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QM2_TALIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QM2_RESOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QM2_LEIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QM2_POT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QM2_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QM2_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QM2_ESCMAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QM2_CUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QM2_NHORDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QM2_ESPMAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QM2_ESPMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QM2_FREREP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QM2_VALREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QM2_LAUDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM2_SGUARD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QM2_DIAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QM2_OVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QM2_DESG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QM2_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM2_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QM2_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QM2_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QM2_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QM2_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM2_ONLINE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM2_BAUDRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM2_PARITY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM2_PORTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM2_BITDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM2_STOPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM2_CLIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QM2_LOJA: {
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
    tableName: 'QM2010'
  });
};
