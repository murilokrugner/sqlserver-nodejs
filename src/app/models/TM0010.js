/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TM0010', {
    TM0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TM0_NUMFIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TM0_CANDID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TM0_FILFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TM0_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TM0_NUMDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TM0_NOMFIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TM0_DTIMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TM0_DOADOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TM0_DTDOAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TM0_SANGUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TM0_FATORH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TM0_FICANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TM0_DTNASC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TM0_SEXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TM0_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TM0_ALTURA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TM0_MASSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TM0_ALTOLH: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TM0_LMAMIL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TM0_ALTPUB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TM0_ALTJOE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TM0_ALTCOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TM0_TAMBRA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TM0_TAMANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TM0_TAMMAO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TM0_COMPPE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TM0_NUMCAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TM0_TIPFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TM0_FUMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TM0_QTCIG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TM0_QTTEMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TM0_RG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TM0_LOCFIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TM0_DESCRI: {
      type: "IMAGE",
      allowNull: true
    },
    TM0_CODFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TM0_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TM0_COROLH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TM0_CORCAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TM0_CORPEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TM0_NUMCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    TM0_SERCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TM0_UFCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TM0_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TM0_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TM0_ESTCIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TM0_CPF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    TM0_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TM0_TIPDEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TM0_CODCID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TM0_INDBIO: {
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
    TM0_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    }
  }, {
    tableName: 'TM0010'
  });
};
