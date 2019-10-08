/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED201B', {
    AMBIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RECEITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    XML_CONF: {
      type: "IMAGE",
      allowNull: true
    },
    ORIGXMLCFG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTCONSCFG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRCONSCFG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
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
    tableName: 'SPED201B'
  });
};
