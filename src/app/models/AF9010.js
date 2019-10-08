/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AF9010', {
    AF9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AF9_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AF9_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AF9_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AF9_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AF9_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                          '
    },
    AF9_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AF9_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_HDURAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_CALEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AF9_START: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF9_FINISH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF9_HORAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AF9_HORAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AF9_HUTEIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_DTATUI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF9_DTATUF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF9_HRATUI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AF9_HRATUF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AF9_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    AF9_ITEMCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    AF9_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    AF9_FATURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF9_VATU1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VATU2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VATU3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VATU4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VATU5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VFIM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VFIM2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VFIM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VFIM4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VFIM5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VINI1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VINI2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VINI3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VINI4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VINI5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_EDTPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AF9_VDSP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VDSP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VDSP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VDSP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VDSP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_COMPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AF9_CNVPRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF9_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF9_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AF9_GRPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AF9_PRIORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_DTCONV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF9_CUSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_CUSTO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_CUSTO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_CUSTO4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_CUSTO5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AF9_RESTRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF9_DTREST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF9_HRREST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AF9_TXMO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_TXMO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_TXMO4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_TXMO5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_BDI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_VALBDI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_PRODFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AF9_COMPUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AF9_TPMEDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF9_UTIBDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF9_FNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AF9_REVFNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AF9_ACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AF9_REVACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AF9_TPACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AF9_HESF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_TPTRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF9_AGCRTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF9_TIPPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AF9_TPHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF9_RASTRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF9_CHKLST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AF9_TOTIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    AF9_IDPROJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    }
  }, {
    tableName: 'AF9010'
  });
};
