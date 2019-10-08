/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DIK010', {
    DIK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIK_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIK_LOTNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIK_DATENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DIK_MOENFC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DIK_FILDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIK_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DIK_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DIK_FILCFS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIK_NUMSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIK_DATCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DIK_HORCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DIK_CLIREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIK_LOJREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIK_CLIDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIK_LOJDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIK_CLICON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIK_LOJCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIK_CLINOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIK_LOJNOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIK_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DIK_PESOM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DIK_PESLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DIK_METRO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DIK_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DIK_INCOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DIK_VALMER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DIK_CODDCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIK_VALFEX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DIK_VALRBE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DIK_CODDCL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIK_SERTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DIK_DEVFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DIK_TIPFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DIK_CLIDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIK_LOJDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DIK_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DIK_SELORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DIK_CDRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIK_CDRDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIK_CDRCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIK_ROTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIK_VALSEG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DIK_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DIK_DATCAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DIK_CODOBC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIK_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DIK_CODADU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DIK_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DIK_CODNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'DIK010'
  });
};
