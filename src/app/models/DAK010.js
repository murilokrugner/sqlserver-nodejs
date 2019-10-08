/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DAK010', {
    DAK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DAK_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAK_SEQCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DAK_ROTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAK_CAMINH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DAK_MOTORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAK_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DAK_CAPVOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DAK_PTOENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DAK_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DAK_FEZNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DAK_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DAK_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DAK_JUNTOU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAK_ACECAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DAK_ACEVAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DAK_ACEFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DAK_AJUDA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAK_AJUDA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAK_AJUDA3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAK_DTACCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DAK_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DAK_FLGUNI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DAK_DATENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DAK_BLWMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DAK_BLQCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DAK_HRSTAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DAK_IDENT: {
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
    },
    DAK_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAK_VIAROT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DAK_CDTPOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DAK_CDCLFR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    }
  }, {
    tableName: 'DAK010'
  });
};
