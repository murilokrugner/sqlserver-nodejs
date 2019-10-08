/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SW2010', {
    W2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W2_PO_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    W2_PO_DT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W2_NR_ALTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_IMPCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W2_DT_ALTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W2_FORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W2_FORLOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W2_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W2_CLILOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W2_FOB_TOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_INLAND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_DESCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_PACKING: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_OUT_DES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_DT_IMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W2__NR_COT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    W2__DT_COT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W2_NR_PRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    W2_DT_PRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W2_AGENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W2_FORWARD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W2_TIPO_EM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W2_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W2_DEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W2_FREINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W2_FRETEIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_FREPPCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W2_COND_PA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    W2_DIAS_PA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_COMPRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W2_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W2_PESO_B: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_DT_PAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W2_PARID_U: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_INCOTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W2_CONSIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W2_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W2_EMITIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W2_DT_PC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W2_TAB_PC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    W2_STAT_PC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W2_DT_INTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W2_EMISCCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W2_NRCCAMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    W2_RECCCAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W2_BAN_REC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    W2_ENCARGO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_CORRETA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_CUST_TR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    W2_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W2_AGENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    W2_TX_CAM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_TX_DESP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_TX_RESE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_DESP_CA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_MOE_DES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W2_FOB_ANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_LC_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    W2_DES_IPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    W2_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W2_COD_MSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W2__AB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    W2_CONF_PE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W2_ENV_ORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W2_ARQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    W2_DESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W2_EXPORTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W2_EXPLOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W2_COND_EX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    W2_DIAS_EX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_E_LC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W2_COMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W2_TIP_COM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W2_VAL_COM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_PER_COM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_OUT_COM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    W2_CONTAIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W2_COMPL_I: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    W2_REG_TRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W2_DT_SHIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W2_MT3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_CONTA20: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_REFCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    W2_CONTA40: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_INTEGRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W2_CON40HC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_OUTROS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_POSICAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    W2_PROCNU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    W2_PO_SIGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W2_VLMIDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W2_VENCDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W2_ARMAZEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    W2_HAWB_DA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    W2_CHAVEFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                     '
    },
    W2_CONAPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W2_IMPENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W2_ID_ANU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    W2_ID_PRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    W2_SIAUTO: {
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
    W2_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W2_CONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W2_RAT_POR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W2_SEGINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W2_SEGURIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SW2010'
  });
};
