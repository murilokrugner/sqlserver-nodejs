/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SBI010', {
    BI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BI_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BI_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    BI_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BI_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BI_LOCPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BI_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BI_PICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_IPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_ALIQISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BI_TS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BI_PICMRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_PICMENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_IMPZFRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BI_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BI_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BI_QE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_CLASFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BI_FORAEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BI_CODBAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BI_PRV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BI_ALIQRED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_SETOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BI_BALANCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BI_GRTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BI_CONTSOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BI_IRRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BI_INSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BI_REDINSS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_REDIRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_REDPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_REDCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_PPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_PCOFINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_PCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_PIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BI_COFINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BI_CSLL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BI_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BI_DTINFO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BI_PRVINFO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_IAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BI_IPPT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BI_SITTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BI_VALEPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BI_GARANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BI_PERGART: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_ADMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    BI_DIASGAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_IMPNCM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BI_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BI_POSIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BI_CEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    BI_EX_NCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BI_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    BI_FECP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SBI010'
  });
};
