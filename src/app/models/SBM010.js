/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SBM010', {
    BM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BM_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BM_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    BM_PICPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    BM_PROORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BM_CODMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BM_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BM_GRUREL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    BM_TIPGRU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BM_MARKUP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BM_PRECO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BM_LENREL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BM_TIPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BM_CLASGRU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BM_FORMUL: {
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
    BM_MARGPRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BM_CODGRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BM_DTUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BM_HRUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BM_CONC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BM_CORP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    BM_EVENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    BM_LAZER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    BM_TPSEGP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SBM010'
  });
};
