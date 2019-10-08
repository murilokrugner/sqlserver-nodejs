/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ACA010', {
    ACA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACA_GRPREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACA_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    ACA_GRPSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACA_ACCLIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_ACPROS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_ACPIPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_ACAPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_ACOPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_ACESTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_MODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_MODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_MODOPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_MODEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_TIPSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACA_LIBORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_PROPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_ACSUSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_ACCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_ACMETA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_ACPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_SCRIPT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_QUASUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACA_PDSCMX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ACA_VDSCMX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ACA_PACRMX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ACA_VACRMX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ACA_USRESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACA_MSBLQL: {
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
    tableName: 'ACA010'
  });
};
