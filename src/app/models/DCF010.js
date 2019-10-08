/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DCF010', {
    DCF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DCF_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DCF_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DCF_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DCF_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DCF_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DCF_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DCF_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DCF_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DCF_STSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DCF_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DCF_QTSEUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DCF_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DCF_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DCF_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DCF_ESTFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DCF_REGRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DCF_ENDER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DCF_LOTECT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DCF_NUMLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DCF_PRIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DCF_CODFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DCF_CARGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DCF_UNITIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DCF_STRADI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DCF_DOCORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DCF_SERORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DCF_CODZON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DCF_QTDORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DCF_CODNOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DCF_ID: {
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
    DCF_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DCF_SDOCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DCF_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DCF_IDORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DCF_LOCDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DCF_ENDDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DCF_PRDORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DCF_CODREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DCF_CODPLN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DCF_DOCPEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DCF_UNIDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DCF_IDMVOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    }
  }, {
    tableName: 'DCF010'
  });
};
