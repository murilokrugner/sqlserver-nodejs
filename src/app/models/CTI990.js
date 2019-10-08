/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTI990', {
    CTI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTI_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTI_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTI_CUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTI_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTI_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTI_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTI_DEBITO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CTI_CREDIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CTI_TPSALD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTI_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTI_ATUDEB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CTI_ATUCRD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CTI_ANTDEB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CTI_ANTCRD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CTI_LPDEB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CTI_LPCRD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CTI_SLBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTI_SLCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTI_DTLP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTI_LP: {
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
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    }
  }, {
    tableName: 'CTI990'
  });
};
