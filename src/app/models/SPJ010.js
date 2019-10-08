/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPJ010', {
    PJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PJ_TURNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PJ_SEMANA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PJ_DIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PJ_TPDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PJ_HORMENO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_ENTRA1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_SAIDA1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_ENTRA2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_SAIDA2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_ENTRA3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_SAIDA3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_ENTRA4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_SAIDA4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_HORMAIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_CODREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PJ_TPEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PJ_TPEXTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PJ_NONAHOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PJ_INTERV1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PJ_INTERV2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PJ_INTERV3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PJ_JND1CON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PJ_JND2CON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PJ_JND3CON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PJ_JND4CON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PJ_HRSINT1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_HRSINT2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_HRSINT3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_HRSTRAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_HRSTRA2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_HRSTRA3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_HRSTRA4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_HRTOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PJ_INTSREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PJ_RHEXP: {
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
    tableName: 'SPJ010'
  });
};
