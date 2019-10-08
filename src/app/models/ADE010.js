/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ADE010', {
    ADE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADE_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_CODCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ADE_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    ADE_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    ADE_DDDRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADE_TELRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ADE_CODSB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ADE_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADE_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ADE_DESCIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    ADE_TECNIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    ADE_SEVCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADE_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_MIDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_OPERAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADE_ASSUNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_CHANEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADE_PLVCHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    ADE_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADE_REGSLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_DTEXPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADE_HREXPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ADE_CODINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_SEVSLA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADE_CRITIC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADE_FNCFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADE_FNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ADE_FNCREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADE_CODCAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_CODORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADE_CODEFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADE_CODCAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADE_CODCAU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADE_CODDEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_OPEUSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_SECUSO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADE_CHORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_DINISL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADE_HINISL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ADE_DPSE1S: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADE_HPSE1S: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ADE_DATUSL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADE_HATUSL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ADE_DENCSL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADE_HENCSL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ADE_DENCCH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADE_HENCCH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ADE_DPSEUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADE_HPSEUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ADE_SLAANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_SESLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ADE_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADE_ASSANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_PRDANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ADE_CODREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_ENTREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ADE_CHVREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    ADE_DDDREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADE_TELREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADE_DATUSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADE_RECORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADE_WFASTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADE_STRREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    ADE_CHORRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_FOLLOW: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADE_FLCHAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADE_CODOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADE_FLSLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADE_QTASS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'ADE010'
  });
};
