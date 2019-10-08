/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AO2010', {
    AO2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AO2_ENTID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AO2_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AO2_ESPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO2_ATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO2_CONEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO2_ANOTAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO2_MEMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO2_CEMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO2_WAVIEW: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO2_AGRREG: {
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
    tableName: 'AO2010'
  });
};
