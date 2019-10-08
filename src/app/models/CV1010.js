/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CV1010', {
    CV1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CV1_ORCMTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CV1_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    CV1_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CV1_CALEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CV1_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CV1_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CV1_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CV1_CT1INI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CV1_CT1FIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CV1_CTTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV1_CTTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV1_CTDINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV1_CTDFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV1_CTHINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV1_CTHFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV1_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CV1_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CV1_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CV1_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CV1_APROVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
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
    tableName: 'CV1010'
  });
};
