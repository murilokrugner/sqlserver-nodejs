/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TRX010', {
    TRX_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TRX_MULTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TRX_TPMULT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TRX_DTINFR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_RHINFR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TRX_DTREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_NUMAIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    TRX_CODINF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_RODOVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRX_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                '
    },
    TRX_CIDINF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TRX_UFINF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TRX_CODOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRX_PLACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TRX_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_RENAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TRX_CODMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRX_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TRX_FILMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TRX_REPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_PAGTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_DTVECI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TRX_DESCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TRX_DTPGTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_VALPAG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TRX_DTEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_NUMSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TRX_CODAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRX_INFRAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_DTIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_DTNAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_NUMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TRX_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_RECURS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_INDREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_DTENRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_NUMCI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TRX_MOTREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRX_SITREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_DTFIRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_SEGINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_DTENR2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_NUMCI2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TRX_MOTRE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRX_SITRE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_DTFIR2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_RECAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_RECNOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_NOTDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_DTDIGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_HRDIGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TRX_USUDIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TRX_NF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TRX_DATADV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_CABREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_RESTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TRX_ADVERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_NUMAPD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TRX_DTSOLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_VLRSOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TRX_STSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_DTEFET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRX_INDFOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRX_MMSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRX_MMPAGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRX_MMCOND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRX_MMRECU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRX_MMREST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRX_PCTDSC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TRX_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TRX_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TRX_NUMSE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TRX_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TRX_CONPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TRX_GRPVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRX_ITEMCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    tableName: 'TRX010'
  });
};
