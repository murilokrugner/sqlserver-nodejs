/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CQA010', {
    CQA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQA_FILCT2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQA_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CQA_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CQA_SBLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CQA_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CQA_LINHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CQA_MOEDLC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQA_EMPORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQA_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQA_TPSALD: {
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
    }
  }, {
    tableName: 'CQA010'
  });
};
