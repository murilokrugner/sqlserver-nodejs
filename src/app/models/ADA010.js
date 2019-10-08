/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ADA010', {
    ADA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADA_NUMCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADA_EMISSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADA_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADA_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADA_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ADA_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ADA_DESC1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADA_DESC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADA_DESC3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADA_DESC4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADA_VEND1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADA_VEND2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADA_VEND3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADA_VEND4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADA_VEND5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADA_COMIS1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADA_COMIS2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADA_COMIS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADA_COMIS4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADA_COMIS5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADA_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADA_TIPLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADA_STATUS: {
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
    ADA_SAFRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADA_TRCNUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ADA_CODSAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ADA_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADA_TPFRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADA_CTRCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADA_FRETE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADA_MENNOT: {
      type: "IMAGE",
      allowNull: true
    }
  }, {
    tableName: 'ADA010'
  });
};
