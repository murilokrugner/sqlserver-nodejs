/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CFC010', {
    CFC_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CFC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CFC_UFORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CFC_UFDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CFC_CODPRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CFC_ALQFCP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CFC_IDHIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CFC_DESCR1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CFC_MGLQST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CFC_ALQSTL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CFC_MARGEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CFC_ALFCPO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CFC_FCPAUX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CFC_FCPINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CFC_FCPXDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CFC_PRECST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CFC_RDCTIM: {
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
    CFC_MVAES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CFC_NUMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CFC_ADICST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CFC_PICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CFC_VL_ANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CFC_VLICMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CFC_VL_ICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'CFC010'
  });
};
