/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CSL010', {
    CSL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CSL_CODREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CSL_DTLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CSL_NUMLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                           '
    },
    CSL_LINHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CSL_CODCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSL_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSL_CTAREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSL_VLPART: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSL_INDDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CSL_NUMARQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                           '
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
    CSL_FUPART: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSL_TAXA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSL_ADPART: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'CSL010'
  });
};
