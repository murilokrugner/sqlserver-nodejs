/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CV4010', {
    CV4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CV4_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CV4_DTSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CV4_DEBITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CV4_CREDIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CV4_PERCEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CV4_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CV4_HIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CV4_CCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV4_CCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV4_ITEMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV4_ITEMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV4_CLVLDB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV4_CLVLCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV4_ITSEQ: {
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
    }
  }, {
    tableName: 'CV4010'
  });
};
