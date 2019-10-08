/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CDS010', {
    CDS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDS_TPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDS_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CDS_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDS_ESPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CDS_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CDS_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDS_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CDS_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CDS_PEDCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CDS_SGLPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDS_SEPPEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CDS_TPFORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDS_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDS_DTVALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CDS_PEDREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    CDS_CDPAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CDS_PBRUTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CDS_PLIQUI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CDS_TPCHAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDS_NUMCHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CDS_DTCHAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CDS_QTDEMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CDS_QTDIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CDS_LOCENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    CDS_PTUSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CDS_TPTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CDS_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    CDS_CPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDS_NFEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CDS_SEREMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDS_CDEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CDS_AUTFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CDS_CDITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
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
    CDS_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDS_SDOCEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'CDS010'
  });
};
