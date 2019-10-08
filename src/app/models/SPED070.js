/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED070', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    XML_STATUS: {
      type: "IMAGE",
      allowNull: true
    },
    TIMESTATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TOTVSCOLAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AMBIENTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
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
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED070'
  });
};
