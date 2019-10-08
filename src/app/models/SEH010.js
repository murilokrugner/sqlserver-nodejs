/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEH010', {
    EH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EH_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EH_REVISAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EH_APLEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EH_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EH_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EH_AGENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EH_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EH_NBANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EH_NATUREZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EH_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EH_TAXA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_QUOTAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_CONTRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EH_BCOCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EH_AGECONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EH_CTACONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EH_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_DATARES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EH_IMPOSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_TAXAIRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_TAXAIOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_TXIRSWP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_VALIOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_VALREG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_VALIRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_VALSWAP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_VALISWP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_VALJUR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_VALCORR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_VALOUTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_VALCRED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_LA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EH_SALDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_ULTAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EH_GARANTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EH_FORMULA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EH_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EH_VLCRUZ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_ACUJUR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_ACUJUR2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_ACUVCCP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_ACUVCLP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_ACUVCJR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_PERCPLP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_VALVCJR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_VALVCCP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_VALVCLP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_VALJUR2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_VALREG2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_VALGAP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_CTRSWAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EH_IMPOSWP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_VIOFSWP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_SLDCOTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_IRACUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_VLRCOTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_DTULTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EH_TARIFA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_IOFVIRT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_DEBITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EH_CCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EH_ITEMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EH_CLVLDB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EH_CREDIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EH_CCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EH_ITEMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EH_CLVLCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EH_ULTPGIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EH_VLMOED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EH_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EH_CLSIOF: {
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
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EH_TPCUSTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EH_DATVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EH_TPOUTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    EH_TPBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EH_VINCANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EH_GERPARC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EH_ENTRADA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_FINANC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_PRAZO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_CARENCI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_TXEFETI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_SPREAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_PSPREAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_DESPESA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EH_DSPREAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EH_JURCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EH_AMORTIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EH_VLAMORP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SEH010'
  });
};
