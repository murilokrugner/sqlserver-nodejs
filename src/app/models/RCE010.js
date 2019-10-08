/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RCE010', {
    RCE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RCE_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RCE_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    RCE_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    RCE_ENTSIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    RCE_ENDER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RCE_NUMER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RCE_COMPLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RCE_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RCE_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RCE_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RCE_MUNIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RCE_MESDIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RCE_MESANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RCE_MED01: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_MED02: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_MED03: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_MED04: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_NROSEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_DSR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_HSATIV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_GCOMIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_INI1SM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RCE_FIM1SM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RCE_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RCE_FONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RCE_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RCE_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    RCE_INI2SM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RCE_FIM2SM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RCE_PISO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_ASSJAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_ASSFEV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_ASSMAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_ASSABR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_ASSMAI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_ASSJUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_ASSJUL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_ASSAGO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_ASSSET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_ASSOUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_ASSNOV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_ASSDEZ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_ASSREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_ASSSAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_ASSMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_ASSMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_CONJAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_CONFEV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_CONMAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_CONABR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_CONMAI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_CONJUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_CONJUL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_CONAGO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_CONSET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_CONOUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_CONNOV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_CONDEZ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_CONREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_CONSAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_CONMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_CONMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_MENSIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_MENREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_MENSAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_MENMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_MENMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_DIADIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_DIASAV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_RHEXP: {
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
    },
    RCE_PLRTPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_PLRBSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_PLRVLR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_PLRPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_PLRVMI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_PLRVMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_PLRMAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RCE_PLRARC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RCE_PLRPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_TPCATS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_PLRQTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_BASCAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_VLRAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_PERAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_LIMAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_DTIAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RCE_DTFAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RCE_ACUAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_CARAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_VLRBI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_PERBI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_LIMBI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_DTIBI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RCE_DTFBI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RCE_ACUBI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_CARBI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_VLRTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_PERTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_LIMTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_DTITR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RCE_DTFTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RCE_ACUTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_CARTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_VLRQR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_PERQR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_LIMQR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_DTIQR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RCE_DTFQR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RCE_ACUQR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_CARQR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_VLRQN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_PERQN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_LIMQN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_DTIQN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RCE_DTFQN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RCE_ACUQN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_CARQN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_BCALPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_PERPE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_BCALIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_PINSMI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_PINSME: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_PINSMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_FPAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RCE_TERC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RCE_PRJAVT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCE_DESAFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RCE_LIMPAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_LIMPBI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_LIMPTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_LIMPQR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_LIMPQN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCE_PDRESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'RCE010'
  });
};
