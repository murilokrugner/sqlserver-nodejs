/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFE010', {
    FE_NROCERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    FE_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FE_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FE_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FE_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FE_ORDPAGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FE_NFISCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FE_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FE_VALBASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FE_ALIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FE_VALIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FE_RETENC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FE_DEDUC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FE_PORCRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FE_CONCEPT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FE_PARCELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FE_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FE_SERIEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FE_ESPECIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FE_ITEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FE_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FE_LOJCOND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FE_FORCOND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FE_CODASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FE_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FE_RECIBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FE_CONCEP2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FE_CERTDET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FE_NUMOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
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
    FE_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FE_SDOCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'SFE010'
  });
};
