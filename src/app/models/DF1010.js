/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DF1010', {
    DF1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DF1_NUMAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DF1_ITEAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DF1_STACOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DF1_STAENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DF1_LOCCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DF1_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DF1_CLIREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DF1_LOJREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DF1_SQEREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DF1_TIPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DF1_SELORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DF1_CDRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DF1_DATPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DF1_HORPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DF1_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DF1_CLIDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DF1_LOJDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DF1_SQEDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DF1_CDRDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DF1_DATPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DF1_HORPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DF1_TIPFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DF1_CLIDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DF1_LOJDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DF1_VLRINF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DF1_NUMCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DF1_VALFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DF1_VALIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DF1_VALTOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DF1_QTDVOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DF1_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DF1_PESOM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DF1_METRO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DF1_VALMER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DF1_FILDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DF1_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DF1_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DF1_DATCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DF1_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DF1_SEQENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DF1_DISTIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DF1_DATCAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DF1_CODOBC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DF1_DISTAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DF1_MRKPAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DF1_NFBALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DF1_OLDSQR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DF1_OLDSQD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DF1_TIPNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DF1_SDOC: {
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
    DF1_CODNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DF1_DOCTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DF1_NCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DF1_SRVCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DF1_SCOMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'DF1010'
  });
};
