/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SH6010', {
    H6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    H6_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    H6_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    H6_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    H6_RECURSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H6_FERRAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H6_DATAINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    H6_HORAINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    H6_DATAFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    H6_HORAFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    H6_QTDPROD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H6_QTDPERD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H6_PT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    H6_DTAPONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    H6_DESDOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    H6_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H6_TEMPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H6_LOTECTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    H6_NUMLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H6_DTVALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    H6_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    H6_OBSERVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    H6_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    H6_OPERADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    H6_PERDANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H6_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    H6_IDENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    H6_IDEINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    H6_DTPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    H6_PRDINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    H6_LOTINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H6_VERIFI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H6_LAUDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    H6_CERQUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    H6_TAMLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    H6_REVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    H6_QTDPRO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H6_SEQCARG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H6_POTENCI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H6_TIPOTEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H6_RATEIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H6_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    H6_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    H6_CBFLAG: {
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
    H6_PERIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H6_QTGANHO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H6_QTMAIOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SH6010'
  });
};
