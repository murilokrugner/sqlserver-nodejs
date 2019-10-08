/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SRF010', {
    RF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RF_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RF_DATABAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RF_DFERANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_DFERVAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_VPROVAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_PD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RF_VIAPVAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_VFGTVAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_DFERAAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_VPROAAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_VIAPAAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_VFGTAAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_VPRDTAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_VINDTAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_VFGDTAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_VADPVAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_VADPAAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_PERC13S: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_PAR13AT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_TADDTAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_FERCOLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RF_TEMABPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RF_DATAINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RF_DFEPRO1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_DABPRO1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_DATINI2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RF_DFEPRO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_DABPRO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_DATINI3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RF_DFEPRO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_DABPRO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_DVENPEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_IVENPEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RF_FVENPEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RF_DFALVAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_DFALAAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_DATAATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RF_DATAA13: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RF_ABOPEC: {
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
    },
    RF_DATAFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RF_DIASDIR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_DIASANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RF_OBSERVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SRF010'
  });
};
