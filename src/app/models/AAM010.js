/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AAM010', {
    AAM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AAM_CONTRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AAM_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AAM_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AAM_TPCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AAM_CLASSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AAM_ABRANG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AAM_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AAM_INIVIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AAM_FIMVIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AAM_CPAGPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AAM_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AAM_TIPFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AAM_REAAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AAM_SELSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AAM_AGRNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AAM_TAXCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AAM_PESCTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AAM_NFCTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AAM_AJUOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AAM_GRPVOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AAM_PRCPRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AAM_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AAM_LOJENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AAM_PROPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AAM_REVPRO: {
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
    },
    AAM_ESTAGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'AAM010'
  });
};
