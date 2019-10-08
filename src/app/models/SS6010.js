/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SS6010', {
    S6_CLASFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S6_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    S6_LOCPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S6_TE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S6_TS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S6_QE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_EMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_CUSTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_UCALSTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S6_MCUSTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S6_UCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S6_ESTSEG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_ESTFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S6_FORPRZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S6_PE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_TIPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S6_LE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_LM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_TOLER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_CONINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S6_DATREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S6_EMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_UPRC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_TIPOCQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S6_QB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_PICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_VLR_ICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_INT_ICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_PICMRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_PICMENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_IPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_VLR_IPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_REDPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_REDCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_IRRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S6_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S6_GRTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S6_ALIQISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_ALFUMAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_OPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    S6_MARKUP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    S6_MRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S6_FANTASM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S6_DTINCLU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S6_IDHIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    S6_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    S6_CSLL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S6_FCIPRV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_COFINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S6_FECP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_PCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_PIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S6_FECPBA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_ALFECRN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_PCOFINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S6_PPIS: {
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
    }
  }, {
    tableName: 'SS6010'
  });
};
