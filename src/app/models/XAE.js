/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('XAE', {
    XAE_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    XAE_MODEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XAE_ROTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    XAE_ADAPT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    XAE_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XAE_ENVREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XAE_MODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XAE_COND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    XAE_FORMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XAE_AREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    XAE_CARGO: {
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
    tableName: 'XAE'
  });
};
