/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CDL010', {
    CDL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDL_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CDL_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDL_ESPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CDL_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CDL_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDL_INDDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDL_NUMDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CDL_DTDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CDL_NATEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDL_NRREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CDL_DTREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CDL_CHCEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    CDL_DTCHC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CDL_DTAVB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CDL_TPCHC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDL_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDL_NRMEMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    CDL_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CDL_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDL_DOCORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CDL_SERORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDL_NFEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CDL_SEREXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDL_ESPEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CDL_EMIEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CDL_CHVEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    CDL_QTDEXP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CDL_UFEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDL_LOCEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    CDL_ITEMNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CDL_ITEORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CDL_PRDORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CDL_PRODNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    CDL_ACDRAW: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CDL_LOCDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    CDL_CODMOE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDL_VLREXP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CDL_NRDESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    CDL_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDL_SDOCEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDL_SDOCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'CDL010'
  });
};
