/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SN3990', {
    N3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N3_CBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    N3_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    N3_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N3_TIPREAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    N3_BAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N3_HISTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    N3_TPSALDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N3_TPDEPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N3_CCONTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    N3_CUSTBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_CDEPREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    N3_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_CCDEPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    N3_CDESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    N3_CCORREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    N3_NLANCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_DLANCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N3_DINDEPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N3_FIMDEPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N3_DEXAUST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N3_VORIG1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_TXDEPR1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VORIG2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_TXDEPR2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VORIG3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_TXDEPR3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VORIG4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_TXDEPR4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VORIG5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_TXDEPR5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRCBAL1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRDBAL1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRCMES1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRDMES1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRCACM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRDACM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRDBAL2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRDMES2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRCACM2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRDACM2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRDBAL3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRDMES3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRCACM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRDACM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRDBAL4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRDMES4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRCACM4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRDACM4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRDBAL5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRDMES5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRCACM5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRDACM5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_INDICE1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_INDICE2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_INDICE3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_INDICE4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_INDICE5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_AQUISIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N3_DTBAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N3_VRCDM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRCDB1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRCDA1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRCDA2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRCDA3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRCDA4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VRCDA5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_PERDEPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VMXDEPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VLSALV1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_DEPREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    N3_CALCDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N3_PRODANO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_PRODMES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N3_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    N3_CCDESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_CCCDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_CCCDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_CCCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_SUBCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_SUBCCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_SUBCDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_SUBCCDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_SUBCDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_SUBCCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_BXICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_SEQREAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N3_AMPLIA1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_AMPLIA2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_AMPLIA3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_AMPLIA4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_AMPLIA5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_CODBAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N3_FILORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N3_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_CLVLCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_CLVLDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_CLVLCDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_CLVLDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_CLVLCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N3_IDBAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N3_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N3_NOVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N3_QUANTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_PERCBAI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    N3_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N3_DTACELE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N3_VLACEL1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VLACEL2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VLACEL3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VLACEL4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_VLACEL5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_RATEIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N3_CODRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    },
    N3_CLVRCOA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N3_CLVRDEA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N3_CRIDEPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    N3_CALDEPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    N3_PRODACM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N3_CODIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'SN3990'
  });
};
