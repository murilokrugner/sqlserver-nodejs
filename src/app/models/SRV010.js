/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SRV010', {
    RV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RV_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RV_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RV_DESCDET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    RV_TIPOCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_IMPRIPD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_PERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RV_CODCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RV_CODFOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RV_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_OBRIGAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_QTDLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_LCTODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_VLIMDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RV_VLIMATE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RV_RLIMDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RV_RLIMATE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RV_INSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_IR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_FGTS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_INCORP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_REF13: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_REFFER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_ADIANTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_PERICUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_INSALUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_PENSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_DSRHE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_HE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_ADICTS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_SINDICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_SALFAMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_SEGVIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_DEDINSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RV_PIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_ENCARCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_CUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_LCTOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RV_MED13: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RV_MEDFER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RV_MEDAVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RV_GRAMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RV_CONVCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_MEDREAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_VALDISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_RAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    RV_DIRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RV_COMPL_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_CODCOM_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RV_DSRPROF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_HRSATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_CUSTEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_COD13: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RV_CODFER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RV_CODMSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RV_LANCPCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RV_GRPVERB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RV_CODDSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RV_CODBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RV_HOMOLOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    RV_INSSFER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_LEEINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_LEEPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_LEEAUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_LEEBEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_LEEFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_FECCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_CODMEMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RV_RRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_BASCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_NATUREZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RV_INCIRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RV_INCFGTS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RV_INCSIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RV_INCCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RV_TPPIRRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_NRPIRRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RV_TPPFGTS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_NRPFGTS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RV_TPPSIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_NRPSIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RV_TPPROCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_NRPROCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RV_EXPROCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_FERSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RV_EMPCONS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_AGLTRCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_CODREMU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RV_INSSJUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_BSEREMT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RV_INFDED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SRV010'
  });
};
