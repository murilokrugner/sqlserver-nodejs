/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DY3010', {
    DY3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DY3_ONU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DY3_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DY3_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    DY3_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DY3_NRISCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DY3_GRPEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DY3_LIMVEI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DY3_LIMEMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DY3_UN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    DY3_INFCPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'DY3010'
  });
};
