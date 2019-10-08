/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAA010', {
    TAA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TAA_SUBPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TAA_CODPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TAA_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TAA_DTIMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TAA_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TAA_DTINPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TAA_DTFIPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TAA_DTINRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TAA_DTFIRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TAA_OQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TAA_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TAA_ONDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TAA_PORQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TAA_COMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TAA_CUSTOP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAA_CUSTOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAA_QTDATU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAA_META: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAA_QTDFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAA_PERCEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAA_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    TAA_DOCFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TAA_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TAA_USUARI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TAA_TPMETA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TAA_STATUS: {
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
    TAA_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TAA_METINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAA_METFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAA_UNIMET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TAA_FORFEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TAA_TIPMET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TAA_DTPRFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TAA_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TAA_FILFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TAA_TIPOPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TAA_UNIMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'TAA010'
  });
};
