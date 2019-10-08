/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SAE010', {
    AE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AE_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AE_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AE_DIAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AE_TAXA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AE_VENCTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AE_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AE_USAFATO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE_VENCFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AE_FINPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AE_REDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AE_GRPFRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AE_PLABEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE_AGLPARC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AE_SOFEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AE_DESCSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AE_SEGURAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE_ADMCART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AE_VCOMPRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE_PARCDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AE_PARCATE: {
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
    AE_ECCODIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AE_LAYOUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AE_LAYIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AE_ECCNFPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AE_DIAUTIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE_SAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AE_CODEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AE_REDEAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AE_DIAEMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE_FIXADIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE_PCORTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AE_DCORTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SAE010'
  });
};
