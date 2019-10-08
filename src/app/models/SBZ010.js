/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SBZ010', {
    BZ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BZ_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BZ_LOCPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BZ_TE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BZ_TS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BZ_QE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_EMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_CUSTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_UCALSTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BZ_MCUSTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BZ_UCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BZ_ESTSEG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_ESTFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BZ_FORPRZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BZ_PE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_TIPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BZ_LE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_LM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_TOLER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_CONINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BZ_DATREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BZ_EMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_UPRC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_TIPOCQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BZ_QB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_PICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_VLR_ICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_INT_ICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_PICMRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_PICMENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_IPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_VLR_IPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_REDPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_REDCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_IRRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BZ_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BZ_GRTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BZ_ALIQISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_ALFUMAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_OPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    BZ_MRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BZ_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    BZ_MARKUP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_FANTASM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BZ_FECP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_PIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BZ_COFINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BZ_CSLL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BZ_PCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_FECPBA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_ALFECRN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_TRIBMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BZ_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    BZ_CLASFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BZ_FCIPRV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_IDHIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BZ_DTINCLU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BZ_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BZ_CTRWMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BZ_MOPC: {
      type: "IMAGE",
      allowNull: true
    },
    BZ_PCOFINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_PPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_IMPNCM: {
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
    BZ_QBP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BZ_LOCALI2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    }
  }, {
    tableName: 'SBZ010'
  });
};
