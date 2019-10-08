/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SS9010', {
    S9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S9_UFORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S9_UFDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S9_CODPRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    S9_ALQFCP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S9_IDHIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    S9_MGLQST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S9_ALQSTL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S9_MARGEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S9_ALFCPO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S9_FCPAUX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S9_FCPINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S9_FCPXDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S9_PRECST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S9_RDCTIM: {
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
    S9_ADICST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S9_PICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S9_VL_ANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SS9010'
  });
};
