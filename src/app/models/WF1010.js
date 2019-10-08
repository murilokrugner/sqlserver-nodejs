/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WF1010', {
    WF1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    WF1_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    WF1_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    WF1_ALIAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    WF1_SXB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    WF1_VISIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
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
    tableName: 'WF1010'
  });
};
