/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AH1010', {
    AH1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH1_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AH1_SEQCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH1_INICVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AH1_DTULTP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AH1_DTUCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AH1_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AH1_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AH1_LOJAFO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH1_MASTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AH1_PRZOPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AH1_DTACON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AH1_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH1_VIGEIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AH1_VIGENC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH1_DATAFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AH1_CARTRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AH1_RENOVA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH1_SUB_LI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AH1_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AH1_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH1_QTDEVD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH1_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AH1_GARMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH1_TIPOGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AH1_ESTMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH1_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    AH1_AGENLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AH1_LOJAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH1_TERRIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AH1_MOEDRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH1_TITORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    AH1_ROYALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AH1_PRESTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AH1_PAGAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AH1_DIAST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH1_PERSUB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH1_PERSBA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH1_ADIAST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AH1_REGRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AH1_ADTOIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH1_REMESS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    AH1_SALDOA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH1_SALDQT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH1_VALADI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH1_CODANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    tableName: 'AH1010'
  });
};
