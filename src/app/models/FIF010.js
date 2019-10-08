/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FIF010', {
    FIF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIF_TPREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIF_INTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    FIF_CODEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    FIF_DTTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FIF_NURESU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FIF_NUCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    FIF_NSUTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    FIF_NUCART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                   '
    },
    FIF_VLBRUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FIF_TOTPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIF_VLLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FIF_DTCRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FIF_PARCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIF_TPPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIF_CAPTUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIF_CODRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FIF_VLCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FIF_TXSERV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FIF_CODLOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FIF_CODAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    FIF_CUPOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FIF_SEQREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FIF_DTAJST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FIF_CODMAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    FIF_DSCMAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                '
    },
    FIF_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIF_DTBAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FIF_DTIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FIF_USERGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    FIF_MSIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FIF_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIF_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FIF_PARC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIF_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIF_PARALF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIF_CODFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIF_CODBAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    FIF_SEQFIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    FIF_CODBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIF_CODAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    FIF_NUMCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FIF_DTANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'FIF010'
  });
};
