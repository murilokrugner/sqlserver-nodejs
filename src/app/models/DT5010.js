/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DT5010', {
    DT5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT5_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT5_NUMSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DT5_DATSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT5_HORSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DT5_TIPCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT5_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT5_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DT5_SEQEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DT5_CDRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT5_CLIDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT5_LOJDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT5_SQEDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DT5_TIPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT5_CDRDCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT5_NUMCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT5_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT5_DATPRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT5_HORPRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DT5_DATENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT5_HORENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DT5_CODOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT5_DATCAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT5_CODOBC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT5_FILDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT5_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DT5_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT5_ROTPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT5_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT5_USRLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT5_DATLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT5_HORLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DT5_CLIDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT5_LOJDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT5_CADPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT5_CODSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DT5_NUMATD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT5_ITEATD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT5_OLDSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT5_OLDSQD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT5_SDOC: {
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
    DT5_NCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DT5_CODNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT5_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT5_TIPFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT5_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT5_CLIREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT5_LOJREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT5_KM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT5_LOCCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT5_SQEREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DT5_SRVENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'DT5010'
  });
};
