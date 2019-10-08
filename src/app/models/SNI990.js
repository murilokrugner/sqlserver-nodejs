/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SNI990', {
    NI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NI_PROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NI_DTEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NI_DTIOA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NI_LA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NI_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NI_PARAM: {
      type: "IMAGE",
      allowNull: true
    },
    NI_ROTINA: {
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
    tableName: 'SNI990'
  });
};
