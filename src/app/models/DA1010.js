/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DA1010', {
    DA1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA1_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DA1_CODTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DA1_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DA1_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DA1_REFGRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                          '
    },
    DA1_PRCVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA1_VLRDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA1_PERDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA1_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DA1_FRETE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA1_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA1_TPOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DA1_QTDLOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA1_INDLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DA1_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA1_DATVIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA1_ITEMGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DA1_PRCMAX: {
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
    },
    DA1_DTUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA1_HRUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA1_ECDTEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA1_ECSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DA1_USERGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    DA1_USERGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    DA1_MSEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA1_HREXPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'DA1010'
  });
};
